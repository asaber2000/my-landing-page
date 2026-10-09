"use client";

import React from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m } from "framer-motion";


// اللوجوهات المعتمدة
const clients = [
  { name: "Netflix", logo: "/images/netflix.svg", filterType: "normal", scale: 2 },
  { name: "Yas Island", logo: "/images/yas-island-logo.avif", filterType: "normal", scale: 1.40 },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated.svg", filterType: "normal", scale: 1.50 },
  { name: "Global Village", logo: "/images/global-village-logoo.png", filterType: "invert", scale: 1.65 },
  { name: "Emaar", logo: "/images/emaar-logoooo.svg", filterType: "normal", scale: 0.9 },
  { name: "Expo City Dubai", logo: "/images/expo.svg", filterType: "invert", scale: 1.65 },
  { name: "Expo City Dubai", logo: "/images/dwtclogo.svg", filterType: "invert", scale: 1.65 },
  { name: "Expo City Dubai", logo: "/images/DP-WORLD-loogo.svg", filterType: "normal", scale: 2.20 },
  { name: "Expo City Dubai", logo: "/images/dubai-police-logo.svg", filterType: "normal", scale: 1.20 },

];

export default function ClientsAndUSPs() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="relative pt-6 pb-2 sm:pt-8 sm:pb-3 bg-[#070B14] border-t border-b border-white/5 overflow-hidden w-full max-w-full">
        {/* توهج خلفي خافت محصور */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[650px] h-[200px] bg-[#df9d17]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* اللوحة الموحدة مع حركة ظهور متكررة بالسكرول */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-5 sm:p-7 lg:p-8 shadow-2xl backdrop-blur-xl overflow-hidden"
          >
            {/* التقسيم: 6 أعمدة للنص و 6 أعمدة للوجوهات */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

              {/* الجانب الأيسر: النص */}
              <m.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-6 space-y-4 text-center lg:text-left"
              >
                <div>
                  <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-extrabold text-[#e6b224] bg-[#df9d17]/10 border border-[#df9d17]/25 px-3 py-1 rounded-full mb-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#df9d17] animate-ping" />
                    TRUSTED BY
                  </span>

                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Trusted by the Region&apos;s Leading Brands &amp;{" "}
                    <span className="bg-gradient-to-r from-[#f3be21] via-[#e6b224] to-[#c3922e] bg-clip-text text-transparent">
                      Sovereign Entities
                    </span>
                  </h3>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                  Trusted by government leaders, global brands, and top developers across the UAE, GCC, and worldwide.
                </p>

                <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 sm:gap-6 border-t border-white/10 text-xs font-mono">
                  <div>
                    <span className="block text-base sm:text-lg font-bold text-[#e6b224] font-sans">30+</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400">Years of Excellence</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <span className="block text-base sm:text-lg font-bold text-white font-sans">100%</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400">In-House Manufacturing</span>
                  </div>
                  <div className="h-6 w-[1px] bg-white/10" />
                  <div>
                    <span className="block text-base sm:text-lg font-bold text-[#e6b224] font-sans">5000+</span>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400">Projects Built</span>
                  </div>
                </div>
              </m.div>

              {/* الجانب الأيمن: شبكة اللوجوهات المدمجة */}
              <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-5 lg:pt-0 lg:pl-8 flex justify-center lg:justify-end">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-md lg:max-w-none">

                  {clients.map((client, idx) => (
                    <m.div
                      key={`${client.name}-${idx}`}
                      initial={{ opacity: 0, y: 25, scale: 0.92 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: false, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: idx * 0.05,
                        ease: [0.21, 0.47, 0.32, 0.98]
                      }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      style={{ willChange: "transform, opacity" }}
                      className="group relative flex items-center justify-center h-[68px] sm:h-[76px] p-2.5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-[#df9d17]/50 hover:bg-white/[0.05] transition-colors duration-300 overflow-hidden shadow-sm"
                    >
                      {/* إطار مضيء دوار */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute -inset-[100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#df9d17_360deg)] animate-[spin_4s_linear_infinite]" />
                      </div>
                      <div className="absolute inset-[1px] rounded-[11px] bg-[#0A0F1D]/90 z-0 pointer-events-none" />

                      {/* حاوية اللوجو مع تطبيق خاصية scale */}
                      <div
                        className="relative z-10 w-full h-[36px] sm:h-[42px] flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                        style={{ transform: `scale(${client.scale ?? 1})` }}
                      >
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          loading="lazy"
                          sizes="(max-width: 640px) 110px, 140px"
                          className={`object-contain transition-all duration-300 ${
                            client.filterType === "invert"
                              ? "invert brightness-200 opacity-80 group-hover:opacity-100"
                              : "opacity-80 group-hover:opacity-100"
                          }`}
                        />
                      </div>
                    </m.div>
                  ))}
                </div>

              </div>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}