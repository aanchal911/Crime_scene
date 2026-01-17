import React, { useState } from 'react';
import { TeamConfig, Clue } from '../types';
import Button from './Button';
import Input from './Input';
import { Lock, Unlock, MapPin, Search, CheckCircle2, LogOut } from 'lucide-react';

interface GameProps {
  team: TeamConfig;
  initialClueIndex: number;
  onReset: () => void;
}

const Game: React.FC<GameProps> = ({ team, initialClueIndex, onReset }) => {
  const [currentIndex, setCurrentIndex] = useState(initialClueIndex);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const currentClue: Clue | undefined = team.clueSequence[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentClue) return;

    const normalizedInput = answer.toLowerCase().trim();
    const isCorrect = currentClue.correctAnswer.some(
      validAns => validAns.toLowerCase() === normalizedInput && validAns !== ""
    );

    if (isCorrect) {
      setIsSuccess(true);
      setError('');
      setTimeout(() => {
        if (currentIndex < team.clueSequence.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setAnswer('');
            setIsSuccess(false);
        } else {
            setCurrentIndex(prev => prev + 1);
        }
      }, 2000);
    } else {
      setError('EVIDENCE MISMATCH. TRY AGAIN.');
    }
  };

  if (!currentClue) {
    return (
        <div className="text-center animate-fade-in py-12 px-4">
            <div className="mb-6 relative inline-block">
                <CheckCircle2 className="w-24 h-24 text-green-500/80 mx-auto" strokeWidth={1} />
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20"></div>
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 tracking-tighter">CASE SOLVED</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-zinc-400 font-serif text-xl mb-8">Excellent work, {team.name}. The truth has been revealed.</p>
            <div className="p-8 border border-green-900/50 bg-green-950/10 rounded-sm backdrop-blur-sm max-w-md mx-auto mb-10">
                <p className="font-typewriter text-lg text-green-400 leading-relaxed">
                    REPORT TO HQ IMMEDIATELY FOR DEBRIEFING AND FINAL EVALUATION.
                </p>
            </div>
            
            <Button onClick={onReset} variant="secondary" className="max-w-xs mx-auto">
                RESTART INVESTIGATION
            </Button>
        </div>
    );
  }

  return (
    <div className="w-full animate-fade-in">
      <div className="flex justify-between items-center bg-zinc-900/60 border-t border-b border-zinc-800 py-3 px-4 mb-8 backdrop-blur-sm relative">
        <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-typewriter">Detective Unit</span>
            <span className="text-sm font-bold text-zinc-200">{team.name}</span>
        </div>
        
        <button 
          onClick={() => {
            if(confirm("Abort current mission and return to main menu?")) {
              onReset();
            }
          }}
          className="mx-2 p-2 text-zinc-600 hover:text-red-500 transition-colors"
        >
          <LogOut className="w-5 h-5" />
        </button>

        <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-typewriter">Evidence Chain</span>
            <span className="text-sm font-bold text-purple-500 font-typewriter">
                SEQ: {String(currentIndex + 1).padStart(2, '0')} / {String(team.clueSequence.length).padStart(2, '0')}
            </span>
        </div>
      </div>

      <div className="relative group mb-8">
         <div className="bg-paper text-ink p-1 shadow-2xl transform md:rotate-1 transition-transform duration-500 relative z-10">
            <div className="border-2 border-dashed border-zinc-400/50 p-6 md:p-10 min-h-[300px] flex flex-col relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                
                <div className="absolute top-4 right-6 transform rotate-12 border-4 border-red-700/20 text-red-700/20 px-4 py-1 font-black text-2xl md:text-4xl uppercase tracking-tighter pointer-events-none font-typewriter select-none">
                    Confidential
                </div>

                {isSuccess && (
                    <div className="absolute inset-0 bg-zinc-900/90 z-50 flex flex-col items-center justify-center animate-fade-in backdrop-blur-sm">
                        <Unlock className="w-16 h-16 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                        <h3 className="text-3xl font-bold text-white uppercase tracking-widest mb-2">Unlocked</h3>
                        <p className="text-green-400/80 font-typewriter tracking-widest text-sm animate-pulse">ACQUIRING NEXT TARGET...</p>
                    </div>
                )}

                <div className="flex items-center gap-3 mb-6 border-b-2 border-zinc-800/10 pb-4">
                    <MapPin className="w-6 h-6 text-purple-700" />
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-serif text-zinc-800">{currentClue.title}</h3>
                </div>

                <div className="flex-grow">
                    <p className="text-xl font-serif leading-relaxed text-zinc-800 mb-6">
                        {currentClue.description}
                    </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-300 flex items-start gap-3">
                    <div className="bg-zinc-800 text-white p-1.5 rounded-sm shadow-sm mt-0.5">
                        <Search className="w-4 h-4" />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Investigation Objective</span>
                        <span className="text-lg font-bold text-purple-700 leading-tight block">{currentClue.question}</span>
                    </div>
                </div>
            </div>
         </div>
      </div>

      <form onSubmit={handleSubmit} className="relative z-20 max-w-md mx-auto px-4 pb-12">
        <Input 
            label="DECRYPT CLUE" 
            placeholder="ENTER ANSWER..."
            value={answer}
            onChange={(e) => {
                setAnswer(e.target.value);
                if (error) setError('');
            }}
            error={error}
        />
        <Button type="submit" disabled={!answer || isSuccess} className="mt-2">
            {isSuccess ? 'PROCESSING...' : 'SUBMIT EVIDENCE'}
        </Button>
      </form>
    </div>
  );
};

export default Game;