"use client";

import Image from 'next/image';

const solutions = [
  { name: "Event & Exhibition Tents", img: "/webp-small/Revalution-Tent.webp" },
  { name: "Sports Tents", img: "/webp-small/best-sports-tent-rental-services-Dubai.webp" },
  { name: "Warehouse Tents", img: "/webp-small/Storge-tent-in-UAE.webp" },
  { name: "Labour Rest Area", img: "/webp-small/accommodation-tent-KSA-Riyadh.webp" },
  { name: "Ramadan Tents", img: "/webp-small/large-ramadan-tents-UAE.webp" },
  { name: "Aircraft Hangar Tent", img: "/webp-small/Aircraft-Hanger-Tent-rental-EMIRATES-FLIGHT.webp" },
  { name: "Wedding Tent", img: "/webp-small/Wedding-tents-Dubai.webp" },
];

export default function SolutionsTicker() {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 bg-transparent backdrop-blur-[2px] border-y border-white/10 z-20">
      <div className="flex w-max animate-marquee">
        {[...solutions, ...solutions, ...solutions, ...solutions, ...solutions].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 px-6 shrink-0 cursor-pointer group"
          >
            <div className="relative w-40 h-24 sm:w-64 sm:h-36 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group-hover:border-[#D4AF37] transition-all duration-300">
              <Image 
                src={item.img} 
                alt={item.name} 
                fill
                sizes="(max-width: 640px) 160px, 256px"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
            </div>

            <span className="text-white text-xs sm:text-sm font-bold tracking-wider font-heading group-hover:text-[#D4AF37] transition-colors whitespace-nowrap text-center drop-shadow-md">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}