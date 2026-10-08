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

export default function ClientsAndUSPs() {
  return (
    <section className="relative py-10 sm:py-16 bg-[#070B14] border-t border-b border-white/5 overflow-hidden">
      
      {/* توهج خلفي محيطي خافت وفخم */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[900px] h-[250px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* اللوحة الزجاجية الموحدة (The Glass Bento Box) */}
        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/10 p-6 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* خط لمعان علوي دقيق جداً */}
          <div className="absolute top-0 inset-x-8 sm:inset-x-20 h-[1px] bg-gradient-to-r from-transparent via-[#df9d17]/50 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* الجانب الأيسر: بيان الشراكة المؤسسية (Strategic Partnership Narrative) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.25em] font-extrabold text-[#e6b224] bg-[#df9d17]/10 border border-[#df9d17]/25 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#df9d17] animate-pulse" />
                  Strategic Partnerships
                </span>
                
                <h3 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Trusted by Global Leaders & Sovereign Entities
                </h3>
              </div>

              {/* المحتوى النصي الفخم والمقنع */}
              <div className="space-y-4 text-zinc-300 text-xs sm:text-sm leading-relaxed font-light">
                <p>
                  From world-class media productions and national landmarks to high-security energy infrastructures, leading enterprises rely on our end-to-end engineered spatial solutions.
                </p>
                <p className="text-zinc-400">
                  Whether deploying high-tension architectural canopies, climate-controlled temporary pavilions, or large-capacity event venues, we deliver uncompromised precision, rapid turnkey rigging, and complete structural reliability across the UAE and GCC.
                </p>
              </div>

              {/* مؤشرات ثقة مصغرة ونظيفة في خط واحد أسفل النص */}
              <div className="pt-2 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/10 text-zinc-400 text-xs font-mono">
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-[#e6b224] font-sans">30+</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Years Heritage</span>
                </div>
                <div className="h-7 w-[1px] bg-white/10" />
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-white font-sans">100%</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">In-House Fab</span>
                </div>
                <div className="h-7 w-[1px] bg-white/10" />
                <div>
                  <span className="block text-lg sm:text-xl font-bold text-[#e6b224] font-sans">Turnkey</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">Rigging & HVAC</span>
                </div>
              </div>

            </div>

            {/* الجانب الأيمن: شبكة اللوجوهات الطافية المدمجة (Floating Logos Grid) */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-10">
              
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400">
                  Trusted By
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