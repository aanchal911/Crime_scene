import React, { useState } from 'react';
import Button from './Button';
import { AlertTriangle, CheckSquare, Square } from 'lucide-react';

interface GuidelinesProps {
  onProceed: () => void;
}

const Guidelines: React.FC<GuidelinesProps> = ({ onProceed }) => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="w-full animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-6 text-blood-500">
        <AlertTriangle className="w-6 h-6" />
        <h2 className="text-2xl font-bold uppercase tracking-widest font-typewriter">Classified Protocol</h2>
      </div>

      <div className="bg-zinc-900/50 border-l-2 border-blood-700 p-6 mb-8 text-left space-y-4 font-serif text-zinc-300 leading-relaxed shadow-lg">
        <h3 className="text-white text-lg border-b border-zinc-800 pb-2 mb-4">Instructions for Investigators:</h3>
        <ul className="list-disc pl-5 space-y-2 text-base">
          <li>Each team has unique <strong>credentials</strong>. Do not share them.</li>
          <li>Clues are hidden across the university. Read details carefully.</li>
          <li>Enter the answer precisely to unlock the next stage.</li>
          <li><span className="text-red-400">Warning:</span> Wrong answers will not reveal new information.</li>
          <li>Any attempt to sabotage other teams leads to immediate <strong>disqualification</strong>.</li>
        </ul>
      </div>

      <div 
        className="flex items-center gap-4 mb-8 cursor-pointer group select-none"
        onClick={() => setAccepted(!accepted)}
      >
        <div className={`transition-colors duration-300 ${accepted ? 'text-blood-500' : 'text-zinc-600 group-hover:text-zinc-500'}`}>
            {accepted ? <CheckSquare className="w-6 h-6" /> : <Square className="w-6 h-6" />}
        </div>
        <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors text-left">
          I have read and understood the rules of engagement.
        </p>
      </div>

      <Button onClick={onProceed} disabled={!accepted}>
        PROCEED TO LOGIN
      </Button>
    </div>
  );
};

export default Guidelines;
