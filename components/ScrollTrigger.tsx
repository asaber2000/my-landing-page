"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Sparkles, Compass } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const productsList: ProductItem[] = [
  {
    id: "pyramid",
    title: "Pyramid Tent",
    subtitle: "Classic Architectural Tent",
    desc: "The pyramid tent features a timeless triangular design, seamlessly merging traditional aesthetics with modern functionality.",
    img: "/webp/Luxury-pyramid-tent.webp",
  },
  {
    id: "dome",
    title: "Dome Tent",
    subtitle: "Geometric Dome Structure",
    desc: "This dome tent, with its unique geometric design, offers superior stability and a spacious interior ideal for exhibitions.",
    img: "/webp/Dome-Tents-for-Events.webp",
  },
  {
    id: "capsule",
    title: "Capsule Tent",
    subtitle: "Innovative Portable Solution",
    desc: "The capsule tent is an innovative, compact, and spacious solution for rapid deployment as temporary housing or festival accommodation.",
    img: "/webp/Capsule-Tents-for-Rent.webp",
  },
  {
    id: "revolution",
    title: "Revolution Tent",
    subtitle: "Cutting-Edge Design",
    desc: "The Revolution tent boasts a cutting-edge design, blending superior functionality with a futuristic and robust build.",
    img: "/webp/Revolution-Tents-for-Rent-in-Dubai.webp",
  },
  {
    id: "polygon",
    title: "Polygon Tent",
    subtitle: "High-Span Architecture",
    desc: "The Polygon Tent brilliantly combines modern architecture with exceptional practical functionality for large events and exhibitions.",
    img: "/webp/Customized-polygon-tent.webp",
  },
  {
    id: "arch",
    title: "Arch Tent",
    subtitle: "Curved Architectural Elegance",
    desc: "Modern arch tents, with their distinctive curved roofs, offer an elegant and sophisticated look perfect for corporate events.",
    img: "/webp/arch-tent-rental.webp",
  },
  {
    id: "panoramic",
    title: "Panoramic Tent",
    subtitle: "Transparent Scenic Design",
    desc: "The panoramic tent delivers immersive experiences with its breathtaking transparent design, making it perfect for dream weddings.",
    img: "/webp/Panoramic-tents-supplier.webp",
  },
  {
    id: "geodesic",
    title: "Geodesic Tent",
    subtitle: "Architecturally Stunning",
    desc: "The geodesic dome offers an architecturally stunning, dome-shaped design, providing exceptional spaciousness and weather resistance.",
    img: "/webp/geodesic.webp",
  },
  {
    id: "wave",
    title: "Wave Tent",
    subtitle: "Flowing Modern Silhouette",
    desc: "With its graceful, flowing silhouette, the Royal Wave Tent adds a distinctive, modern, and elegant touch to beachfront events.",
    img: "/webp/Wave-Tent.webp",
  },
  {
    id: "arabic-majlis",
    title: "Arabic Majlis Tent",
    subtitle: "Traditional Heritage Design",
    desc: "Celebrate a rich tradition with authentic Arabic Majlis Tents, meticulously designed with profound cultural authenticity.",
    img: "/webp/arabic-majlis-tents.webp",
  },
  {
    id: "double-decker",
    title: "Double Decker Tent",
    subtitle: "Two-Level Versatility",
    desc: "Revolutionize your event space with the double-decker tent, offering two levels of unparalleled functionality for major exhibitions.",
    img: "/webp/double-decker-tent-in-Dubai.webp",
  },
  {
    id: "pyramid-dome",
    title: "Pyramid Dome Tent",
    subtitle: "Innovative Fusion Structure",
    desc: "The pyramid with dome tent presents an innovative fusion of classic pyramid structures with added dynamic flexibility.",
    img: "/webp/pyramid-dome-tent.webp",
  },
  {
    id: "curve",
    title: "Curve Tent",
    subtitle: "Streamlined Curvature",
    desc: "Advanced curved structural engineering offering sleek aesthetics and robust performance under various weather conditions.",
    img: "/webp/Curve-tent-rental.webp",
  },
];

export default function InteractiveFinder() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const trigger = triggerRef.current;
    if (!section || !trigger) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => trigger.scrollWidth - window.innerWidth;

      const tween = gsap.to(trigger, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setScrollProgress(self.progress * 100);
          },
        },
      });

      return () => {
        tween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // دالة لتفعيل تأثير الـ 3D Tilt مع حركة الماوس داخل الكارت

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#070B14] text-white overflow-hidden border-t border-white/10 flex flex-col justify-start pt-8 sm:justify-center sm:pt-0"
    >
      {/* خلفية جمالية متوهجة */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[160px]" />
      </div>

      {/* حاوية الـ Scroll الأفقي */}
      <div
        ref={triggerRef}
        className="flex items-center h-[76vh] w-max px-6 sm:px-16 gap-8 z-10 will-change-transform"
      >
        {/* كارت المقدمة التعريفي الفخم */}
        <div className="w-[85vw] sm:w-[460px] h-[490px] shrink-0 flex flex-col justify-between bg-[#0F172A]/60 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 animate-spin-slow" />
            Immersive 3D Experience
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight tracking-tight">
            Explore All Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Structures.
            </span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light mt-4 leading-relaxed">
            Drag or scroll horizontally to interact with our turnkey architectural models. Move your cursor over any card to experience depth.
          </p>
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span>Navigation Deck</span>
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase">13 Systems Available</span>
          </div>
        </div>

        {/* كروت المنتجات بتأثير الـ 3D الحركي */}
        {productsList.map((item, index) => (
          <div
            key={item.id}
            onMouseLeave={handleMouseLeave}
            style={{ transition: "transform 0.1s ease-out" }}
            className="w-[85vw] sm:w-[480px] lg:w-[520px] h-full shrink-0 bg-[#0F172A]/80 border border-white/15 rounded-3xl p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] relative overflow-hidden group cursor-pointer"
          >
            {/* إضاءة ذهبية تفاعلية تتولد مع الحركة */}
            <div className="absolute -inset-px bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />

            {/* صورة المنتج */}
            <div className="relative w-full h-[52%] rounded-2xl overflow-hidden border border-white/15 bg-black shadow-inner">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 85vw, 520px"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-[11px] font-bold text-[#D4AF37] shadow-lg">
                Model 0{index + 1} / 13
              </div>
            </div>

            {/* محتوى الكارت */}
            <div className="flex flex-col gap-2.5 z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-0.5">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </div>

            {/* زر الطلب */}
            <div className="pt-2 z-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 border border-white/10 group-hover:border-[#D4AF37] shadow-lg"
              >
                <span>Request Project Quote</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* شريط التقدم الذهبي السفلي (Progress Bar) */}
      <div className="absolute bottom-6 left-6 right-6 sm:left-16 sm:right-16 z-20 flex items-center gap-4 pointer-events-none">
        <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37]">Start</span>
        <div className="relative w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] transition-all duration-100 rounded-full"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">End</span>
      </div>
    </section>
  );
}