import React from 'react';

export default function Button({ children, variant = "primary", className = "", onClick }) {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-200 flex items-center justify-center gap-2 transform active:scale-95";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/30",
    secondary: "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}