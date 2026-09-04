"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const branches = [
  { 
    city: "Dubai, UAE", 
    address: "Techno Park, Jebel Ali",
    mapUrl: "https://www.google.com/maps/place/%D8%A8%D9%8A%D8%AA+%D8%A7%D9%84%D9%86%D9%88%D8%AE%D8%B0%D8%A9+-+BAITALNOKHADA+TENTS+FACTORY+-HEAD+OFFICE+DUBAI%E2%80%AD/@24.934106,55.065001,10z/data=!4m6!3m5!1s0x3e5f0da58ab6364d:0xb668e74c8c5b934b!8m2!3d24.9341063!4d55.065001!16s%2Fg%2F11k3_kdvx5?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D" 
  },
  { 
    city: "Abu Dhabi, UAE", 
    address: "M41, ICAD-1, Mussafah",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+and+Fabric+Shade+Factory+LLC/@24.329919,54.506679,10z/data=!4m6!3m5!1s0x3e5e3f5897d3f4bd:0x85a564def64cac9!8m2!3d24.329919!4d54.506679!16s%2Fg%2F1pp2vgtxq?hl=en&entry=tts&shorturl=1" 
  },
  { 
    city: "Riyadh, Saudi Arabia", 
    address: "Al Olaya District",
    mapUrl: "https://www.google.com/maps/place/Bait+Al+Nokhada+Tents+And+Fabric+Shades+L.L.C/@24.682873,46.690347,10z/data=!4m6!3m5!1s0x3e2f03a6ffaa6281:0xfabe7d0cdc115b44!8m2!3d24.6828729!4d46.6903469!16s%2Fg%2F11tnjxbp2l?ll=24.682873,46.690347&z=10&t=m&hl=en&gl=US&mapclient=embed&cid=18068016249242213188&entry=tts&shorturl=1" 
  },
];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* 1. عمود المحتوى الأيسر (على الموبايل العنوان يظهر أولاً) */}
        <div className="lg:col-span-6 flex flex-col gap-8">
          
          {/* عنوان السيكشن */}
          <div>
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight font-heading leading-tight">
              LET'S TALK ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                YOUR PROJECT.
              </span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed mt-4 max-w-lg">
              Have a custom architectural requirement or need turnkey tent solutions in the UAE & KSA? Reach out to our engineering experts today.
            </p>
          </div>

          {/* بيانات الاتصال والفروع على الديسكتوب فقط */}
          <div className="hidden lg:flex flex-col gap-8">
            {/* وسائل التواصل المباشرة */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Phone Inquiries</span>
                  <a href="tel:+971558850631" className="text-xs font-semibold text-white hover:text-[#D4AF37] transition truncate block">
                    +971 55 885 0631
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Email Support</span>
                  <a href="mailto:Info@baitalnokhada.Com" className="text-xs font-semibold text-white hover:text-[#D4AF37] transition truncate block">
                    Info@baitalnokhada.Com
                  </a>
                </div>
              </div>
            </div>

            {/* الفروع الإقليمية */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
                Regional Presence & Branches
              </span>
              <div className="grid grid-cols-3 gap-3">
                {branches.map((b, idx) => (
                  <a
                    key={idx}
                    href={b.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                    title="Open in Google Maps"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 text-white font-bold text-xs">
                        <div className="flex items-center gap-1.5 truncate">
                          <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="truncate">{b.city}</span>
                        </div>
                        <svg className="w-3 h-3 text-slate-500 group-hover:text-[#D4AF37] transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-snug group-hover:text-slate-300 transition-colors">
                        {b.address}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 2. كارت الفورم (يأتي مباشرة بعد العنوان في الموبايل، ويميناً في الديسكتوب) */}
        <div className="lg:col-span-6 relative p-6 sm:p-10 rounded-3xl bg-[#0F172A]/80 border border-white/15 backdrop-blur-2xl shadow-2xl w-full">
          <h3 className="text-2xl font-bold font-heading mb-1 text-white">
            Fill in the form below
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            We will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle2 className="w-14 h-14 text-[#D4AF37] animate-bounce" />
              <h4 className="text-xl font-bold text-white font-heading">Thank You!</h4>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Your request has been submitted. One of our engineers will be in touch with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ahmed Saber" 
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+971 50 000 0000" 
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com" 
                    className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                  Project Details
                </label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your tent or structure requirements..." 
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition resize-none"
                />
              </div>

              <button 
                type="submit"
                className="mt-2 w-full py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#c29d30] text-black font-bold text-xs tracking-widest uppercase transition flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Send My Request</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* 3. بيانات الاتصال والفروع على الموبايل فقط (تظهر تحت الفورم) */}
        <div className="flex lg:hidden flex-col gap-8 w-full">
          {/* وسائل التواصل المباشرة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Phone Inquiries</span>
                <a href="tel:+971558850631" className="text-xs font-semibold text-white hover:text-[#D4AF37] transition truncate block">
                  +971 55 885 0631
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Email Support</span>
                <a href="mailto:Info@baitalnokhada.Com" className="text-xs font-semibold text-white hover:text-[#D4AF37] transition truncate block">
                  Info@baitalnokhada.Com
                </a>
              </div>
            </div>
          </div>

          {/* الفروع الإقليمية */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
              Regional Presence & Branches
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {branches.map((b, idx) => (
                <a
                  key={idx}
                  href={b.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/[0.06] transition-all duration-300 group flex flex-col justify-between cursor-pointer"
                  title="Open in Google Maps"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 text-white font-bold text-xs">
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="truncate">{b.city}</span>
                      </div>
                      <svg className="w-3 h-3 text-slate-500 group-hover:text-[#D4AF37] transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 leading-snug group-hover:text-slate-300 transition-colors">
                      {b.address}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}