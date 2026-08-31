"use client";

const solutions = [
  { name: "Event Tents", img: "/images/Revalution Tent 2.jpg" },
  { name: "Exhibition Tents", img: "/images/Premium-Exhibiton-Tent.jpg" },
  { name: "Conference Tents", img: "/images/Buy & Rent Arch Tents.jpg" },
  { name: "Sports Tents", img: "/images/Polygon-Tent-for-Sports-in-KSA.jpg" },
  { name: "Storage Tents", img: "/images/Storage Tent.jpg" },
  { name: "Accommodation Tents", img: "/images/Accommodation Tents in KSA.jpg" },
  { name: "Labour Rest Area", img: "/images/Storage Tents For Sale.jpg" },
  { name: "Ramadan Tents", img: "/images/Ramadan-Tents-in-KSA.jpg" },
  { name: "Hotels & Resorts", img: "/images/Luxury-Tents-for-Events.jpg" },
  { name: "Restaurants", img: "/images/Pyramid-Dome-Tents-in-Saudi-Arabia.jpg" },
  { name: "Premium / Royal Tent", img: "/images/Tent-Rental-in-Riyadh.jpg" },
  { name: "Aircraft Hangar Tent", img: "/images/VIP-Event-Tents.jpg" },
  { name: "Wedding Tent", img: "/images/Wedding-Tents-Tent-Manufacturer.jpg" },
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
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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