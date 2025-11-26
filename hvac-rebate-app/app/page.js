"use client";

import React from 'react';
import { Wrench, CheckSquare, ChevronRight, ClipboardCheck, HardHat } from 'lucide-react';

// Neobrutalism Button Component
const HeavyButton = ({ children, primary }) => (
  <button className={`
    px-6 py-3 font-black uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all
    ${primary ? 'bg-orange-500 text-white' : 'bg-white text-black'}
  `}>
    {children}
  </button>
);

export default function PageIndustrial() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 font-sans">
      
      {/* HEADER */}
      <header className="bg-white border-b-4 border-black py-5">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="bg-black text-white p-2"><Wrench size={24} /></div>
             <span className="text-2xl font-black uppercase italic">Rebate<span className="text-orange-600">Pro</span></span>
          </div>
          <div className="hidden md:flex gap-6 font-bold text-sm uppercase tracking-wider">
            <a href="#" className="hover:underline">Pricing</a>
            <a href="#" className="hover:underline">Contractors</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
          <HeavyButton primary>Member Login</HeavyButton>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-black text-white font-bold px-4 py-2 mb-6 uppercase text-sm tracking-widest">
              Built for HVAC Trades
            </div>
            <h1 className="text-6xl font-black uppercase leading-none mb-6 text-stone-900">
              Get Paid <br/>
              <span className="text-white bg-orange-600 px-2">Faster.</span>
            </h1>
            <p className="text-xl font-medium text-stone-600 mb-8 border-l-4 border-stone-300 pl-6">
              The only tool that guarantees your state rebates are submitted correctly the first time. Stop losing money to paperwork.
            </p>
            <div className="flex gap-4">
              <HeavyButton primary>Start Free Trial</HeavyButton>
              <HeavyButton>See How It Works</HeavyButton>
            </div>
          </div>
          
          {/* Graphic */}
          <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-4 mb-8 border-b-2 border-stone-200 pb-4">
               <div className="bg-green-100 text-green-800 p-3 rounded font-bold border-2 border-green-800 flex items-center gap-2">
                  <CheckSquare /> APPROVED
               </div>
               <span className="font-bold text-xl">$1,450.00</span>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between">
                <span className="text-stone-500">Customer:</span>
                <span className="font-bold">John Doe</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Equipment:</span>
                <span className="font-bold">Trane XR14</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">AHRI Ref:</span>
                <span className="font-bold">#20394820</span>
              </div>
              <div className="bg-stone-100 p-4 border-2 border-stone-300 text-center font-bold mt-4">
                 FUNDS SENT TO BANK ACCOUNT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="bg-black text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black uppercase mb-16 text-center">Why Contractors Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: ClipboardCheck, title: "No More PDF Forms", desc: "We map your invoice data directly to the state forms." },
              { icon: HardHat, title: "AHRI Match Guarantee", desc: "If the equipment doesn't match, we warn you before you install." },
              { icon: CheckSquare, title: "Instant Audit Trail", desc: "Keep a paper trail of every submission for your records." }
            ].map((item, i) => (
              <div key={i} className="bg-stone-900 p-8 border-l-8 border-orange-500">
                <item.icon className="mb-4 text-orange-500" size={40} />
                <h3 className="text-2xl font-bold uppercase mb-2">{item.title}</h3>
                <p className="text-stone-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-orange-500 text-center">
         <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-8">Stop Wasting Time in the Office</h2>
         <button className="bg-white text-black text-xl font-black px-10 py-5 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all">
            Create Contractor Account
         </button>
      </section>
    </div>
  );
}