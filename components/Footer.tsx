import Image from "next/image";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const socials = [
    { 
      name: "WhatsApp", 
      href: "https://wa.me/971558850631", 
      icon: <MessageCircle className="w-4 h-4" /> 
    },
    { 
      name: "LinkedIn", 
      href: "#", 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6Z"/>
        </svg>
      ) 
    },
    { 
      name: "Instagram", 
      href: "#", 
      icon: (
        <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
        </svg>
      ) 
    },
    { 
      name: "X", 
      href: "#", 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ) 
    },
    { 
      name: "Facebook", 
      href: "#", 
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
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
              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#D4AF37] text-slate-400 hover:text-black flex items-center justify-center transition-all duration-300 border border-white/5"
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}