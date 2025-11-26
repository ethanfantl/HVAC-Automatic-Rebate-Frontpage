"use client"; // Required for interactions (clicking the menu)

import React, { useState } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 font-extrabold text-2xl text-blue-700 tracking-tight">
          <Zap className="text-blue-600 fill-blue-600" />
          <span>Rebate<span className="text-slate-900">Flow</span></span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>
          <a href="#roi" className="hover:text-blue-600 transition-colors">ROI</a>
          <Button variant="primary">Book a Demo</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-4 space-y-4">
          <a href="#features" className="block text-slate-600 font-medium">Features</a>
          <a href="#how-it-works" className="block text-slate-600 font-medium">How it Works</a>
          <Button variant="primary" className="w-full">Book a Demo</Button>
        </div>
      )}
    </nav>
  );
}