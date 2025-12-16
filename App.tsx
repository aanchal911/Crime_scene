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

  // Check for existing session on mount
  useEffect(() => {
    const savedTeamId = localStorage.getItem('crime_scene_team_id');
    if (savedTeamId && TEAMS[savedTeamId]) {
      const savedProgress = localStorage.getItem(`crime_scene_${savedTeamId}_progress`);
      setActiveTeam(TEAMS[savedTeamId]);
      setInitialClueIndex(savedProgress ? parseInt(savedProgress, 10) : 0);
      // If we have a session, go straight to game, skip landing/login for better UX on reload
      setView('game');
    }
  }, []);

  const handleStart = () => {
    setView('guidelines');
  };

  const handleProceedToLogin = () => {
    setView('login');
  };

  const handleLoginSuccess = (team: TeamConfig) => {
    setActiveTeam(team);
    // Load progress if exists for this team, otherwise 0
    const savedProgress = localStorage.getItem(`crime_scene_${team.id}_progress`);
    setInitialClueIndex(savedProgress ? parseInt(savedProgress, 10) : 0);
    
    // Save session
    localStorage.setItem('crime_scene_team_id', team.id);
    
    setView('game');
  };

  // Render content based on current view state
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
          return <Game team={activeTeam} initialClueIndex={initialClueIndex} />;
        }
        return <Login onLoginSuccess={handleLoginSuccess} />; // Fallback
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
