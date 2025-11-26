import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 font-extrabold text-xl text-blue-700 mb-4">
            <Zap size={24} />
            <span>RebateFlow</span>
          </div>
          <p className="text-slate-500 max-w-xs">
            The #1 rebate automation platform for high-growth HVAC contractors.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4 text-slate-900">Company</h4>
          <ul className="space-y-2 text-slate-500 text-sm">
            <li><a href="#" className="hover:text-blue-600">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
        &copy; 2025 RebateFlow Inc. All rights reserved.
      </div>
    </footer>
  );
}