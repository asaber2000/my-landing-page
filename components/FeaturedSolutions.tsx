"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "al-ain",
    title: "Al Ain Equestrian Festival 2026",
    client: "Al Ain Equestrian Racing & Golf Club",
    location: "Al Ain, UAE",
    year: "2026",
    coveredArea: "4,500 m²",
    category: "VIP & Royal Majlis",
    desc: "Manufactured and installed a premium Revolution Tent for the prestigious Al Ain Equestrian Festival, delivering ideal event spaces for world-class sporting events.",
    specs: {
      wallSystem: "Modular Glass Panels & Aluminum",
      roofFinish: "Double-Layer Insulated PVC Membrane",
      acSystem: "High-Capacity Centralized HVAC"
    },
    img: "/images/Premium-Exhibiton-Tent.jpg",
  },
  {
    id: "fujairah",
    title: "Fujairah Open International Taekwondo Championships",
    client: "Fujairah Martial Arts Club",
    location: "Fujairah, UAE",
    year: "2026",
    coveredArea: "3,200 m²",
    category: "Sports & High-Span",
    desc: "Installed a high-span polygon structure for international martial arts championships, ensuring absolute weather protection and wide interior clearance.",
    specs: {
      wallSystem: "Heavy-Duty Aluminum Frame",
      roofFinish: "Flame-Retardant Architectural Fabric",
      acSystem: "Industrial Climate Control Units"
    },
    img: "/images/Polygon-Tent-for-Sports-in-KSA.jpg",
  },
  {
    id: "whx",
    title: "World Health Expo (WHX) Dubai 2026",
    client: "Government Healthcare Authorities",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "6,000 m²",
    category: "Exhibition & Trade Show",
    desc: "Delivered massive exhibition pavilions tailored for international healthcare exhibitions with custom multi-room configurations and full AC integration.",
    specs: {
      wallSystem: "Modular Glass & Hard Wall Systems",
      roofFinish: "Insulated Thermal Membrane",
      acSystem: "Commercial Multi-Zone HVAC"
    },
    img: "/images/Buy & Rent Arch Tents.jpg",
  },
  {
    id: "driftx",
    title: "DRIFTx Project",
    client: "Advanced Mobility Innovation Hub",
    location: "Abu Dhabi, UAE",
    year: "2026",
    coveredArea: "2,800 m²",
    category: "Custom Innovative Structure",
    desc: "Engineered a striking custom tent structure for the groundbreaking DRIFTx event, combining modern aesthetic lines with rugged durability.",
    specs: {
      wallSystem: "Panoramic Glass Facades",
      roofFinish: "Architectural Tensioned Membrane",
      acSystem: "Smart Climate Management"
    },
    img: "/images/Luxury-Tents-for-Events.jpg",
  },
  {
    id: "fie",
    title: "FIE World Cup Fujairah",
    client: "International Fencing Federation",
    location: "Fujairah, UAE",
    year: "2025",
    coveredArea: "3,500 m²",
    category: "International Sports Event",
    desc: "Provided large-scale event tent structures for the FIE World Cup, meeting strict international athletic and hospitality standards.",
    specs: {
      wallSystem: "Aluminum Box Beam Frame",
      roofFinish: "Translucent PVC Fabric",
      acSystem: "High-Performance Air Handling Units"
    },
    img: "/images/VIP-Event-Tents.jpg",
  },
  {
    id: "netflix",
    title: "Netflix Stranger Things Experience",
    client: "Global Entertainment Partner",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "2,500 m²",
    category: "Themed Entertainment Marquee",
    desc: "Installed a specialized dark-tent structure with complete acoustic and light-blocking insulation for an immersive brand activation.",
    specs: {
      wallSystem: "Blackout Insulated Panels",
      roofFinish: "Double-Layer Acoustic Membrane",
      acSystem: "Precision Climate Control"
    },
    img: "/images/Ramadan-Tents-in-KSA.jpg",
  }
];

export default function FeaturedSolutions() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section className="relative w-full py-16 sm:py-20 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden">
      
      {/* عنوان القسم - تم ضغط المساحات الفاصلة لتبدو مدمجة ومنسقة */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Portfolio Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-heading">
            Featured Projects.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-light leading-relaxed">
          Explore our landmark executed projects across the UAE, built to uncompromising engineering standards.
        </p>
      </div>

      {/* أزرار اختيار المشاريع - تم تكبير الخط وإعطائها مساحة مريحة */}
      <div className="flex flex-wrap gap-2.5 mb-8">
        {projects.map((proj) => {
          const isActive = activeProject.id === proj.id;
          return (
            <button
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105"
                  : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
              }`}
            >
              {proj.title}
            </button>
          );
        })}
      </div>

      {/* عرض تفاصيل المشروع النشط داخل الإطار المتوازن */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col gap-6 w-full max-w-7xl mx-auto"
        >
          {/* معلومات سريعة - تم تكبير خطوط محتويات الحقول */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] text-slate-400 uppercase tracking-widest block mb-1">Client / Authority</span>
              <p className="text-sm sm:text-base font-bold text-white truncate">{activeProject.client}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] text-slate-400 uppercase tracking-widest block mb-1">Location</span>
              <p className="text-sm sm:text-base font-bold text-[#D4AF37]">{activeProject.location}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] text-slate-400 uppercase tracking-widest block mb-1">Covered Area</span>
              <p className="text-sm sm:text-base font-bold text-white">{activeProject.coveredArea}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#0F172A]/80 border border-white/10 backdrop-blur-md">
              <span className="text-[11px] text-slate-400 uppercase tracking-widest block mb-1">Completion Year</span>
              <p className="text-sm sm:text-base font-bold text-white">{activeProject.year}</p>
            </div>
          </div>

          {/* الصورة الكبيرة والاسم - مع ارتفاع متناسق مش ضخم زيادة عن اللزوم */}
          <div className="relative w-full h-[360px] sm:h-[480px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl">
            <img
              src={activeProject.img}
              alt={activeProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex flex-col gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                {activeProject.category}
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold font-heading text-white">
                {activeProject.title}
              </h3>
            </div>
          </div>

          {/* تفاصيل المشروع الفنية - خطوط واضحة ومقروءة */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#0F172A]/60 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-xl items-center">
            <div className="lg:col-span-7 flex flex-col justify-center gap-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Project Execution Overview</h4>
              <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
                {activeProject.desc}
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3.5 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8 justify-center">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-1">Technical Specifications</h4>
              <div className="flex justify-between text-sm border-b border-white/10 pb-2.5">
                <span className="text-slate-400">Wall System</span>
                <span className="font-bold text-white">{activeProject.specs.wallSystem}</span>
              </div>
              <div className="flex justify-between text-sm border-b border-white/10 pb-2.5">
                <span className="text-slate-400">Roof Finish</span>
                <span className="font-bold text-white">{activeProject.specs.roofFinish}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">AC Integration</span>
                <span className="font-bold text-white">{activeProject.specs.acSystem}</span>
              </div>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

    </section>
  );
}