import React, { useState, useEffect } from 'react';
import { TeamConfig, Clue } from '../types';
import Button from './Button';
import Input from './Input';
import { Lock, Unlock, MapPin, Search, FileText, CheckCircle2, Eye } from 'lucide-react';

interface GameProps {
  team: TeamConfig;
  initialClueIndex: number;
}

const Game: React.FC<GameProps> = ({ team, initialClueIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialClueIndex);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Persist progress
  useEffect(() => {
    localStorage.setItem(`crime_scene_${team.id}_progress`, currentIndex.toString());
  }, [currentIndex, team.id]);

  const currentClue: Clue | undefined = team.clueSequence[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentClue) return;

    const normalizedInput = answer.toLowerCase().trim();
    
    // Check if input matches any of the valid answers
    const isCorrect = currentClue.correctAnswer.some(
      validAns => validAns.toLowerCase() === normalizedInput
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
            // Victory State logic is handled by the render condition
            setCurrentIndex(prev => prev + 1); // Increment to trigger victory view
        }
      }, 2000);
    } else {
      setError('EVIDENCE MISMATCH. TRY AGAIN.');
    }
  };

  // --- VICTORY STATE ---
  if (!currentClue) {
    return (
        <div className="text-center animate-fade-in py-12">
            <div className="mb-6 relative inline-block">
                <CheckCircle2 className="w-24 h-24 text-green-500/80 mx-auto" strokeWidth={1} />
                <div className="absolute inset-0 bg-green-500 blur-2xl opacity-20"></div>
            </div>
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4 tracking-tighter">CASE SOLVED</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-zinc-400 font-serif text-xl mb-8">Excellent work, {team.name}. The truth has been revealed.</p>
            <div className="p-8 border border-green-900/50 bg-green-950/10 rounded-sm backdrop-blur-sm max-w-md mx-auto">
                <p className="font-typewriter text-lg text-green-400 leading-relaxed">
                    REPORT TO HQ IMMEDIATELY FOR DEBRIEFING AND FINAL EVALUATION.
                </p>
            </div>
        </div>
    );
  }

  // --- GAME PLAY STATE ---
  return (
    <div className="w-full animate-fade-in">
      {/* Header Info Bar */}
      <div className="flex justify-between items-center bg-zinc-900/80 border-t border-b border-zinc-800 py-3 px-4 mb-8 backdrop-blur-sm">
        <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-typewriter">Detective Unit</span>
            <span className="text-sm font-bold text-zinc-200">{team.name}</span>
        </div>
        <div className="h-8 w-px bg-zinc-800 mx-4"></div>
        <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-typewriter">Evidence Chain</span>
            <span className="text-sm font-bold text-blood-500 font-typewriter">
                SEQ: {String(currentIndex + 1).padStart(2, '0')} / {String(team.clueSequence.length).padStart(2, '0')}
            </span>
        </div>
      </div>

      {/* THE CLUE CARD - Styled like a physical evidence file */}
      <div className="relative group perspective-1000 mb-8">
         {/* Paper Effect Container */}
         <div className="bg-paper text-ink p-1 shadow-2xl transform rotate-1 transition-transform duration-500 group-hover:rotate-0 relative z-10">
            {/* Inner Border */}
            <div className="border-2 border-dashed border-zinc-400/50 p-6 md:p-10 min-h-[300px] flex flex-col relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
                
                {/* Watermark/Stamp */}
                <div className="absolute top-4 right-6 transform rotate-12 border-4 border-red-700/20 text-red-700/20 px-4 py-1 font-black text-4xl uppercase tracking-tighter pointer-events-none font-typewriter select-none">
                    Confidential
                </div>

                {/* Success Overlay */}
                {isSuccess && (
                    <div className="absolute inset-0 bg-zinc-900/90 z-50 flex flex-col items-center justify-center animate-fade-in backdrop-blur-sm">
                        <Unlock className="w-16 h-16 text-green-500 mb-6 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                        <h3 className="text-3xl font-bold text-white uppercase tracking-widest mb-2">Unlocked</h3>
                        <p className="text-green-400/80 font-typewriter tracking-widest text-sm animate-pulse">ACQUIRING NEXT TARGET...</p>
                    </div>
                )}

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 border-b-2 border-zinc-800/10 pb-4">
                    <MapPin className="w-6 h-6 text-blood-700" />
                    <h3 className="text-2xl font-bold uppercase tracking-tight font-serif text-zinc-800">{currentClue.title}</h3>
                </div>

                {/* Body Text */}
                <div className="flex-grow">
                    <p className="text-xl font-serif leading-relaxed text-zinc-800 mb-6">
                        {currentClue.description}
                    </p>

                    {currentClue.content && (
                        <div className="bg-zinc-100 p-4 border-l-4 border-zinc-400 italic text-zinc-600 mb-6 font-typewriter text-sm relative">
                            <span className="absolute -left-2 -top-2 text-4xl text-zinc-300">"</span>
                            {currentClue.content}
                        </div>
                    )}
                </div>

                {/* Footer/Objective */}
                <div className="mt-6 pt-4 border-t border-zinc-300 flex items-start gap-3">
                    <div className="bg-zinc-800 text-white p-1.5 rounded-sm shadow-sm mt-0.5">
                        <Search className="w-4 h-4" />
                    </div>
                    <div>
                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-1">Investigation Objective</span>
                        <span className="text-lg font-bold text-blood-700 leading-tight block">{currentClue.question}</span>
                    </div>
                </div>
            </div>
         </div>
         
         {/* Shadow element behind the card for depth */}
         <div className="absolute top-4 left-2 w-full h-full bg-black/50 blur-xl -z-10 transform rotate-1"></div>
      </div>

      {/* DEBUG HINT (For Demo Only) */}
      <div className="mb-6 flex justify-center">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full px-4 py-2 flex items-center gap-2">
            <Eye className="w-4 h-4 text-yellow-500" />
            <span className="text-xs font-mono text-yellow-600 uppercase">Demo Hint:</span>
            <span className="text-sm font-bold text-yellow-500 font-typewriter tracking-wider">{currentClue.correctAnswer[0]}</span>
        </div>
      </div>

      {/* Answer Input Area */}
      <form onSubmit={handleSubmit} className="relative z-20 max-w-md mx-auto">
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