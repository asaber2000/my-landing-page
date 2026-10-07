"use client";

import React from "react";
import Image from "next/image";

const clients = [
  { name: "Netflix", logo: "/images/netflix.svg", filterType: "normal" },
  { name: "Yas Island", logo: "/images/yas-island-logo.avif", filterType: "normal" },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated.svg", filterType: "normal" },
  { name: "Global Village", logo: "/images/gv_uae_logo_new.svg", filterType: "normal" },
  { name: "Emaar", logo: "/images/emaar-logo.svg", filterType: "normal" },
  { name: "Expo City Dubai", logo: "/images/expo.svg", filterType: "invert" },
];

const usps = [
  {
    title: "In-House Manufacturing",
    desc: "Precision Engineering & Certified Quality Control",
    icon: (
      <svg className="w-5 h-5 text-[#df9d17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "End-to-End Execution",
    desc: "Fast Delivery, Rigging & Climate Setup",
    icon: (
      <svg className="w-5 h-5 text-[#df9d17]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
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
  // تكرار المصفوفة مرتين لضمان اتصال شريط الحركة بلا نهاية
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="relative py-12 sm:py-16 bg-[#070B14] border-t border-b border-white/5 overflow-hidden select-none">
      
      {/* توهج ذهبي خافت جداً ومركزي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[900px] h-[200px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 relative z-10">
        
        {/* شارة العنوان العلوية المعتمدة */}
        <div className="text-center">
          <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] font-semibold text-[#e6b224] bg-[#df9d17]/10 border border-[#df9d17]/25 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow-sm">
            Trusted by Global Enterprises & Government Entities
          </span>
        </div>

        {/* الشريط السينمائي اللانهائي (Infinite Floating Marquee) */}
        {/* التلاشي على الأطراف يمين ويسار معمول بـ Mask Gradient ناعم جداً */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max items-center gap-12 sm:gap-20 animate-marquee hover:[animation-play-state:paused] py-2">
            {marqueeClients.map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="group relative flex items-center justify-center shrink-0 w-[140px] sm:w-[180px] h-[60px] sm:h-[75px] transition-transform duration-300 hover:scale-110"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="180px"
                    className={`object-contain transition-all duration-300 opacity-75 group-hover:opacity-100 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                      client.filterType === "invert"
                        ? "invert brightness-200"
                        : ""
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* شريط الـ USPs التنفيذي الأنيق أسفله */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-white/[0.08]">
          {usps.map((usp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#df9d17]/30 transition-all duration-300"
            >
              <div className="p-2.5 rounded-lg bg-[#df9d17]/10 text-[#df9d17] border border-[#df9d17]/20 shrink-0">
                {usp.icon}
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-semibold tracking-tight">
                  {usp.title}
                </h4>
                <p className="text-zinc-400 text-[11px] sm:text-xs mt-0.5 leading-normal">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* كلاس الحركة الانسيابية اللانهائية بالـ CSS */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}