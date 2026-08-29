"use client";

import { motion } from "framer-motion";

const solutions = [
  { name: "Event Tents", img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=400&auto=format&fit=crop&q=80" },
  { name: "Exhibition Tents", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&auto=format&fit=crop&q=80" },
  { name: "Conference Tents", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&auto=format&fit=crop&q=80" },
  { name: "Sports Tents", img: "https://images.unsplash.com/photo-1517649763962-0c623266cfd0?w=400&auto=format&fit=crop&q=80" },
  { name: "Storage Tents", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&auto=format&fit=crop&q=80" },
  { name: "Accommodation Tents", img: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&auto=format&fit=crop&q=80" },
  { name: "Labour Rest Area", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&auto=format&fit=crop&q=80" },
  { name: "Ramadan Tents", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&auto=format&fit=crop&q=80" },
  { name: "Hotels & Resorts", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&auto=format&fit=crop&q=80" },
  { name: "Restaurants", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&auto=format&fit=crop&q=80" },
  { name: "Premium / Royal Tent", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&auto=format&fit=crop&q=80" },
  { name: "Aircraft Hangar Tent", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&auto=format&fit=crop&q=80" },
  { name: "Wedding Tent", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&auto=format&fit=crop&q=80" },
];

export default function SolutionsTicker() {
  return (
    <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 bg-black/60 backdrop-blur-2xl border-y border-white/20 z-20 shadow-2xl">
      <div className="flex w-max">
        {/* تكرار العناصر 4 مرات لملء عرض الشاشة بالكامل وبدون أي فراغات */}
        {[...solutions, ...solutions, ...solutions, ...solutions].map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="flex flex-col items-center gap-2 px-5 shrink-0 cursor-pointer group"
          >
            <div className="relative w-40 h-24 sm:w-48 sm:h-28 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group-hover:border-[#D4AF37] transition-all duration-300">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <span className="text-white text-xs sm:text-sm font-bold tracking-wider font-heading group-hover:text-[#D4AF37] transition-colors whitespace-nowrap text-center">
              {item.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}