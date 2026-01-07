import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className="flex flex-col gap-2 mb-4 w-full">
      <label className="text-zinc-500 text-xs uppercase tracking-widest font-typewriter">
        {label}
      </label>
      <input
        className={`bg-zinc-900/50 border ${error ? 'border-red-500' : 'border-zinc-800'} text-zinc-100 p-3 outline-none focus:border-purple-600 focus:ring-1 focus:ring-purple-900 transition-all placeholder:text-zinc-700 font-serif text-lg`}
        autoComplete="off"
        {...props}
      />
      {error && <span className="text-red-500 text-xs font-typewriter">{error}</span>}
    </div>
  );
};

export default Input;