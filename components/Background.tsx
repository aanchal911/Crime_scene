import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-serif text-zinc-300 selection:bg-blood-900 selection:text-white">
      {/* Static Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Main intense red gradient from top */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,_#4a0000_0%,_#000000_85%)] opacity-80"></div>
        
        {/* Ambient blood red flows in corners to prevent pure black feel */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blood-900/30 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blood-900/20 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        {/* Texture overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60"></div>

        {/* Horizontal Red Line Accent */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blood-600/40 to-transparent"></div>
      </div>

      {/* FX Layers */}
      <div className="bg-noise"></div>
      <div className="scanlines"></div>
      <div className="vignette"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-50 w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-lg relative">
            {/* Top Border Accent */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-blood-600 to-transparent opacity-50"></div>
            
            {children}
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center opacity-30 hover:opacity-60 transition-opacity text-[10px] uppercase tracking-[0.3em] font-typewriter text-zinc-500">
            <p className="mb-2">Confidential Investigation • Do Not Distribute</p>
            <p>Cultural Committee | NUVYUVA 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default Background;