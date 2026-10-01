"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Building2,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Layers,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface ProjectItem {
  id: string;
  developer: string;
  projectTitle: string;
  location: string;
  year: string;
  coveredArea: string;
  category: string;
  wallSystem: string;
  roofFinish: string;
  acSystem: string;
  engineeringSolution: string;
  structures: string[];
  images: string[];
}

const portfolio: ProjectItem[] = [
  {
    id: "amaal",
    developer: "Amaal Residences",
    projectTitle: "Amaal × Mansory",
    location: "Dubai, UAE",
    year: "2026",
    coveredArea: "2,500 m²",
    category: "Sales Gallery",
    wallSystem: "Modular Aluminum Frame & Wall Panels",
    roofFinish: "Dual-Layer Insulated PVC Membrane",
    acSystem: "High-Capacity Centralized HVAC",
    engineeringSolution: "100% soundproof acoustic privacy with integrated insulated roof linings and cassette flooring.",
    structures: ["Arabic Majlis Tent", "Panoramic Tent"],
    images: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+7.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN3.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN2.webp",
    ]
  },
  {
    id: "imtiaz",
    developer: "Imtiaz Developments",
    projectTitle: "Signature Waterfront Sales Gallery",
    location: "Dubai Islands, UAE",
    year: "2026",
    coveredArea: "1,850 m²",
    category: "Sales Gallery",
    wallSystem: "Bronze Anodized Framing & Double Glass",
    roofFinish: "Multi-Layer Flame-Retardant Membrane",
    acSystem: "Concealed High-Ambient Ducted Chillers",
    engineeringSolution: "Rapid off-plan VIP negotiation suites with integrated architectural models plinths.",
    structures: ["VIP Lounge Tent", "Panoramic Glass Pavilion"],
    images: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+7.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN2.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN3.webp",
    ]
  },
  {
    id: "almarwan",
    developer: "Al Marwan Real Estate",
    projectTitle: "On-Site Commercial Sales Gallery",
    location: "Sharjah / Dubai, UAE",
    year: "2026",
    coveredArea: "1,500 m²",
    category: "Sales Gallery",
    wallSystem: "Heavy-Duty Modular Insulated Panels",
    roofFinish: "Weather-Sealed Architectural PVC",
    acSystem: "Independent Multi-Split Package Units",
    engineeringSolution: "Zero interior columns clear-span structure engineered directly on the construction site.",
    structures: ["Clear-Span Structure", "Commercial Reception Tent"],
    images: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN3.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN2.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+7.webp",
    ]
  }
];

export default function SalesCentersShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentProject = portfolio[activeProjectIndex];

  const changeProject = (idx: number) => {
    setActiveProjectIndex(idx);
    setSelectedImageIndex(0);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelectedImageIndex((prev) => {
        const total = currentProject?.images?.length || 1;
        return (prev + 1) % total;
      });
    }, 4500);

    return () => clearInterval(timer);
  }, [activeProjectIndex, isPaused]);

  const handleNextProject = () => {
    changeProject((activeProjectIndex + 1) % portfolio.length);
  };

  const handlePrevProject = () => {
    changeProject((activeProjectIndex - 1 + portfolio.length) % portfolio.length);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % currentProject.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
  };

  return (
    <section className="relative w-full py-24 px-4 sm:px-8 lg:px-16 bg-[#FFFFFF] text-slate-900 overflow-hidden select-none">

      {/* خلفية ديناميكية ناعمة */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-amber-500/5 via-slate-100/60 to-[#8C6D2B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* رأس القسم */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase bg-[#C5A880]/15 text-[#8C6D2B] border border-[#C5A880]/40">
            <Sparkles className="w-3.5 h-3.5 text-[#8C6D2B]" />
            <span>FEATURED REAL ESTATE PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-heading leading-tight">
            Custom Sales Center Tents <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6D2B] via-[#B89047] to-[#8C6D2B]">
              For UAE Master Developers
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Explore our delivered on-site sales centers and temporary sales tents, custom engineered for leading property developers across the UAE.
          </p>
        </div>

        {/* 1. أزرار اختيار المطور المتناسقة لشاشات الموبايل والديسكتوب */}
        <div className="w-full max-w-2xl mx-auto px-2">
          <div className="flex items-center justify-center gap-1.5 sm:gap-3 bg-slate-100/80 p-1 sm:p-1.5 rounded-full border border-slate-200/80 shadow-xs">
            {portfolio.map((proj, idx) => {
              const isActive = activeProjectIndex === idx;
              return (
                <button
                  key={proj.id}
                  onClick={() => changeProject(idx)}
                  className={`flex-1 flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-2.5 px-2 sm:px-5 rounded-full font-bold transition-all duration-300 cursor-pointer text-center ${isActive
                      ? "bg-slate-950 text-white shadow-md"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/50"
                    }`}
                >
                  <Building2
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${isActive ? "text-[#C5A880]" : "text-slate-400"
                      }`}
                  />
                  {/* في الموبايل تظهر الكلمة الأساسية لتتسع الأزرار كاملة، وفي الديسكتوب يظهر الاسم كاملاً */}
                  <span className="text-[11px] sm:hidden truncate">
                    {proj.id === "amaal"
                      ? "Amaal"
                      : proj.id === "imtiaz"
                        ? "Imtiaz"
                        : "Al Marwan"}
                  </span>
                  <span className="hidden sm:inline text-xs whitespace-nowrap">
                    {proj.developer}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. مسرح العرض ثلاثي الأبعاد مع معرض الصور الممتد */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative w-full max-w-6xl mx-auto h-[190px] xs:h-[220px] sm:h-[420px] md:h-[500px] flex items-center justify-center perspective-[1200px]"
        >
          {portfolio.map((proj, idx) => {
            let offset = idx - activeProjectIndex;
            if (offset < -1) offset += portfolio.length;
            if (offset > 1) offset -= portfolio.length;

            const isActive = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            let transform = "scale(0.7) translateZ(-300px)";
            let zIndex = 0;
            let opacity = 0;
            let pointerEvents = "none";

            if (isActive) {
              transform = "scale(1) translateZ(0px) translateX(0%)";
              zIndex = 30;
              opacity = 1;
              pointerEvents = "auto";
            } else if (isLeft) {
              transform = "scale(0.85) translateZ(-150px) translateX(-45%) rotateY(18deg)";
              zIndex = 20;
              opacity = 0.5;
              pointerEvents = "auto";
            } else if (isRight) {
              transform = "scale(0.85) translateZ(-150px) translateX(45%) rotateY(-18deg)";
              zIndex = 20;
              opacity = 0.5;
              pointerEvents = "auto";
            }

            const displayImage = isActive
              ? proj.images[selectedImageIndex]
              : proj.images[0];

            return (
              <div
                key={proj.id}
                onClick={() => changeProject(idx)}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  pointerEvents: pointerEvents as any,
                }}
                className="absolute w-[96%] sm:w-[86%] md:w-[82%] h-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.15)] border border-slate-200/80 bg-slate-900 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group"
              >
                <Image
                  key={`${proj.id}-${isActive ? selectedImageIndex : 0}`}
                  src={displayImage}
                  alt={proj.projectTitle}
                  fill
                  unoptimized
                  className="object-cover object-[50%_45%] transition-transform duration-700 ease-out"
                  priority={isActive}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 sm:top-6 sm:left-6 sm:right-6 z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-white/90 text-slate-950 shadow-md">
                    {proj.developer}
                  </span>

                  {isActive && (
                    <span className="px-3.5 py-1 rounded-full text-[11px] font-bold bg-black/60 backdrop-blur-md text-white border border-white/20">
                      Photo {selectedImageIndex + 1} / {proj.images.length}
                    </span>
                  )}
                </div>

                {/* أسهم داخلية تظهر فقط على شاشات الديسكتوب عند مرور الماوس لمنع التداخل في الموبايل */}
                {isActive && (
                  <div className="hidden sm:flex absolute inset-y-0 inset-x-3 items-center justify-between pointer-events-none z-20">
                    <button
                      onClick={prevImage}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Previous Photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>

                    <button
                      onClick={nextImage}
                      className="pointer-events-auto w-9 h-9 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md text-white border border-white/20 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-105 active:scale-95 cursor-pointer"
                      aria-label="Next Photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 z-10 flex items-end justify-between text-white">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-300 font-bold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{proj.location}</span>
                    </div>
                    <h3 className="text-sm sm:text-2xl font-black font-heading leading-tight drop-shadow-md line-clamp-1 sm:line-clamp-none">
                      {proj.projectTitle}
                    </h3>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white">
                    <span>{proj.coveredArea}</span> 
                    <span className="opacity-60">•</span>
                    <span>{proj.year}</span>
                  </div>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 overflow-hidden z-20">
                    <div
                      key={`${activeProjectIndex}-${selectedImageIndex}-${isPaused}`}
                      className={`h-full bg-gradient-to-r from-[#8C6D2B] via-[#C5A880] to-white ${!isPaused ? "w-full transition-all duration-[4500ms] ease-linear" : "w-full"}`}
                    />
                  </div>
                )}
              </div>
            );
          })}

          <button
            onClick={handlePrevProject}
            className="absolute -left-1 sm:left-3 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
            aria-label="Previous Project"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
          </button>

          <button
            onClick={handleNextProject}
            className="absolute -right-1 sm:right-3 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-900 shadow-md border border-slate-200 flex items-center justify-center transition-all duration-300 active:scale-90 cursor-pointer"
            aria-label="Next Project"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-800" />
          </button>
        </div>

        {/* 3. معرض مصغرات الصور للمشروع المختار */}
        <div className="max-w-xl mx-auto grid grid-cols-4 gap-2 sm:gap-3.5 px-2">
          {currentProject.images.map((imgUrl, thumbIdx) => (
            <button
              key={`${currentProject.id}-thumb-${thumbIdx}`}
              onClick={() => setSelectedImageIndex(thumbIdx)}
              className={`relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${selectedImageIndex === thumbIdx
                  ? "border-[#8C6D2B] ring-2 sm:ring-4 ring-[#8C6D2B]/20 scale-105 shadow-md"
                  : "border-slate-200/80 opacity-50 hover:opacity-100 hover:scale-100"
                }`}
            >
              <Image
                src={imgUrl}
                alt={`${currentProject.developer} view ${thumbIdx + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* 4. لوحة البيانات المعمارية */}
        <div
          key={currentProject.id}
          className="max-w-4xl mx-auto p-6 sm:p-8 rounded-[2rem] bg-[#FCFCFB] border border-slate-200/80 shadow-[0_15px_45px_-20px_rgba(0,0,0,0.06)] space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          {/* شريط البيانات الأساسية (Metadata Bar) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Project</span>
              <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 block truncate font-heading">{currentProject.projectTitle}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Covered Area</span>
              <span className="text-xs sm:text-sm font-black text-[#8C6D2B] mt-0.5 block font-heading">{currentProject.coveredArea}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Location</span>
              <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 block truncate font-heading">{currentProject.location}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 text-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Year</span>
              <span className="text-xs sm:text-sm font-black text-slate-900 mt-0.5 block font-heading">{currentProject.year}</span>
            </div>
          </div>

          {/* المواصفات الهندسية الدقيقة كـ Key-Value Items */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D2B] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Specifications</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70">
                <span className="text-slate-400 font-semibold">Wall System</span>
                <span className="font-bold text-slate-800 text-right">{currentProject.wallSystem}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70">
                <span className="text-slate-400 font-semibold">Roof Finish</span>
                <span className="font-bold text-slate-800 text-right">{currentProject.roofFinish}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70">
                <span className="text-slate-400 font-semibold">AC System</span>
                <span className="font-bold text-slate-800 text-right">{currentProject.acSystem}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200/70">
                <span className="text-slate-400 font-semibold">Engineering Solution</span>
                <span className="font-bold text-slate-800 text-right">{currentProject.engineeringSolution}</span>
              </div>
            </div>
          </div>

          {/* زر الطلب المباشر في المنتصف */}
          <div className="pt-4 border-t border-slate-200/60 flex justify-center">
            <a
              href={`https://wa.me/97143444091?text=Hello%20Bait%20Al%20Nokhada,%20we%20want%20to%20request%20a%20turnkey%20Sales%20Center%20similar%20to%20${encodeURIComponent(currentProject.projectTitle)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Request Layout Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}