import React, { useState, useEffect } from 'react';
import Background from './components/Background';
import Landing from './components/Landing';
import Guidelines from './components/Guidelines';
import Login from './components/Login';
import Game from './components/Game';
import { ViewState, TeamConfig } from './types';
import { TEAMS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('landing');
  const [activeTeam, setActiveTeam] = useState<TeamConfig | null>(null);
  const [initialClueIndex, setInitialClueIndex] = useState(0);

  // STRICT RULE: No persistence on mount. 
  // We clear local storage immediately to ensure fresh start on every reload.
  useEffect(() => {
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('crime_scene_')) {
        localStorage.removeItem(key);
      }
    });

    // Reset visibility handler: If user switches apps/tabs, reload the game immediately.
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        window.location.reload();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
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
    // Note: We don't save to localStorage here because of the strict "start from beginning" requirement.
    setView('game');
  };

  const handleReset = () => {
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