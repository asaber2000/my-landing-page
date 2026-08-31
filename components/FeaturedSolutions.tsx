"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Event & Exhibition Tents",
    category: "ENGINEERING • ARCHITECTURE",
    img: "/images/Premium-Exhibiton-Tent.jpg",
    size: "col-span-1 md:col-span-2 h-[400px] sm:h-[500px]", // كارت عريض عملاق في الأول
  },
  {
    title: "Royal & Luxury Marquees",
    category: "HOSPITALITY • VIP",
    img: "/images/Luxury-Tents-for-Events.jpg",
    size: "col-span-1 h-[350px] sm:h-[420px]",
  },
  {
    title: "Conference & Arch Tents",
    category: "STRUCTURES • COMMERCIAL",
    img: "/images/Buy & Rent Arch Tents.jpg",
    size: "col-span-1 h-[350px] sm:h-[420px]",
  },
  {
    title: "Sports & Polygon Tents",
    category: "HIGH-SPAN • STANDARDS",
    img: "/images/Polygon-Tent-for-Sports-in-KSA.jpg",
    size: "col-span-1 h-[350px] sm:h-[420px]",
  },
  {
    title: "Ramadan & Heritage Tents",
    category: "CULTURAL • DESIGN",
    img: "/images/Ramadan-Tents-in-KSA.jpg",
    size: "col-span-1 h-[350px] sm:h-[420px]",
  },
  {
    title: "Aircraft Hangar Structures",
    category: "INDUSTRIAL • HEAVY-DUTY",
    img: "/images/VIP-Event-Tents.jpg",
    size: "col-span-1 md:col-span-2 h-[400px] sm:h-[500px]", // كارت عريض عملاق في النهاية
  },
];

export default function FeaturedSolutions() {
  return (
    <section className="relative w-full py-28 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden">
      
      {/* تايتل القسم بنفس الروح العالمية */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Portfolio Showcase
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-heading">
            Featured Work.
          </h2>
        </div>
        <p className="text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
          A selection of immersive digital experiences and engineered structures created for ambitious brands.
        </p>
      </div>

      {/* شبكة الكروت المتدرجة (Lusion Style Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group cursor-pointer flex flex-col gap-4 ${project.size}`}
          >
            {/* إطار الصورة الفخم */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/15 shadow-2xl">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-30 transition-opacity duration-500" />
              
              {/* أيقونة السهم التفاعلية */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-[#D4AF37] text-lg font-bold">↗</span>
              </div>
            </div>

            {/* تفاصيل المشروع تحت الصورة */}
            <div className="flex flex-col gap-1 px-1">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#D4AF37] uppercase">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#D4AF37] transition-colors duration-300">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}