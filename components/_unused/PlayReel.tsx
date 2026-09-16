"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PlayReel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const el = videoWrapperRef.current;
    
    gsap.fromTo(
      el,
      { width: "70%", height: "50vh", borderRadius: "2.5rem" },
      {
        width: "100%",
        height: "85vh",
        borderRadius: "0rem",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      }
    );
  }, []);

  // دالة تشغيل الفيديو بشاشة كاملة وصوت عند الضغط
  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false; // تشغيل الصوت
      videoRef.current.play();
      setIsPlaying(true);

      // فتح الفيديو بشاشة كاملة (Fullscreen)
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#070B14] py-16 px-4 sm:px-8 flex flex-col items-center justify-center z-20 overflow-hidden"
    >
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6 px-4">
        <div>
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-2">
            Immersive Showcase
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-heading">
            Play Reel Experience.
          </h2>
        </div>
        <p className="text-slate-400 text-sm max-w-md font-light">
          Engineered to withstand extreme conditions with flawless precision and stunning visual execution.
        </p>
      </div>

      {/* حاوية الفيديو */}
      <div 
        ref={videoWrapperRef}
        onClick={handlePlayVideo}
        className="relative w-[70%] h-[50vh] overflow-hidden shadow-2xl border border-white/20 group cursor-pointer bg-black mx-auto flex items-center justify-center"
      >
        <span className="absolute top-4 left-4 text-white/60 text-lg font-light z-30 select-none">+</span>
        <span className="absolute top-4 right-4 text-white/60 text-lg font-light z-30 select-none">+</span>
        <span className="absolute bottom-4 left-4 text-white/60 text-lg font-light z-30 select-none">+</span>
        <span className="absolute bottom-4 right-4 text-white/60 text-lg font-light z-30 select-none">+</span>

        {/* عنصر الفيديو مع ربطه بالـ ref */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={isPlaying} // تظهر أزرار التحكم عند التشغيل الفعلي
          className="w-full h-full object-contain bg-black"
        >
          <source src="/Final Comp 01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 pointer-events-none" />

        {/* زر التشغيل الدائري المركزي */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-black/50 backdrop-blur-xl border border-white/30 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37] transition-all duration-500 shadow-2xl">
            <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
          </div>
        </div>

        {/* زر "PLAY REEL" السفلي الأيسر الفعال */}
        <div className="absolute bottom-6 left-6 z-30">
          <button 
            onClick={(e) => {
              e.stopPropagation(); // منع تداخل الكليك
              handlePlayVideo();
            }}
            className="bg-black/80 hover:bg-[#D4AF37] hover:text-black text-white backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-xl"
          >
            PLAY REEL
          </button>
        </div>

        <div className="absolute bottom-6 right-6 pointer-events-none">
          <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15 text-[#D4AF37] text-xs font-bold tracking-widest uppercase">
            2026 EDITION
          </span>
        </div>
      </div>
    </section>
  );
}