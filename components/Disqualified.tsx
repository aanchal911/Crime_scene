import React from 'react';
import { ShieldX, AlertOctagon } from 'lucide-react';

const Disqualified: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center animate-fade-in py-12 px-6 max-w-md mx-auto">
      <div className="mb-8 relative">
        <div className="absolute inset-0 bg-red-600 blur-[60px] opacity-40 animate-pulse"></div>
        <div className="relative z-10 border-4 border-red-600 p-6 rounded-full bg-black/80 backdrop-blur-sm shadow-[0_0_50px_rgba(220,38,38,0.5)]">
            <ShieldX className="w-20 h-20 text-red-600" strokeWidth={2} />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-black text-red-600 tracking-tighter mb-4 uppercase font-typewriter">
        ACCESS REVOKED
      </h1>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8"></div>

      <div className="bg-red-950/20 border border-red-900/50 p-6 rounded-sm backdrop-blur-md mb-8">
        <div className="flex items-center justify-center gap-2 text-red-500 font-bold mb-4 uppercase tracking-[0.2em] text-sm">
            <AlertOctagon className="w-5 h-5" />
            <span>Protocol Violation Detected</span>
        </div>
        <p className="text-zinc-300 font-serif text-lg leading-relaxed">
          Your investigation has been terminated. Attempting to switch tabs, minimize the window, or use split-screen mode is a direct violation of the rules.
        </p>
      </div>

      <div className="text-zinc-500 font-typewriter text-xs uppercase tracking-widest leading-loose">
        <p>SYSTEM LOG: SESSION_TERMINATED_SWITCH_EVENT</p>
        <p>RE-ENTRY DENIED BY OVERSEER</p>
      </div>
    </div>
  );
};

export default Disqualified;