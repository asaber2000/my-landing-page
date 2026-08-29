"use client";

import InquiryBar from "@/components/InquiryBar";
import { MessageCircle, PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex flex-col justify-between px-6 sm:px-12 lg:px-20 py-4 overflow-hidden">
      
      {/* Background Video (يملأ الشاشة بالكامل) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#070B14]/60 z-10" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="Test.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* الهيدر العلوي */}
      <header className="relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-4 pt-1">
        <div className="text-xl sm:text-2xl font-black tracking-wider text-white font-heading">
          BAIT AL NOKHADA <span className="text-[#D4AF37] text-xs block tracking-[0.3em]">TENTS & FABRIC STRUCTURES</span>
        </div>
        
        <div className="w-full lg:w-auto">
          <InquiryBar />
        </div>
      </header>

      {/* محتوى الهيرو المركزي والزرارين الشفافين */}
      <div className="relative z-20 max-w-4xl mx-auto text-center space-y-4 my-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md shadow-inner">
          Enterprise Turnkey Solutions
        </span>
        
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-white font-heading drop-shadow-lg">
          So You Wanna Build? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
            Start Here.
          </span>
        </h1>
        
        <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md">
          Engineered to withstand extreme UAE weather conditions. Delivering certified high-span pavilions and royal hospitality marquees.
        </p>

        {/* الزرارين الشفافين تحت الكلام */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="https://wa.me/971500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/15 hover:border-emerald-500/50 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 shadow-xl"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp Us
          </a>

          <a
            href="tel:+971500000000"
            className="px-5 py-2.5 rounded-xl bg-black/40 hover:bg-amber-950/40 border border-white/15 hover:border-[#D4AF37]/50 text-white font-bold text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center gap-2 shadow-xl"
          >
            <PhoneCall className="w-4 h-4 text-[#D4AF37]" /> Call Now
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-20 w-full flex justify-center pb-1">
        <div className="w-5 h-8 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}