import React, { useState } from 'react';
import Button from './Button';
import { AlertTriangle, CheckSquare, Square, Gavel } from 'lucide-react';

interface GuidelinesProps {
  onProceed: () => void;
}

const Guidelines: React.FC<GuidelinesProps> = ({ onProceed }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="w-full animate-fade-in max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-3 text-blood-500 mb-2">
            <Gavel className="w-8 h-8" />
            <h2 className="text-3xl font-bold uppercase tracking-widest font-typewriter">RULES OF ENGAGEMENT</h2>
        </div>
        <p className="text-zinc-500 font-mono text-xs tracking-[0.3em]">NUV YUVA 5.0 OFFICIAL PROTOCOL</p>
      </div>

      <div className="bg-zinc-950/60 border border-zinc-800 p-6 md:p-8 mb-8 text-left space-y-5 font-serif text-zinc-300 leading-relaxed shadow-2xl backdrop-blur-md overflow-y-auto max-h-[50vh] custom-scrollbar">
        <div className="space-y-4">
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">01.</span>
            <p>This is a college-based treasure hunt conducted through a website and campus QR codes.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">02.</span>
            <p>Each team must be pre-registered, and all team members’ phones must be logged in using the same team credentials.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">03.</span>
            <p>The competition consists of <strong>6 total clues</strong> for each team.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">04.</span>
            <p>Clues 1 to 5 are team-specific, while the 6th clue is common for all teams.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">05.</span>
            <p>Teams must solve the online clue, reach the correct campus location, and scan the QR code to unlock the next clue.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">06.</span>
            <p>A new clue will not appear on the website unless the correct QR code is scanned.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">07.</span>
            <p>No hints will be provided at any stage of the competition.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">08.</span>
            <p>There is no time limit; progress depends solely on solving and scanning in sequence.</p>
          </div>
          <div className="flex gap-4">
            <span className="text-blood-500 font-bold font-mono">09.</span>
            <p>The first team to unlock the 6th (final) common clue (won’t be qr code) will be declared the winner.</p>
          </div>
          <div className="flex gap-4 border-t border-zinc-800 pt-4 mt-4">
            <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0" />
            <p className="text-red-500/80 text-sm uppercase font-typewriter">
              10. Any team found sharing clues or damaging QR codes faces immediate disqualification, and the organizer’s decision shall be final.
            </p>
          </div>
        </div>
      </div>

      <div 
        className="flex items-center gap-4 mb-8 cursor-pointer group select-none bg-black/30 p-4 rounded-sm border border-zinc-900 hover:border-zinc-700 transition-all"
        onClick={() => setAccepted(!accepted)}
      >
        <div className={`transition-all duration-300 ${accepted ? 'text-blood-500 scale-110' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
            {accepted ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
        </div>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors text-left font-typewriter uppercase tracking-tight">
          I confirm that my unit adheres to these protocols and will proceed with caution.
        </p>
      </div>

      <Button onClick={onProceed} disabled={!accepted}>
        ACCESS CASE FILES
      </Button>
    </div>
  );
};

export default Guidelines;