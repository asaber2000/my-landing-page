import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { 
      name: "WhatsApp", 
      href: "https://wa.me/971558850631", 
      hoverBorder: "hover:border-[#25D366]/50",
      icon: (
        <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      ) 
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      hoverBorder: "hover:border-[#0A66C2]/50",
      icon: (
        <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z"/>
        </svg>
      ) 
    },
    { 
      name: "Instagram", 
      href: "#", 
      hoverBorder: "hover:border-[#E4405F]/50",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24">
          <defs>
            <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fdf497" />
              <stop offset="5%" stopColor="#fdf497" />
              <stop offset="45%" stopColor="#fd5949" />
              <stop offset="60%" stopColor="#d6249f" />
              <stop offset="90%" stopColor="#285AEB" />
            </linearGradient>
          </defs>
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="url(#ig-gradient)" strokeWidth="2"/>
          <circle cx="17.5" cy="6.5" r="1" fill="url(#ig-gradient)"/>
        </svg>
      ) 
    },
    { 
      name: "X", 
      href: "#", 
      hoverBorder: "hover:border-white/50",
      icon: (
        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ) 
    },
    { 
      name: "Facebook", 
      href: "#", 
      hoverBorder: "hover:border-[#1877F2]/50",
      icon: (
        <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ) 
    },
  ];

  return (
    <footer className="w-full bg-[#05080E] border-t border-white/10 py-5 px-6 sm:px-12 lg:px-20 z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-4">
        
        {/* 1. حقوق الملكية على اليسار */}
        <p className="text-xs text-slate-400 tracking-wide order-3 md:order-1 text-center md:text-left">
          © 2026 Bait Al Nokhada. All Rights Reserved.
        </p>

        {/* 2. اللوجو في المنتصف تماماً */}
        <div className="order-1 md:order-2 flex justify-center items-center">
  <a 
    href="/" 
    className="relative block w-32 sm:w-36 h-7 sm:h-8 opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer"
    aria-label="Home"
  >
    <Image
      src="/logo w.png"
      alt="Bait Al Nokhada Logo"
      fill
      className="object-contain"
    />
  </a>
</div>

        {/* 3. أيقونات السوشيال ميديا على اليمين */}
        <div className="order-2 md:order-3 flex items-center justify-center md:justify-end gap-2.5">
      {socials.map((item, idx) => (
        <a
          key={idx}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.name}
          className={`w-9 h-9 rounded-xl bg-white/5 ${item.hoverBorder} flex items-center justify-center transition-all duration-300 border border-white/10 hover:bg-white/10 shadow-sm hover:scale-110`}
        >
          {item.icon}
        </a>
      ))}
    </div>

      </div>
    </footer>
  );
}