"use client";

import React from "react";
import Image from "next/image";

// نفس بيانات ومسارات الهوم بيدج التي تعمل عندك في الصورة بنجاح
const clients = [
  { name: "Netflix", logo: "/images/netflix.svg", filterType: "normal" },
  { name: "Dubai Media", logo: "/images/yas-island-logo.avif", filterType: "normal" },
  { name: "ADNOC", logo: "/images/adnoc-logo-updated.svg", filterType: "normal" },
  { name: "Emaar", logo: "/images/gv_uae_logo_new.svg", filterType: "normal" },
  { name: "Etihad Rail", logo: "/images/emaar-logo.svg", filterType: "normal" },
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
    desc: "Fast Delivery, Rigging & Climate-Control Setup",
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
  return (
    <section className="relative py-12 bg-[#070B14] border-t border-b border-white/5 overflow-hidden">
      
      {/* توهج ذهبي خافت جداً في الخلفية */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-[#df9d17]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* شارة العنوان العلوية المتناسقة مع هوية موقعك */}
        <div className="w-full text-center">
          <span className="text-xs uppercase tracking-[0.35em] font-bold text-[#e6b224] bg-[#df9d17]/10 border border-[#df9d17]/25 px-5 py-2 rounded-full shadow-sm">
            Trusted by Global Enterprises & Government Entities
          </span>
        </div>

        {/* شبكة الكروت الداكنة الموحدة طبق الأصل من شاشتك وبدون سكرول */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {clients.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center justify-center h-[115px] p-2.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#df9d17]/50 hover:bg-white/[0.06] transition-all duration-300 group shadow-lg"
            >
              <div className="relative w-[90%] h-[78px] flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="180px"
                  className={`object-contain transition-all duration-300 group-hover:scale-105 ${
                    client.filterType === "invert"
                      ? "invert brightness-200 opacity-90 group-hover:opacity-100"
                      : client.filterType === "mubadala"
                      ? "opacity-85 brightness-90 contrast-125 mix-blend-screen group-hover:opacity-100"
                      : "opacity-95 group-hover:opacity-100"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* قسم المزايا التنافسية (USPs) أسفلها مباشرة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-white/5">
          {usps.map((usp, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 rounded-xl bg-[#0c1222] border border-white/5 hover:border-[#df9d17]/30 transition-all duration-300 shadow-md"
            >
              <div className="p-3 rounded-lg bg-[#df9d17]/10 flex-shrink-0 text-[#df9d17]">
                {usp.icon}
              </div>
              <div>
                <h4 className="text-white text-sm font-bold tracking-tight">
                  {usp.title}
                </h4>
                <p className="text-zinc-400 text-xs mt-0.5">
                  {usp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}