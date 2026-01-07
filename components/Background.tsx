import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden font-serif text-zinc-300 selection:bg-purple-900 selection:text-white">
      {/* Static Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Base Gradient: Dark Purple from center fading to black at edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2e1065_0%,_#000000_100%)] opacity-90"></div>
        
        {/* Top Light Source (Intense Purple) */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-purple-900/60 to-transparent mix-blend-overlay"></div>

        {/* Ambient purple blobs for texture */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-800/20 blur-[100px] rounded-full mix-blend-screen"></div>
        
        {/* Vignette to keep edges dark */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_black_100%)] opacity-80"></div>

        {/* Horizontal Purple Line Accent */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-600/50 to-transparent"></div>
      </div>

      {/* FX Layers */}
      <div className="bg-noise mix-blend-overlay opacity-10"></div>
      <div className="scanlines opacity-40"></div>
      <div className="vignette"></div>

      {/* Main Content Wrapper */}
      <div className="relative z-50 w-full min-h-screen flex flex-col items-center justify-center p-4 md:p-6">
        <div className="w-full max-w-lg relative">
            {/* Top Border Accent */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-purple-600 to-transparent opacity-50"></div>
            
            {children}
        </div>
        
        {/* Footer */}
        <footer className="mt-16 text-center opacity-40 hover:opacity-80 transition-opacity text-[10px] uppercase tracking-[0.3em] font-typewriter text-zinc-500 mix-blend-plus-lighter">
            <p className="mb-2">Confidential Investigation • Do Not Distribute</p>
            <p>Cultural Committee | NUVYUVA 5.0</p>
        </footer>
      </div>
    </div>
  );
};

export default Background;