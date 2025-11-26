import React from 'react';
import { CheckCircle, FileCheck, Zap } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The old way is costing you money.</h2>
          <div className="space-y-6 mb-10">
            {["Manual data entry", "Looking up AHRI numbers", "Rejections due to typos"].map((item, i) => (
              <div key={i} className="flex gap-4 opacity-50">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">✕</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="pt-10 border-t border-white/10">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">The RebateFlow Way</h3>
            <div className="flex gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold"><CheckCircle size={18} /></div>
              <p className="font-medium">Upload Invoice - Done.</p>
            </div>
          </div>
        </div>
        
        {/* Right Steps */}
        <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl">
          <div className="space-y-6">
            <Step icon={FileCheck} title="1. Upload" desc="Drag and drop the final job invoice." />
            <Step icon={Zap} title="2. Automate" desc="We parse data, match AHRI, and fill forms." isActive={true} />
            <Step icon={CheckCircle} title="3. Paid" desc="Submitted to utility automatically." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ icon: Icon, title, desc, isActive }) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-16 h-16 rounded-lg flex items-center justify-center border ${isActive ? 'bg-blue-900/30 border-blue-500/50 text-blue-400' : 'bg-slate-700 border-slate-600 text-slate-400'}`}>
        <Icon />
      </div>
      <div>
        <h4 className={`font-bold text-lg ${isActive ? 'text-blue-400' : 'text-white'}`}>{title}</h4>
        <p className="text-sm text-slate-400">{desc}</p>
      </div>
    </div>
  );
}