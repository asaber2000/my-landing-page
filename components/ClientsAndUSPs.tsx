"use client";

import React from "react";
import Image from "next/image";

// اللوجوهات المعتمدة بمصادرها الحقيقية والأصلية
const clients = [
  { name: "Netflix", logo: "/images/netflix.svg", filterType: "normal" },
  { name: "Yas Island", logo: "/images/yas-island-logo.avif", filterType: "normal" },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated.svg", filterType: "normal" },
  { name: "Global Village", logo: "/images/gv_uae_logo_new.svg", filterType: "normal" },
  { name: "Emaar", logo: "/images/emaar-logo.svg", filterType: "normal" },
  { name: "Expo City Dubai", logo: "/images/expo.svg", filterType: "invert" },
];

// المزايا التنافسية (USPs) بصيغة Bento Pillars
const usps = [
  {
    num: "01",
    title: "In-House Manufacturing",
    desc: "Precision Engineering & Certified Quality Control",
    icon: (
      <svg className="w-5 h-5 text-[#df9d17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "End-to-End Execution",
    desc: "Fast Delivery, Rigging & Climate-Control Setup",
    icon: (
      <svg className="w-5 h-5 text-[#df9d17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Proven Reliability",
    desc: "30+ Years Track Record Across UAE & GCC",
    icon: (
      <svg className="w-5 h-5 text-[#df9d17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ClientsAndUSPs() {
  return (
    <section className="relative py-10 sm:py-16 bg-[#070B14] border-t border-b border-white/5 overflow-hidden">
      
      {/* توهج خلفي محيطي خافت وفخم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[900px] h-[250px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* اللوحة الزجاجية الموحدة (The Glass Bento Box) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* خط لمعان علوي دقيق جداً */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-20 h-[1px] bg-gradient-to-r from-transparent via-[#df9d17]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* الجانب الأيسر: ركائز التميز (USPs Pillar) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-[#e6b224] bg-[#df9d17]/10 border border-[#df9d17]/25 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df9d17] animate-pulse" />
                  Engineering Standard
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Engineered for Grand Scales & High-Impact Events
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  Trusted by federal authorities, master developers, and international production teams.
                </p>
              </div>

              {/* قائمة الـ USPs بدون كروت سميكة - تصميم مسطح فاخر */}
              <div className="space-y-4 pt-2">
                {usps.map((usp, idx) => (
                  <div
                    key={idx}
                    className="group flex items-start gap-4 p-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-[#df9d17]/10 border border-[#df9d17]/20 text-[#df9d17] group-hover:border-[#df9d17]/50 group-hover:scale-105 transition-all shrink-0">
                      {usp.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-[#df9d17]/80 font-bold">{usp.num}</span>
                        <h4 className="text-white text-xs sm:text-sm font-semibold tracking-wide group-hover:text-[#e6b224] transition-colors">
                          {usp.title}
                        </h4>
                      </div>
                      <p className="text-zinc-400 text-[11px] sm:text-xs mt-0.5 leading-relaxed">
                        {usp.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* الجانب الأيمن: شبكة اللوجوهات الطافية المدمجة (Floating Logos Grid) */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400">
                  Select Enterprise Clients
                </span>
                <div className="h-[1px] flex-1 max-w-[120px] bg-gradient-to-r from-white/10 to-transparent ml-4" />
              </div>

              {/* شبكة اللوجوهات: 3 أعمدة في الموبايل والديسك توب لتوزيع متوازن ومريح */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                {clients.map((client, idx) => (
                  <div
                    key={`${client.name}-${idx}`}
                    className="relative flex items-center justify-center h-[78px] sm:h-[95px] p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#df9d17]/40 hover:bg-white/[0.05] transition-all duration-300 group shadow-sm"
                  >
                    <div className="relative w-full h-[45px] sm:h-[55px] flex items-center justify-center">
                      <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 640px) 110px, 160px"
                        className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                          client.filterType === "invert"
                            ? "invert brightness-200 opacity-90 group-hover:opacity-100"
                            : "opacity-90 group-hover:opacity-100"
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}