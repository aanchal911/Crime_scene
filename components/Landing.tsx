import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Fingerprint, Siren } from 'lucide-react';

interface LandingProps {
  onStart: () => void;
}

const Landing: React.FC<LandingProps> = ({ onStart }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleStartWithFullscreen = () => {
    // Attempt to go fullscreen for maximum immersion
    try {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else if ((document.documentElement as any).webkitRequestFullscreen) {
        (document.documentElement as any).webkitRequestFullscreen();
      }
    } catch (e) {
      console.warn("Fullscreen request failed");
    }
    
    onStart();
  };

  return (
    <div className={`flex flex-col items-center text-center transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Icon Area */}
      <div className="mb-10 relative group cursor-default">
        <div className="absolute inset-0 bg-purple-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse-slow"></div>
        <div className="relative z-10 border border-purple-900/50 p-6 rounded-full bg-black/40 backdrop-blur-sm shadow-[0_0_30px_rgba(147,51,234,0.2)]">
            <Fingerprint className="w-16 h-16 text-purple-600" strokeWidth={1} />
        </div>
      </div>
      
      {/* Main Title with Glitch Effect */}
      <div className="relative mb-6">
        <h1 
          className="text-6xl md:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl text-glitch uppercase" 
          data-text="NUV YUVA 5.0"
        >
          NUV YUVA 5.0
        </h1>
        <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent opacity-80 blur-[1px]"></div>
      </div>
      
      <p className="text-xl md:text-2xl text-purple-500 font-serif italic mb-6 tracking-wide text-shadow-sm">
        "The Night No One Was Supposed to Reach."
      </p>

      {/* Static Subtitle without gooey animation */}
      <h2 className="nuv-yuva-static-title">
        TREASURE HUNT X MURDER MYSTERY
      </h2>

      {/* Card Container */}
      <div className="bg-zinc-950/40 border border-zinc-800 p-8 rounded-sm backdrop-blur-md mb-12 max-w-lg shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900"></div>
        
        <div className="text-zinc-400 font-typewriter text-[11px] leading-relaxed mb-6 text-left space-y-3">
          <div>
            <strong className="text-zinc-200">THE INCIDENT:</strong> Late in the evening, long after most students had left, a final-year student was found dead on campus. No signs of struggle. No witnesses willing to speak. No clear footage of the final moments.
          </div>
          <div>
            The victim did not stay at ground level. They moved upward, step by step, following a trail that led far beyond ordinary spaces.
          </div>
          <div>
            <strong className="text-zinc-200">THE SILENCE:</strong> Seven people crossed paths with the victim that night. Each one noticed something. Each one chose not to ask questions. Because some places feel untouchable.
          </div>
          <div className="italic text-purple-500">
            The truth was not buried. It was placed carefully, somewhere people stop counting after six.
          </div>
        </div>
        
        <div className="flex items-center gap-2 justify-center text-[10px] text-purple-500/80 font-bold uppercase tracking-widest border border-purple-900/30 py-2 bg-purple-950/10">
            <Siren className="w-3 h-3 animate-pulse" />
            <span>Authorized Detectives Only</span>
            <Siren className="w-3 h-3 animate-pulse" />
        </div>
      </div>

      <Button onClick={handleStartWithFullscreen} className="w-full md:w-auto min-w-[200px] text-lg">
        BEGIN INVESTIGATION
      </Button>
    </div>
  );
};

export default Landing;