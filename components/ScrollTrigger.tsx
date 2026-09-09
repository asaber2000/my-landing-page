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
    desc: "Partner with Bait Al Nokhada, premier tent manufacturers in Dubai and a trusted pyramid tent supplier across the UAE and KSA. Engineered with weather-resistant PVC, our structures deliver unmatched elegance and durability, offering flexible tent rental and sales solutions tailored to elevate any luxury corporate or private event.",
    img: "/webp/Luxury-pyramid-tent.webp",
  },
  {
    id: "dome",
    title: "Dome Tent",
    subtitle: "Geometric Dome Structure",
    desc: "Elevate your event with premium dome tent rental solutions from Bait Al Nokhada, leading tent manufacturers in UAE. Crafted with durable, weather-resistant PVC and an iconic geodesic frame, our dome tent structures provide an unobstructed 360° interior experience tailored for luxury corporate gatherings, VIP suites, and private celebrations.",
    img: "/webp/Dome-Tents-for-Events.webp",
  },
  {
    id: "capsule",
    title: "Capsule Tent",
    subtitle: "Innovative Portable Solution",
    desc: "Elevate your brand presence with the futuristic Capsule Tent by Bait Al Nokhada, a trusted leader in tent manufacturing across the UAE and KSA. Ideal for exhibitions, trade shows & events, these modular tents for sale deliver rapid setup, weather-resistant durability, and sophisticated modern style.",
    img: "/webp/Capsule-Tents-for-Rent.webp",
  },
  {
    id: "revolution",
    title: "Revolution Tent",
    subtitle: "Cutting-Edge Design",
    desc: "Engineered with durable PVC fabric and clear-span aluminum framing, the Revolution Tent by Bait Al Nokhada delivers ultimate luxury across Dubai, the UAE, and KSA. Ideal as an exhibitions tent or large-scale events tent, our premium tents for rent combine all-weather resilience with fully customizable layouts.",
    img: "/webp/Revolution-Tents-for-Rent-in-Dubai.webp",
  },
  {
    id: "polygon",
    title: "Polygon Tent",
    subtitle: "High-Span Architecture",
    desc: "Engineered with a robust aluminum frame and premium PVC fabric, the Polygon Tent by Bait Al Nokhada delivers wide, pillarless luxury. As trusted tent manufacturers in UAE, we provide turnkey tent rental Dubai and Riyadh services, crafting the perfect high-impact events tent for exhibitions, VIP lounges, and gala celebrations.",
    img: "/webp/Customized-polygon-tent.webp",
  },
  {
    id: "arch",
    title: "Arch Tent",
    subtitle: "Curved Architectural Elegance",
    desc: "Backed by over 30 years of excellence in tent manufacturing, the Arch Tent features a heavy-duty aluminum frame and weather-resistant PVC fabric. Perfect as a high-capacity events tent, we provide premium tents for sale alongside turnkey tent rental in UAE and KSA markets.",
    img: "/webp/arch-tent-rental.webp",
  },
  {
    id: "panoramic",
    title: "Panoramic Tent",
    subtitle: "Transparent Scenic Design",
    desc: "Engineered by leading tent manufacturers in Dubai, the Panoramic Tent combines a robust aluminum frame with durable PVC fabric for unobstructed, luxurious spaces. Designed for high-end hospitality and elite events across the UAE and KSA, this structure delivers superior weather resistance, architectural elegance, and complete layout freedom.",
    img: "/webp/Panoramic-tents-supplier.webp",
  },
  {
    id: "geodesic",
    title: "Geodesic Tent",
    subtitle: "Architecturally Stunning",
    desc: "Make a bold architectural statement with the premium Geodesic Tent from Bait Al Nokhada. Engineered with clear-span aluminum framing and all-weather PVC, it delivers pole-free luxury for exhibitions and VIP venues. Available for rental and sale across the UAE and KSA to elevate any high-profile event.",
    img: "/webp/geodesic.webp",
  },
  {
    id: "wave",
    title: "Wave Tent",
    subtitle: "Flowing Modern Silhouette",
    desc: "Transform your event with the architectural Wave Tent by Bait Al Nokhada, featuring a signature curved roof and pillar-free interior. Available for rental and sale across the UAE and KSA, this modular shelter combines sleek luxury with durable weather resistance for VIP lounges, weddings, and exhibitions.",
    img: "/webp/Wave-Tent.webp",
  },
  {
    id: "arabic-majlis",
    title: "Arabic Majlis Tent",
    subtitle: "Traditional Heritage Design",
    desc: "Celebrate authentic Arabian hospitality with the premium Arabic Majlis Tent by Bait Al Nokhada. Combining Bedouin heritage with weather-resistant durability, our customizable structures create luxurious cultural environments and VIP lounges across the UAE and KSA.",
    img: "/webp/arabic-majlis-tents.webp",
  },
  {
    id: "double-decker",
    title: "Double Decker Tent",
    subtitle: "Two-Level Versatility",
    desc: "Maximize your venue capacity with the custom Double Decker Tent by Bait Al Nokhada, designed to double usable space with premium multi-level luxury. Engineered for prestigious sporting tournaments, VIP lounges, and large-scale exhibitions, our bespoke structures deliver world-class elegance across Dubai, the UAE, and KSA.",
    img: "/webp/double-decker-tent-in-Dubai.webp",
  },
  {
    id: "pyramid-dome",
    title: "Pyramid Dome Tent",
    subtitle: "Innovative Fusion Structure",
    desc: "Elevate your event with the architectural Pyramid Dome Tent by Bait Al Nokhada, designed to blend modular flexibility with high-end luxury. Available for rent and sale across Dubai, the UAE, and KSA, our climate-controlled structures offer spans up to 60m for unforgettable exhibitions and VIP celebrations.",
    img: "/webp/pyramid-dome-tent.webp",
  },
  {
    id: "curve",
    title: "Curve Tent",
    subtitle: "Streamlined Curvature",
    desc: "Discover premium Curve Tents by Bait Al Nokhada, engineered with modular aluminum frames and durable arched roofs for events and industrial use. Available across Dubai, the UAE, and KSA, our clear-span structures deliver versatile, weather-resistant luxury tailored to any large-scale occasion.",
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
      className="relative w-full h-screen bg-[#070B14] text-white overflow-hidden border-t border-white/10 flex flex-col justify-center pt-0"
  >
      {/* خلفية جمالية متوهجة */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-20 w-[500px] h-[500px] bg-blue-950/20 rounded-full blur-[160px]" />
      </div>

      {/* حاوية الـ Scroll الأفقي */}
      <div
        ref={triggerRef}
        className="flex items-center h-[62vh] sm:h-[68vh] lg:h-[72vh] w-max px-6 sm:px-16 gap-6 sm:gap-8 z-10 will-change-transform"
      >
        {/* كارت المقدمة التعريفي الفخم */}
        <div className="w-[85vw] sm:w-[460px] h-full max-h-[500px] flex flex-col justify-between bg-[#0F172A]/60 border border-white/15 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
            <Compass className="w-4 h-4 animate-spin-slow" />
            ENGINEERED TENT PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-heading leading-tight tracking-tight">
            Explore Our Full Range <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              of Tents.
            </span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm font-light mt-4 leading-relaxed">
            Browse certified event, industrial, and luxury temporary structures built for the GCC climate. Scroll through real-world installations manufactured and supplied across UAE & Saudi Arabia.
          </p>
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase">13 Product Categories Available</span>
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

            {/* تجميع الصورة مع النصوص لحذف الفراغ الشاذ */}
            <div className="flex flex-col gap-5 z-10">
              {/* صورة المنتج */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-[#070B14]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/15 text-[11px] font-bold text-[#D4AF37] shadow-lg">
                  Model {String(index + 1).padStart(2, "0")} / 13
                </div>
              </div>

              {/* محتوى الكارت ملتصق تحت الصورة بمسافة طبيعية */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] block">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-6">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* زر الطلب يستقر في الأسفل */}
            <div className="pt-4 z-10 mt-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-white/5 hover:bg-[#D4AF37] text-white hover:text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 border border-white/10 group-hover:border-[#D4AF37] shadow-lg"
              >
                <span>Request Quote</span>
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