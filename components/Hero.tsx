"use client";

import SolutionsTicker from "@/components/SolutionsTicker";
import { PhoneCall, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {

  return (
    <section className="relative w-full min-h-[100dvh] lg:h-screen lg:min-h-[700px] flex flex-col justify-between px-4 sm:px-12 lg:px-20 py-3 sm:py-4 overflow-hidden bg-[#070B14]">

      {/* Background Video Container */}
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
  {/* طبقة التعتيم لضمان وضوح النص */}
  <div className="absolute inset-0 bg-[#070B14]/65 z-10" />
  
  <video 
    autoPlay 
    muted 
    loop 
    playsInline
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-full max-w-none object-cover"
    style={{ 
      filter: "brightness(0.85)"
    }}
  >
    {/* فيديو الموبايل المخصص للشاشات الأقل من 768px بدون زووم إجباري */}
        <source
          src="/Web Vidoe.mp4"
          type="video/mp4"
          media="(max-width: 767px)"
        />

        {/* فيديو الديسكتوب العادي للشاشات من 768px فأكبر */}
        <source
          src="/Test.mp4"
          type="video/mp4"
          media="(min-width: 768px)"
        />
    Your browser does not support the video tag.
  </video>
</div>

      {/* الهيدر العلوي */}
      <header className="relative z-20 w-full flex items-center justify-center pt-1 sm:pt-2">
        <div className="relative w-36 sm:w-48 lg:w-[420px] h-8 sm:h-10 lg:h-12">
          <Image
            src="/logo w.png"
            alt="Bait Al Nokhada Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </header>

      {/* محتوى الهيرو المركزي */}
      <div className="relative z-20 max-w-3xl mx-auto text-center space-y-2 sm:space-y-3 my-auto py-2">
      
        
        {/* العنوان الرئيسي: يبدأ من text-2xl (24px) للموبايل ويصل لـ 5xl للديسكتوب */}
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
          Your Premier Tent Supplier <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
            in UAE &amp; KSA.
          </span>
        </h1>
        
        {/* الوصف: text-xs على الموبايل لتوفير المساحة */}
        <p className="text-xs sm:text-sm lg:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-md px-2">
          Specialized in tent manufacturing and rental across UAE & KSA. Delivering certified event tents, luxury wedding tents, and industrial labor tents built for the Gulf climate.
        </p>
        
        {/* نقاط الثقة: مصفوفة بسلاسة وبخط 11px للموبايل */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] sm:text-sm text-zinc-300 font-medium pt-1">
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> 30+ Years Experience
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> Certified German PVC
          </span>
          <span className="text-zinc-600 hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            <span className="text-[#D4AF37]">✓</span> In-House Manufacturing
          </span>
        </div>

        {/* الأزرار: شبكة سطرين منظمة على الموبايل وصف كامل على الشاشات الأكبر */}
        {/* الأزرار: تصميم متناسق ومحاذاة في المنتصف على جميع الشاشات */}
      <div className="pt-3 flex flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto z-20">
        
        {/* زر الواتساب مع أيقونة واتساب الرسمية الدقيقة SVG */}
        <a
          href="https://wa.me/971543474869"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-emerald-950/40 border border-white/15 hover:border-emerald-500/50 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:scale-105"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 fill-[#25D366] shrink-0"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>GET A QUOTE ON WhatsApp</span>
        </a>

        {/* زر الاتصال Call Now */}
        <a
          href="tel:+971543474869"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-amber-950/40 border border-white/15 hover:border-[#D4AF37]/50 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:scale-105"
        >
          <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] shrink-0" />
          <span>Call Now</span>
        </a>

        {/* زر الإيميل Email Us المتناسق في المنتصف */}
        <a
          href="mailto:marketing01@baitalnokhada.com?subject=Inquiry%20from%20Landing%20Page"
          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black/40 hover:bg-sky-950/40 border border-white/15 hover:border-sky-400/50 text-white font-semibold text-xs sm:text-sm transition-all duration-300 shadow-lg hover:scale-105"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0" />
          <span>Email Us</span>
        </a>

      </div>
      </div>

      {/* الشريط المتحرك للحلول */}
      <div className="relative z-20 w-full -mx-4 sm:-mx-12 lg:-mx-20 px-4 sm:px-12 lg:px-20 pb-2">
        <SolutionsTicker />
      </div>

    </section>
  );
}