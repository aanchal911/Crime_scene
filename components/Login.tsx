import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import { TEAMS } from '../constants';
import { TeamConfig } from '../types';
import { ShieldAlert, Terminal } from 'lucide-react';

interface LoginProps {
  onLoginSuccess: (team: TeamConfig) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      const cleanUsername = username.trim().toLowerCase();
      const cleanPassword = password.trim();

      const foundTeam = Object.values(TEAMS).find(
        t => t.username.toLowerCase() === cleanUsername && t.password !== "" && t.password === cleanPassword
      );

      if (foundTeam) {
        onLoginSuccess(foundTeam);
      } else {
        setError('ACCESS DENIED. INVALID CREDENTIALS.');
        setIsLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="w-full animate-fade-in max-w-md mx-auto">
      {/* Terminal Header */}
      <div className="bg-zinc-900/90 border-x border-t border-zinc-700 p-2 flex items-center gap-2 rounded-t-sm backdrop-blur-sm">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        <div className="ml-auto text-[10px] font-typewriter text-zinc-500 uppercase">Secure Connection</div>
      </div>

      <div className="bg-black/50 border border-zinc-700 p-8 rounded-b-sm shadow-2xl backdrop-blur-md">
        <div className="flex flex-col items-center mb-8 border-b border-zinc-800/50 pb-6">
            <div className="p-3 bg-zinc-900/50 rounded-full border border-zinc-700 mb-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                <ShieldAlert className="w-8 h-8 text-zinc-400" strokeWidth={1.5} />
            </div>
            <h2 className="text-xl font-bold uppercase tracking-[0.2em] text-zinc-200 font-typewriter mb-1">Restricted Access</h2>
            <p className="text-zinc-500 text-xs font-mono text-center uppercase">Team Authentication Required</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-2">
            <Input 
            label="AGENT ID" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="AGENT_ID"
            className="font-mono tracking-wider bg-zinc-900/40"
            />
            <Input 
            label="SECURITY KEY" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="font-mono tracking-widest bg-zinc-900/40"
            />

            {error && (
            <div className="bg-red-950/40 border-l-2 border-red-600 p-3 my-4 flex items-start gap-3">
                <Terminal className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-red-400 text-xs font-typewriter leading-tight">{error}</span>
            </div>
            )}

            <div className="pt-4">
                <Button type="submit" isLoading={isLoading} disabled={!username || !password}>
                {isLoading ? 'AUTHENTICATING...' : 'ESTABLISH LINK'}
                </Button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Login;