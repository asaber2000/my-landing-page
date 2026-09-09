"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "driftx",
    title: "DRIFTx Event 2026",
    client: "Advanced Mobility Innovation Hub",
    location: "Abu Dhabi, UAE",
    year: "2026",
    coveredArea: "4,500 m²",
    category: "Events & Exhibitions tent",
    desc: "As premier tent manufacturers in UAE serving Dubai and beyond, Bait Al Nokhada delivered advanced structures for the DRIFTx Event 2026. Combining our signature Revolution Tent, Arch, and Dome Tent designs, we provided engineered, weather-resistant venues tailored for world-class mobility operations.",
    img: "/webp/DriftX-Tent-Revolutionn.webp",
  },
  {
    id: "Fifa-World-Cup",
    title: "FIFA World Cup 2026",
    client: "FIFA & Local Organizing Committee",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "3,200 m²",
    category: "Sports & High-Span",
    desc: "Experience the FIFA World Cup 2026 at the largest indoor fan zone in Dubai, crafted with precision tent manufacturing. Combining engineered climate control and bespoke luxury spaces, Bait Al Nokhada delivers the gold standard in tent rental in UAE for world-class sporting events and grand celebrations.",
    img: "/webp/Fifa-World-Cup.webp",
  },
  {
    id: "Fujairah-Open-International-Taekwondo-Championships",
    title: "Fujairah Open International Taekwondo Championships G2 2026",
    client: "Government Healthcare Authorities",
    location: "Fujairah, UAE",
    year: "2026",
    coveredArea: "6,000 m²",
    category: "Sports & Events Tent",
    desc: "As a premier tent supplier for the Fujairah Open International Taekwondo Championships G2 2026, Bait Al Nokhada delivered high-performance modular structures engineered for elite sporting excellence. Trust our turnkey event installations across the UAE to provide unparalleled structural safety, prestige, and seamless operational comfort.",
    img: "/webp/Fujairah-Open-International-Taekwondo-Championships.webp",
  },
  {
    id: "gulfood",
    title: "Gulfood 2026",
    client: "Advanced Mobility Innovation Hub",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "2,800 m²",
    category: "Exhibition & Trade Show Tent",
    desc: "Bait Al Nokhada delivers premier tent rental Dubai services for global gatherings like Gulfood Exhibition 2026. Engineered for major world food showcases, our clear-span Polygon Tents combine structural resilience with spacious, luxury event setups.",
    img: "/webp/Gulfood -2026.webp",
  },
  {
    id: "imtiaz",
    title: "Imtiaz",
    client: "International Fencing Federation",
    location: "Dubai, UAE",
    year: "2025",
    coveredArea: "3,500 m²",
    category: "COMMERCIAL & REAL ESTATE STRUCTURE",
    desc: "Engineered for the prestigious Imtiaz project, Bait Al Nokhada delivers premium architectural structures featuring sleek full-glass facades. Offering elite tents for sale and turnkey installation across the UAE, our climate-controlled venues provide the ultimate sophisticated setting for luxury corporate showcases and high-profile VIP receptions.",
    img: "/webp/Imtiaz.webp",
  },
  {
    id: "netflix",
    title: "Netflix Stranger Things Experience",
    client: "Global Entertainment Partner",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "2,500 m²",
    category: "Events & Revolution Tent",
    desc: "Bait Al Nokhada engineered and installed the custom Revolution Tent for the prestigious Netflix Stranger Things: The Experience Tent project. Combining clear-span design with world-class craftsmanship, we provide turnkey tent rental Dubai solutions to create fully immersive, unforgettable environments for high-profile global brand activations.",
    img: "/webp/Netflix-Stranger-Things.webp",
  }
];

export default function FeaturedSolutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const activeProject = projects[currentIndex];

  return (
    <section className="relative w-full py-12 sm:py-20 px-4 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden">
      
      {/* هيدر القسم الرئيسي */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-4 border-b border-white/10 pb-6 max-w-7xl mx-auto">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
            Featured Projects.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
          Here are some of our key projects: Explore select high-profile tent and tensile structure projects successfully delivered across the UAE & GCC.
        </p>
      </div>

      {/* شريط التحكم الموحد (موبايل + ديسكتوب) */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center justify-between bg-[#0F172A]/90 border border-white/10 rounded-2xl p-3 sm:px-6 sm:py-4 backdrop-blur-md">
          {/* المؤشرات التفاعلية النقاط */}
          <div className="flex items-center gap-2 pl-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? "w-8 sm:w-10 bg-[#D4AF37]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to project ${idx + 1}`}
              />
            ))}
          </div>

          {/* العداد وأزرار الأسهم */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="text-xs sm:text-sm font-mono text-slate-400 select-none">
              <span className="text-white font-bold text-sm sm:text-base">0{currentIndex + 1}</span> / 0{projects.length}
            </span>
            
            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="p-2.5 sm:p-3 rounded-xl bg-white/5 active:scale-95 hover:bg-white/10 border border-white/10 text-white transition-all cursor-pointer"
                aria-label="Previous Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="p-2.5 sm:p-3 rounded-xl bg-[#D4AF37] active:scale-95 hover:brightness-110 text-black font-bold transition-all cursor-pointer shadow-lg shadow-[#D4AF37]/20"
                aria-label="Next Project"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* تفاصيل المشروع بالكامل */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="flex flex-col gap-6 w-full max-w-7xl mx-auto"
        >
          {/* كروت المعلومات السريعة */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1 truncate">
                CLIENT / EVENT
              </span>
              <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.client}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
                Location
              </span>
              <p className="text-xs sm:text-base font-bold text-[#D4AF37] truncate">{activeProject.location}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
                Covered Area
              </span>
              <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.coveredArea}</p>
            </div>
            <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-widest block mb-1">
                YEAR DELIVERED
              </span>
              <p className="text-xs sm:text-base font-bold text-white truncate">{activeProject.year}</p>
            </div>
          </div>

          {/* حاوية الصورة والاسم */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] lg:aspect-[21/10] rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl">
            <Image  
              src={activeProject.img}
              alt={activeProject.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col gap-1 sm:gap-2">
              <span className="text-[10px] sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                {activeProject.category}
              </span>
              <h3 className="text-base sm:text-4xl font-bold font-heading text-white leading-tight">
                {activeProject.title}
              </h3>
            </div>
          </div>

          {/* المواصفات الفنية والنظرة العامة */}
          <div className="bg-[#0F172A]/60 border border-white/10 p-5 sm:p-8 rounded-3xl backdrop-blur-xl flex flex-col gap-2 sm:gap-3">
  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
    PROJECT HIGHLIGHTS
  </h4>
  <p className="text-slate-200 text-sm sm:text-lg font-light leading-relaxed">
    {activeProject.desc}
  </p>
</div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}