import React from 'react';

export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-7xl mx-auto bg-blue-600 rounded-3xl p-12 md:p-20 text-white shadow-2xl shadow-blue-600/30 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to automate your back office?</h2>
          <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
            Join the HVAC contractors who are saving 10+ hours a week on paperwork.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
              Schedule a Demo
            </button>
            <button className="px-8 py-4 bg-blue-700 text-white border border-blue-500 rounded-xl font-bold text-lg hover:bg-blue-800 transition-colors">
              View Pricing
            </button>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full bg-white blur-3xl opacity-10 pointer-events-none"></div>
      </div>
    </section>
  );
}