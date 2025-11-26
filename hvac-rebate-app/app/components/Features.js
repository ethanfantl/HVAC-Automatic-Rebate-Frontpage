import React from 'react';
import { FileCheck, ShieldCheck, Zap, Clock, TrendingUp, CheckCircle } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </div>
);

export default function Features() {
  const features = [
    { icon: FileCheck, title: "Smart OCR Ingest", desc: "Upload your final invoice. Our AI extracts model numbers and data." },
    { icon: ShieldCheck, title: "AHRI Validation", desc: "Auto-cross-reference equipment against the AHRI directory." },
    { icon: Zap, title: "One-Click Submit", desc: "We generate the specific PDF required by the local utility." },
    { icon: Clock, title: "Real-time Status", desc: "Track every rebate from 'Draft' to 'Paid' instantly." },
    { icon: TrendingUp, title: "Revenue Dashboard", desc: "See exactly how much rebate money you've secured." },
    { icon: CheckCircle, title: "Error Prevention", desc: "Our rules engine catches missing signatures before the state does." },
  ];

  return (
    <section id="features" className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale rebates</h2>
          <p className="text-lg text-slate-600">We handle the messy middle so you don't have to.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => <FeatureCard key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}