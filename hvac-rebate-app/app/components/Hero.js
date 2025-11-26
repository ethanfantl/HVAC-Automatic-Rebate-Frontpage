"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, CheckCircle } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Now supporting 2025 State Rebate Guidelines
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
            Automate your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">HVAC Rebates</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Stop wrestling with state portals. Our software automatically verifies AHRI matchups, fills out the forms, and submits them for you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Start Free Trial <ArrowRight size={18} /></Button>
            <Button variant="secondary"><PlayCircle size={18} /> Watch Demo</Button>
          </div>
        </motion.div>

        {/* Right Graphic (Mock Dashboard) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
          <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative z-10">
            {/* Mock Header */}
            <div className="bg-slate-50 border-b border-slate-100 p-4 flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            {/* Mock Body */}
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <div className="h-8 w-32 bg-slate-900 rounded"></div>
                <div className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-bold text-sm flex items-center gap-2">
                  <CheckCircle size={16} /> Ready to Submit
                </div>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                <div className="text-sm font-medium text-slate-700">Utility_Rebate_Form_2025.pdf</div>
                <span className="text-xs text-green-600 font-bold">Auto-Filled</span>
              </div>
              <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold text-sm">Submit to Utility Provider</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}