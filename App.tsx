import { useState, useEffect, useRef } from 'react';
import Background from './components/Background';
import Landing from './components/Landing';
import Guidelines from './components/Guidelines';
import Login from './components/Login';
import Game from './components/Game';
import Disqualified from './components/Disqualified';
import { ViewState, TeamConfig } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [activeTeam, setActiveTeam] = useState<TeamConfig | null>(null);
  const [initialClueIndex, setInitialClueIndex] = useState(0);
  const viewRef = useRef<ViewState>('landing');

  // Update ref whenever view changes so effect listeners can see current state
  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  useEffect(() => {
    // Clear any existing storage to ensure no cross-session data
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('crime_scene_')) {
        localStorage.removeItem(key);
      }
    });

    const handleCheatDetection = () => {
      // If the user is in the game and they switch tabs/minimize/split screen
      if (viewRef.current === 'game') {
        setView('disqualified');
      }
    };

    // Listen for tab switching / minimizing
    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        handleCheatDetection();
      }
    });

    // Listen for window blur (focus loss - often happens during split-screen or overlay triggers)
    window.addEventListener('blur', handleCheatDetection);

    return () => {
      window.removeEventListener('visibilitychange', handleCheatDetection);
      window.removeEventListener('blur', handleCheatDetection);
    };
  }, []);

  const handleStart = () => {
    setView('guidelines');
  };

  const handleProceedToLogin = () => {
    setView('login');
  };

  const handleLoginSuccess = (team: TeamConfig) => {
    setActiveTeam(team);
    setInitialClueIndex(0);
    setView('game');
  };

  const handleReset = () => {
    setActiveTeam(null);
    setInitialClueIndex(0);
    setView('landing');
    window.location.reload();
  };

  const renderContent = () => {
    switch (view) {
      case 'landing':
        return <Landing onStart={handleStart} />;
      case 'guidelines':
        return <Guidelines onProceed={handleProceedToLogin} />;
      case 'login':
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case 'game':
        if (activeTeam) {
          return (
            <Game 
              team={activeTeam} 
              initialClueIndex={initialClueIndex} 
              onReset={handleReset} 
            />
          );
        }
        return <Login onLoginSuccess={handleLoginSuccess} />;
      case 'disqualified':
        return <Disqualified />;
      default:
        return <Landing onStart={handleStart} />;
    }
  };

  return (
    <Background>
      {renderContent()}
    </Background>
  );
};

export default App;