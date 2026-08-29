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
      className="w-full bg-[#0D1527] border-b border-white/10 py-5.5 px-6 sm:px-12 relative z-30 shadow-xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-3 relative z-10">
        
        {/* Text / Hook */}
        <div className="text-center lg:text-right space-y-0.5">
          <div className="inline-flex items-center gap-1.5 text-[#D4AF37] text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3 h-3 text-[#D4AF37] animate-spin" /> Priority Inquiry
          </div>
          <h4 className="text-white font-bold text-xs sm:text-sm font-heading">
            Looking for custom tensile structures or expert consultation?
          </h4>
        </div>

        {/* Inline Compact Form */}
        {submitted ? (
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold bg-emerald-500/15 px-4 py-2 rounded-xl border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4" /> Request sent successfully!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
            <input 
              required
              type="text"
              placeholder="Your Name..."
              className="w-full sm:w-48 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:border-[#D4AF37] focus:outline-none transition-all"
            />
            <input 
              required
              type="tel"
              placeholder="Phone Number (+971...)"
              className="w-full sm:w-48 bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-400 focus:border-[#D4AF37] focus:outline-none transition-all"
            />

            {/* Heartbeat Pulsing Button */}
            <motion.button 
              animate={{ 
                scale: [1, 1.06, 1, 1.04, 1],
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                repeatDelay: 0.5,
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-auto px-5 py-2 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880] text-[#070B14] font-black uppercase tracking-wider text-[11px] shadow-lg flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              Get Callback <ArrowRight className="w-3 h-3" />
            </motion.button>
          </form>
        )}

      </div>
    </motion.div>
  );
}