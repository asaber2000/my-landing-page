"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Building2, ShieldCheck, Clock, MapPin, ArrowRight, Layers } from "lucide-react";

interface ProjectItem {
  id: string;
  developer: string;
  projectTitle: string;
  location: string;
  duration: string;
  span: string;
  description: string;
  images: string[];
  features: string[];
}

const portfolio: ProjectItem[] = [
  {
    id: "amaal",
    developer: "Amaal Residences",
    projectTitle: "Luxury Meydan Experience Pavilion",
    location: "Meydan, Dubai, UAE",
    duration: "Delivered in 18 Days",
    span: "Clear-Span 1,200 m² (Zero Columns)",
    description: "A fast-track architectural headquarters featuring double-glazed insulated panoramic glass facades, bespoke acoustic fabric ceilings, and high-capacity concealed HVAC built for severe summer climates.",
    images: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL-6.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AMAAL+7.webp",
    ],
    features: [
      "Civil Defense Safety Approved",
      "Concealed Ducted HVAC System",
      "Heavy-Duty Aluminum DIN Profile",
      "Panoramic Acoustic Glass"
    ]
  },
  {
    id: "almarwan",
    developer: "Al Marwan Real Estate",
    projectTitle: "Turnkey On-Site Sales Gallery",
    location: "Sharjah / Dubai Road",
    duration: "Delivered in 21 Days",
    span: "850 m² Modular Space",
    description: "Fully engineered modular structure built directly on-site to accelerate off-plan VIP unit sales with turnkey marble-finish raised flooring and private investor negotiation lounges.",
    images: [
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN3.webp",
      "https://baitalnokhada-landing-media.s3.us-east-1.amazonaws.com/media-images/Events/AL+MARWAN2.webp",
    ],
    features: [
      "Modular Dismantle & Relocate Ready",
      "VIP Private Client Suites",
      "Integrated LED Ambient Lighting",
      "Turnkey Fit-Out & Flooring"
    ]
  }
];

export default function SalesCentersShowcase() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentProject = portfolio[activeProjectIndex];

  // التمرير التلقائي السلس للصور كل 4.5 ثوانٍ
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelectedImageIndex((prev) => 
        (prev + 1) % currentProject.images.length
      );
    }, 4500);

    return () => clearInterval(timer);
  }, [currentProject.images.length, isPaused]);

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* سكشن العنوان الرئيسي */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#C5A880]/15 text-[#8C6D2B] border border-[#C5A880]/40">
            <Building2 className="w-3.5 h-3.5 text-[#8C6D2B]" />
            <span>Proven Track Record</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Executed Sales Centers <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8C6D2B] via-[#B89047] to-[#8C6D2B]">
              For UAE Master Developers
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            Examine our turnkey architectural temporary and semi-permanent structures manufactured in-house and built on prime UAE developer sites.
          </p>
        </div>

        {/* أزرار اختيار المشروع: Segmented Control أنيق وفاخر */}
        <div className="flex justify-center">
          <div className="inline-flex items-center p-1.5 rounded-full bg-slate-100/90 border border-slate-200/80 shadow-xs">
            {portfolio.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProjectIndex(idx);
                  setSelectedImageIndex(0);
                }}
                className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 ${
                  activeProjectIndex === idx
                    ? "bg-slate-950 text-white shadow-md"
                    : "text-slate-600 hover:text-slate-950"
                }`}
              >
                <Building2 className={`w-4 h-4 ${activeProjectIndex === idx ? "text-[#C5A880]" : "text-slate-400"}`} />
                <span>{proj.developer}</span>
              </button>
            ))}
          </div>
        </div>

        {/* كارت المشروع التفاعلي الفاخر */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FCFCFB] p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)]"
        >
          
          {/* العمود الأيسر: شاشة العرض الديناميكية */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* الصورة الرئيسية المعروضة */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-inner group">
              <Image
                src={currentProject.images[selectedImageIndex]}
                alt={currentProject.projectTitle}
                fill
                unoptimized
                className="object-cover transition-all duration-700 ease-out group-hover:scale-102"
                priority
              />
              
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20">
                  {currentProject.developer}
                </span>
              </div>

              {/* شريط التقدم النحيف في أسفل الصورة */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/25">
                <div 
                  key={`${activeProjectIndex}-${selectedImageIndex}`}
                  className={`h-full bg-gradient-to-r from-[#8C6D2B] to-[#C5A880] ${!isPaused ? "w-full transition-all duration-[4500ms] ease-linear" : "w-full"}`}
                />
              </div>
            </div>

            {/* مصغرات التبديل اليدوي بين الصور */}
            <div className="flex items-center gap-3">
              {currentProject.images.map((imgUrl, thumbIdx) => (
                <button
                  key={thumbIdx}
                  onClick={() => setSelectedImageIndex(thumbIdx)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImageIndex === thumbIdx
                      ? "border-[#8C6D2B] ring-2 ring-[#8C6D2B]/20 scale-102"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt="Thumbnail"
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

          </div>

          {/* العمود الأيمن: مواصفات المشروع والمعلومات التنفيذية */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#8C6D2B] uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentProject.location}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-950 font-heading">
                {currentProject.projectTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
                {currentProject.description}
              </p>
            </div>

            {/* كروت الأرقام الهندسية السريعة */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase">
                  <Clock className="w-3.5 h-3.5 text-[#8C6D2B]" />
                  <span>Timeline</span>
                </div>
                <p className="text-sm font-black text-slate-950 mt-0.5">{currentProject.duration}</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase">
                  <Layers className="w-3.5 h-3.5 text-[#8C6D2B]" />
                  <span>Architecture</span>
                </div>
                <p className="text-sm font-black text-slate-950 mt-0.5">{currentProject.span}</p>
              </div>
            </div>

            {/* قائمة التحقق للمواصفات المنفذة */}
            <div className="space-y-2 pt-1 border-t border-slate-200/70">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Engineering Scope</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                {currentProject.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#8C6D2B] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* زر استفسار خاص بهذا المشروع */}
            <div className="pt-2">
              <a
                href={`https://wa.me/97143444091?text=Hello%20Bait%20Al%20Nokhada,%20I%20am%20interested%20in%20a%20Sales%20Center%20solution%20similar%20to%20the%20${encodeURIComponent(currentProject.developer)}%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-md hover:-translate-y-0.5"
              >
                <span>Request Similar Layout for Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}