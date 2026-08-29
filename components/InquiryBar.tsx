"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function InquiryBar() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-gradient-to-r from-[#0D1527] via-[#131E38] to-[#0D1527] border-y-2 border-[#D4AF37]/40 backdrop-blur-xl py-3 px-8 sm:px-16 relative z-30 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[#D4AF37]/5 pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Text / Hook */}
        <div className="text-center lg:text-right space-y-1">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-1">
            <Sparkles className="w-4 h-4 animate-spin" /> Priority Fast-Track Inquiry
          </div>
          <h4 className="text-white font-black text-lg sm:text-xl font-heading">
            Looking for custom tensile structures or expert consultation?
          </h4>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            Fill in your details and our senior engineering team will call you back within <span className="text-[#D4AF37] font-bold">2 hours</span>.
          </p>
        </div>

        {/* Inline Larger Form */}
        {submitted ? (
          <motion.div 
            initial={{ scale: 0.9 }} 
            animate={{ scale: 1 }}
            className="flex items-center gap-3 text-emerald-400 text-sm font-bold bg-emerald-500/15 px-6 py-3.5 rounded-2xl border border-emerald-500/30 shadow-lg"
          >
            <CheckCircle2 className="w-6 h-6" /> Request sent successfully! We will call you very soon.
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <input 
              required
              type="text"
              placeholder="Enter Your Full Name..."
              className="w-full sm:w-64 bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 focus:outline-none transition-all shadow-inner"
            />
            <input 
              required
              type="tel"
              placeholder="Phone Number (+971...)"
              className="w-full sm:w-64 bg-white/10 border border-white/20 rounded-2xl px-5 py-3.5 text-sm text-white placeholder-slate-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/30 focus:outline-none transition-all shadow-inner"
            />
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880] text-[#070B14] font-black uppercase tracking-wider text-xs hover:opacity-95 transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              Get a Callback <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>
        )}

      </div>
    </motion.div>
  );
}