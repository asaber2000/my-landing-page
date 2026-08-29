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
      className="w-full max-w-3xl mx-auto bg-black/30 backdrop-blur-xl border border-white/15 rounded-2xl py-2.5 px-4 sm:px-6 shadow-2xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Text / Hook */}
        <div className="text-center md:text-right space-y-0.5">
          <div className="inline-flex items-center gap-1 text-[#D4AF37] text-[9px] font-bold tracking-widest uppercase">
            <Sparkles className="w-2.5 h-2.5 text-[#D4AF37] animate-spin" /> Priority Inquiry
          </div>
          <h4 className="text-white font-bold text-xs font-heading">
            Looking for custom tensile structures?
          </h4>
        </div>

        {/* Inline Compact Form */}
        {submitted ? (
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-500/20 px-3 py-1.5 rounded-xl border border-emerald-500/40">
            <CheckCircle2 className="w-3.5 h-3.5" /> Sent!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full md:w-auto">
            <input 
              required
              type="text"
              placeholder="Name..."
              className="w-full sm:w-36 bg-white/5 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:border-[#D4AF37] focus:outline-none transition-all backdrop-blur-md"
            />
            <input 
              required
              type="tel"
              placeholder="+971..."
              className="w-full sm:w-36 bg-white/5 border border-white/20 rounded-xl px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:border-[#D4AF37] focus:outline-none transition-all backdrop-blur-md"
            />

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-4 py-1.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880] text-[#070B14] font-black uppercase tracking-wider text-[10px] shadow-lg flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
            >
              Callback <ArrowRight className="w-3 h-3" />
            </motion.button>
          </form>
        )}

      </div>
    </motion.div>
  );
}