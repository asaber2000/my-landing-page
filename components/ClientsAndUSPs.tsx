"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ClientItem {
  name: string;
  logo: string;
  filterType: "normal" | "invert";
  depth: number;
  pos: string;
  scale?: string;
}

// تم تقريب المواقع للداخل أكثر لربطها بالمركز ومنع تشتت الفراغ
const clients: ClientItem[] = [
  {
    name: "Netflix",
    logo: "/images/netflix.svg",
    filterType: "normal",
    depth: 14,
    pos: "top-8 left-16 xl:left-32",
    scale: "scale-[1.50]",
  },
  {
    name: "Yas Island",
    logo: "/images/yas-island-logo.avif",
    filterType: "normal",
    depth: -16,
    pos: "top-8 right-16 xl:right-32",
    scale: "scale-[1.38]",
  },
  {
    name: "ADNOC",
    logo: "/images/adnoc-logo-updated.svg",
    filterType: "normal",
    depth: 12,
    pos: "top-1/2 left-8 xl:left-20 -translate-y-1/2",
    scale: "scale-[1.25]",
  },
  {
    name: "Expo City Dubai",
    logo: "/images/expo.svg",
    filterType: "invert",
    depth: -14,
    pos: "top-1/2 right-8 xl:right-20 -translate-y-1/2",
    scale: "scale-[1.25]",
  },
  {
    name: "Global Village",
    logo: "/images/global-village-logoo.png",
    filterType: "invert",
    depth: -12,
    pos: "bottom-8 left-20 xl:left-36",
    scale: "scale-[1.38]",
  },
  {
    name: "Emaar",
    logo: "/images/emaar-logo-w.svg",
    filterType: "normal",
    depth: 15,
    pos: "bottom-8 right-20 xl:right-36",
  },
];

// كارت اللوجو بحجم مكبّر وفخم ومقروء
function FloatingDesktopLogo({
  client,
  mouseX,
  mouseY,
}: {
  client: ClientItem;
  mouseX: any;
  mouseY: any;
}) {
  const x = useTransform(mouseX, [-0.5, 0.5], [-client.depth, client.depth]);
  const y = useTransform(mouseY, [-0.5, 0.5], [-client.depth * 0.6, client.depth * 0.6]);

  return (
    <motion.div
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`absolute ${client.pos} z-20 pointer-events-auto`}
    >
      <div className="group relative flex flex-col items-center justify-center px-5 py-3.5 rounded-2xl bg-[#0c1222]/95 border border-white/10 hover:border-[#df9d17]/60 shadow-[0_12px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(223,157,23,0.3)] cursor-pointer">
        <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#df9d17]/40 to-transparent group-hover:via-[#df9d17]" />
        
        {/* تكبير مساحة العرض للوجو */}
        <div className="relative w-32 xl:w-36 h-10 xl:h-12 flex items-center justify-center">
          <Image
            src={client.logo}
            alt={client.name}
            fill
            sizes="160px"
            className={`object-contain transition-all duration-300 ${
              client.scale || "scale-100"
              } ${
              client.filterType === "invert"
                ? "invert brightness-200 opacity-90 group-hover:opacity-100"
                : "opacity-85 group-hover:opacity-100"
            }`}
          />
        </div>

      </div>
    </motion.div>
  );
}

export default function ClientsAndUSPs() {
  const containerRef = useRef<HTMLElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(rawX, springConfig);
  const smoothY = useSpring(rawY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-14 lg:py-24 bg-[#070B14] border-t border-b border-white/5 overflow-hidden select-none flex items-center justify-center"
    >
      {/* شبكة خلفية ونبض ذهبي محيطي بارز يرفع المحتوى للأمام */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#df9d17 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[750px] h-[350px] lg:h-[450px] bg-[#df9d17]/10 blur-[140px] rounded-full pointer-events-none" />

      {/* اللوجوهات العائمة (ديسك توب فقط) */}
      <div className="hidden lg:block absolute inset-0 max-w-7xl mx-auto pointer-events-none">
        {clients.map((client, idx) => (
          <FloatingDesktopLogo
            key={`desktop-${client.name}-${idx}`}
            client={client}
            mouseX={smoothX}
            mouseY={smoothY}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* المركز الثابت: أضفنا له حاوية ناعمة مضيئة لإلغاء الإحساس بالغرق */}
        <div className="max-w-2xl mx-auto text-center space-y-4 p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-sm pointer-events-auto">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#df9d17]/10 border border-[#df9d17]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#df9d17] animate-ping" />
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] font-extrabold text-[#e6b224]">
              TRUSTED BY
            </span>
          </div>

          <h2 className="text-[19px] sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug drop-shadow-md">
            Trusted by the Region’s Leading Brands & Sovereign Entities
          </h2>

          <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto">
            Trusted by government leaders, global brands, and top developers across the UAE, GCC, and worldwide.
          </p>

          {/* شريط الإحصائيات المدمج */}
          <div className="pt-4 flex items-center justify-center gap-6 sm:gap-8 border-t border-white/10 text-xs font-mono">
            <div>
              <span className="block text-lg sm:text-xl font-bold text-[#e6b224] font-sans">30+</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">YEARS OF EXCELLENCE</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div>
              <span className="block text-lg sm:text-xl font-bold text-white font-sans">100%</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">IN-HOUSE MANUFACTURING</span>
            </div>
            <div className="h-6 w-[1px] bg-white/10" />
            <div>
              <span className="block text-lg sm:text-xl font-bold text-[#e6b224] font-sans">5000+</span>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">PROJECTS BUILT</span>
            </div>
          </div>


        </div>

        <div className="lg:hidden mt-7 grid grid-cols-2 gap-3 max-w-sm mx-auto">
          {clients.map((client, idx) => (
            <div
              key={`mobile-${client.name}-${idx}`}
              className="relative flex flex-col items-center justify-center h-[76px] px-3 rounded-2xl bg-[#0c1222]/90 border border-white/10 shadow-[0_8px_25px_rgba(0,0,0,0.6)] overflow-hidden"
            >
              {/* شعاع مسح كريستالي متتابع يتحرك دورياً كل 4.5 ثوانٍ */}
              <div 
                className="absolute inset-y-0 w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -skew-x-12 pointer-events-none animate-mobile-shimmer"
                style={{ animationDelay: `${idx * 0.6}s` }}
              />

              {/* خط ذهبي علوي دقيق ينبض بنعومة بالغة */}
              <div className="absolute top-0 inset-x-4 h-[1px] bg-gradient-to-r from-transparent via-[#df9d17]/50 to-transparent" />

              <div className="relative w-28 h-9 flex items-center justify-center z-10">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="120px"
                  className={`object-contain transition-all duration-300 ${
                    client.scale || "scale-100"
                  } ${
                    client.filterType === "invert"
                      ? "invert brightness-200 opacity-90"
                      : "opacity-85"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}