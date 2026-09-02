  "use client";

  import Image from 'next/image';
  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Sparkles, ArrowRight } from "lucide-react";

  interface ProductItem {
    id: string;
    title: string;
    subtitle: string;
    desc: string;
    img: string;
  }

  // قائمة المنتجات الـ 13 المطلوبة للموقع الحالي
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
    const [activeItem, setActiveItem] = useState<ProductItem>(productsList[0]);

    return (
      <section className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#070B14] text-white z-20 overflow-hidden border-t border-white/10">
        
        {/* عنوان القسم - متوافق مع عرض الشاشة بالكامل */}
        <div className="w-full max-w-none mb-12">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Complete Product Directory
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-heading leading-tight">
            Explore All Our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Products & Structures.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Select any product from the list below to preview its engineering application and specifications.
          </p>
        </div>

        {/* شريط الأزرار التفاعلية لكل المنتجات */}
        <div className="flex flex-wrap gap-2.5 mb-12 w-full">
          {productsList.map((item) => {
            const isActive = activeItem.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105"
                    : "bg-white/5 text-white/80 hover:bg-white/10 border border-white/10"
                }`}
              >
                {isActive && <Sparkles className="w-3.5 h-3.5" />}
                {item.title}
              </button>
            );
          })}
        </div>

        {/* منطقة العرض التفاعلي - ممتدة لعرض الشاشة بالكامل بدون هوامش جانبية ضائعة */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0F172A]/70 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* تفاصيل المنتج */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {activeItem.subtitle}
                  </span>
                  <h3 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
                    {activeItem.title}
                  </h3>
                </div>

                <p className="text-slate-200 text-base sm:text-lg font-light leading-relaxed">
                  {activeItem.desc}
                </p>

                <div className="flex items-center gap-3 text-sm text-slate-200 bg-black/40 p-4 rounded-xl border border-white/10">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>In-house manufacturing, zero subcontracting, and 100% weather protection across UAE & GCC.</span>
                </div>

                <div className="pt-2">
                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c29d30] text-black font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl group"
                  >
                    <span>Request Quote For This Product</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


{/* الصورة التفاعلية - كاملة بدون زوم وبدون فراغات */}
<div className="lg:col-span-6 w-full">
  <AnimatePresence mode="wait">
    <motion.div
      key={activeItem.id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="relative w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black flex items-center justify-center p-4"
    >
      <Image
        src={activeItem.img}
        alt={activeItem.title}
        width={800}
        height={500}
        sizes="(max-width: 768px) 100vw, 1200px"
        className="w-full h-auto rounded-xl object-contain"
      />
    </motion.div>
  </AnimatePresence>
</div>

        </div>

      </section>
    );
  }