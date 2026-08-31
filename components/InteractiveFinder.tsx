"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// تعريف نوع البيانات لتجنب أي مشاكل مع TypeScript
interface Solution {
  id: string;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const solutionsList: Solution[] = [
  {
    id: "event",
    title: "Event Tents",
    subtitle: "Turnkey Event Structures",
    desc: "Engineered for high-traffic public events and celebrations with rapid deployment, weather resistance, and flexible configurations.",
    img: "/images/Revalution Tent 2.jpg",
  },
  {
    id: "exhibition",
    title: "Exhibition Tents",
    subtitle: "Exhibition & Trade Show Marquees",
    desc: "Professional-grade modular pavilions designed to showcase brands and host large-scale commercial exhibitions across the UAE.",
    img: "/images/Premium-Exhibiton-Tent.jpg",
  },
  {
    id: "conference",
    title: "Conference Tents",
    subtitle: "Corporate & Summit Setups",
    desc: "Acoustically sound and climate-controlled corporate environments tailored for professional conferences and high-level meetings.",
    img: "/images/Buy & Rent Arch Tents.jpg",
  },
  {
    id: "sports",
    title: "Sports Tents",
    subtitle: "High-Span Sports Complexes",
    desc: "Durable high-span structures built to KSA and UAE standards, providing covered spaces for athletic events and indoor training.",
    img: "/images/Polygon-Tent-for-Sports-in-KSA.jpg",
  },
  {
    id: "storage",
    title: "Storage Tents",
    subtitle: "Commercial & Industrial Storage",
    desc: "Heavy-duty aluminum framed storage tents ensuring maximum vertical clearance and secure warehousing solutions.",
    img: "/images/Storage Tent.jpg",
  },
  {
    id: "accommodation",
    title: "Accommodation Tents",
    subtitle: "Camps & Living Quarters",
    desc: "Comfortable, insulated, and weatherproof temporary or permanent housing structures designed for safe residential use.",
    img: "/images/Accommodation Tents in KSA.jpg",
  },
  {
    id: "labour",
    title: "Labour Rest Area",
    subtitle: "Workforce Rest & Shade Zones",
    desc: "Optimized climate-controlled rest areas and shaded facilities designed to ensure workforce comfort and safety compliance.",
    img: "/images/Storage Tents For Sale.jpg",
  },
  {
    id: "ramadan",
    title: "Ramadan Tents",
    subtitle: "Iftar & Cultural Gatherings",
    desc: "Spacious traditional and modern Arabic styled marquees crafted specifically for seasonal Iftar and community celebrations.",
    img: "/images/Ramadan-Tents-in-KSA.jpg",
  },
  {
    id: "hotels",
    title: "Hotels & Resorts",
    subtitle: "Hospitality Expansion Structures",
    desc: "Luxurious architectural extensions and outdoor lounging structures for premium hotels and world-class resorts.",
    img: "/images/Luxury-Tents-for-Events.jpg",
  },
  {
    id: "restaurants",
    title: "Restaurants",
    subtitle: "Outdoor & Dome Dining",
    desc: "Stunning architectural domes and shaded structures that expand restaurant seating capacities with breathtaking outdoor ambiance.",
    img: "/images/Pyramid-Dome-Tents-in-Saudi-Arabia.jpg",
  },
  {
    id: "royal",
    title: "Premium / Royal Tent",
    subtitle: "Elite VIP Architecture",
    desc: "Bespoke royal marquees featuring high-end custom interiors, luxury flooring, and majestic architectural finishes.",
    img: "/images/Tent-Rental-in-Riyadh.jpg",
  },
  {
    id: "hangar",
    title: "Aircraft Hangar Tent",
    subtitle: "Heavy-Duty Aviation Shelters",
    desc: "Massive engineered clear-span structures designed for aviation maintenance, aircraft storage, and specialized industrial use.",
    img: "/images/VIP-Event-Tents.jpg",
  },
  {
    id: "wedding",
    title: "Wedding Tent",
    subtitle: "Bespoke Wedding Marquees",
    desc: "Romantic, elegant, and grand celebration spaces customized with luxury lighting, draping, and fully climate-controlled interiors.",
    img: "/images/Wedding-Tents-Tent-Manufacturer.jpg",
  },
];

export default function InteractiveFinder() {
  const [activeItem, setActiveItem] = useState<Solution>(solutionsList[0]);

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden border-t border-white/10">
      
      {/* عنوان القسم */}
      <div className="max-w-3xl mb-12">
        <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
          Complete Solution Directory
        </span>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-heading leading-tight">
          Explore All Our <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
            Turnkey Solutions.
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
          Select any solution from the list below to instantly preview its engineering application and specifications.
        </p>
      </div>

      {/* شريط الأزرار التفاعلية لكل الحلول */}
      <div className="flex flex-wrap gap-2.5 mb-12 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
        {solutionsList.map((item) => {
          const isActive = activeItem.id === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                isActive
                  ? "bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105"
                  : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
              }`}
            >
              {isActive && <Sparkles className="w-3.5 h-3.5" />}
              {item.title}
            </button>
          );
        })}
      </div>

      {/* منطقة العرض التفاعلي */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#0F172A]/60 border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
        
        {/* تفاصيل الحل */}
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
                <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1">
                  {activeItem.title}
                </h3>
              </div>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                {activeItem.desc}
              </p>

              <div className="flex items-center gap-3 text-sm text-slate-200 bg-black/40 p-4 rounded-xl border border-white/10">
                <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
                  ✓
                </div>
                <span>In-house manufacturing, zero subcontracting, and 100% weather protection.</span>
              </div>

              <div className="pt-2">
                <a 
                  href="#contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-white/20 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-xl group"
                >
                  <span>Request Quote For This Solution</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* الصورة التفاعلية */}
        <div className="lg:col-span-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative w-full h-[320px] sm:h-[400px] rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black"
            >
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[#D4AF37]">
                  Bait Al Nokhada Standard
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-white">
                  Turnkey Execution
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

    </section>
  );
}