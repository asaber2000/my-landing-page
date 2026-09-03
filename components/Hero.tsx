"use client";

import SolutionsTicker from "@/components/SolutionsTicker";
import { MessageCircle, PhoneCall, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-screen lg:min-h-[700px] flex flex-col justify-between px-4 sm:px-12 lg:px-20 py-3 sm:py-4 overflow-hidden bg-[#070B14]">
      
      {/* ستارة البداية السينمائية */}
      {isLoading && (
        <motion.div 
          initial={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          animate={{ y: isLoading ? 0 : "-100%" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-50 bg-[#070B14] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="text-[#D4AF37] font-heading font-black tracking-widest text-base sm:text-lg animate-pulse mb-2">
            BAIT AL NOKHADA
          </div>
          <div className="w-12 h-0.5 bg-[#D4AF37]/50 rounded-full animate-ping" />
        </motion.div>
      )}

      {/* Background Video Container */}
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  {/* طبقة التعتيم لضمان وضوح النص */}
  <div className="absolute inset-0 bg-[#070B14]/65 z-10" />
  
  <video 
    autoPlay 
    muted 
    loop 
    playsInline
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-full max-w-none object-cover"
    style={{ 
      filter: "brightness(0.85)"
    }}
  >
    <source src="Test.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

      {/* الهيدر العلوي */}
      <header className="relative z-20 w-full flex items-center justify-center pt-1 sm:pt-2">
        <div className="relative w-36 sm:w-48 lg:w-[420px] h-8 sm:h-10 lg:h-12">
          <Image
            src="/logo w.png"
            alt="Bait Al Nokhada Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* محتوى الهيرو المركزي */}
      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 my-auto py-2">
      
        
        {/* العنوان الرئيسي: يبدأ من text-2xl (24px) للموبايل ويصل لـ 5xl للديسكتوب */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
          Your Premier Tent Supplier <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
            in UAE &amp; KSA.
          </span>
        </h1>
        
        {/* الوصف: text-xs على الموبايل لتوفير المساحة */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
          Specialized in tent manufacturing and rental across UAE & KSA. Delivering certified event tents, luxury wedding tents, and industrial labor tents built for the Gulf climate.
        </p>
        
        {/* نقاط الثقة: مصفوفة بسلاسة وبخط 11px للموبايل */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-sm text-zinc-300 font-medium pt-1">
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> 30+ Years Experience
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> Certified German PVC
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> In-House Manufacturing
          </span>
        </div>

        {/* الأزرار: شبكة سطرين منظمة على الموبايل وصف كامل على الشاشات الأكبر */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <a
              href="https://wa.me/971543474869"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/15 hover:border-emerald-500/50 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-1.5 shadow-xl"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" /> GET A QUOTE ON WhatsApp
            </a>

            <a
              href="tel:+971543474869"
              className="px-3 py-2 rounded-xl bg-black/40 hover:bg-amber-950/40 border border-white/15 hover:border-[#D4AF37]/50 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-1.5 shadow-xl"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D4AF37]" /> Call Now
            </a>
          </div>

          <a
            href="mailto:marketing01@baitalnokhada.com?subject=Inquiry%20from%20Landing%20Page"
            className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-black/40 hover:bg-sky-950/40 border border-white/15 hover:border-sky-400/50 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider backdrop-blur-md transition-all flex items-center justify-center gap-1.5 shadow-xl"
          >
            <Mail className="w-3.5 h-3.5 text-sky-400" /> Email Us
          </a>
        </div>
      </div>

      {/* الشريط المتحرك للحلول */}
      <div className="relative z-20 w-full -mx-4 sm:-mx-12 lg:-mx-20 px-4 sm:px-12 lg:px-20 pb-2">
        <SolutionsTicker />
      </div>

    </section>
  );
}