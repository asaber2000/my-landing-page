"use client";

import { PhoneCall, Mail, CheckCircle2, ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";
import Image from "next/image";

export default function SalesCentersHero() {
    return (
        <section className="relative w-full h-[100dvh] flex flex-col justify-between items-center px-4 sm:px-8 lg:px-16 pt-3 pb-2.5 bg-white text-slate-900 overflow-hidden">

            {/* 1. الهيدر العلوي */}
            <header className="relative z-10 w-full flex items-center justify-between max-w-6xl mx-auto shrink-0 pb-1">
                <div className="relative w-48 sm:w-64 h-12 sm:h-18">
                    <Image
                        src="/Brand identity-2_LS.png"
                        alt="Bait Al Nokhada Tents Factory"
                        className="w-full h-full object-contain object-left"
                        width={260}
                        height={56}
                        priority
                    />
                </div>

                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-700 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    SALES CENTERS Solutions • UAE & KSA
                </div>
            </header>

            {/* 2. المحتوى المركزي - مسافات معتدلة ومتنفسة */}
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-3 mt-1 shrink-0">

                <h1 className="text-2xl sm:text-3xl lg:text-[42px] font-black text-slate-950 tracking-tight leading-tight">
                    Customized Sales Center Tents <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B38728] via-[#E1B84C] to-[#9E731B] drop-shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
                        For UAE Master Developers
                    </span>
                </h1>

                <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed max-w-xl mx-auto px-2">
                    Engineered by premier tent manufacturers in UAE, our luxury sales center tents for sale feature full climate control, glass facades, and VIP interiors tailored for off-plan property launches.
                </p>

                {/* نقاط القوة وسوابق الأعمال - سطر واحد متناسق */}
                <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-x-3.5 gap-y-1.5 text-xs text-slate-700 pt-1">
                    <span className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                        Fast-Track Installation
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>

                    <span className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                        Column-Free Modular Spans
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>

                    <span className="flex items-center gap-1.5 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                        Turnkey HVAC & Fit-Out
                    </span>
                    <span className="text-slate-300 hidden sm:inline">•</span>

                    <span className="font-bold text-[#8C6D2B]">
                        Engineered for UAE Developers
                    </span>
                </div>

                {/* أزرار التحويل المباشرة */}
                <div className="pt-1 flex flex-wrap items-center justify-center gap-2.5">
                    <a
                        href="https://wa.me/97143444091?text=Hello%20Bait%20Al%20Nokhada,%20we%20need%20a%20turnkey%20Sales%20Center%20solution."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            track("WhatsApp Hero Click", { location: "Sales Center White Landing" });
                        }}
                        className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs transition-all duration-300 shadow-md hover:-translate-y-0.5"
                    >
                        <svg className="w-3.5 h-3.5 fill-[#25D366] shrink-0" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Get Instant Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-0.5" />
                    </a>

                    <a
                        href="tel:+971558850631"
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs transition-all shadow-xs hover:border-[#8C6D2B]"
                    >
                        <PhoneCall className="w-3.5 h-3.5 text-[#8C6D2B] shrink-0" />
                        <span>Call Engineer</span>
                    </a>

                    <a
                        href="mailto:dm@baitalnokhada.com?subject=Sales%20Center%20RFP"
                        className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold text-xs transition-all shadow-xs hover:border-slate-400"
                    >
                        <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                        <span>Email RFP</span>
                    </a>
                </div>
            </div>

            {/* 3. شاشة العرض السينمائية - مقلصة الارتفاع درجتين مع هوامش مريحة */}
            <div className="relative z-10 max-w-4xl mx-auto w-full max-h-[46vh] aspect-[16/8.8] my-3 shrink-0">
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-xl w-full h-full group">

                    <video
                        src="https://d3g07f5oxrfvni.cloudfront.net/media-videos/Projects-Videos/Amaal.webm"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        suppressHydrationWarning
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                    />

                    <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/75 backdrop-blur-md text-white border border-white/20 shadow-md">
                            Amaal Sales Center • Manufactured by Bait Al Nokhada
                        </span>
                    </div>

                </div>
            </div>

            {/* 4. الفوتر السفلي المتناسق */}
            <footer className="relative z-10 w-full pt-1 flex flex-wrap items-center justify-between text-[11px] text-slate-500 max-w-6xl mx-auto shrink-0">
                <div>Trusted Manufacturing Partner for Leading UAE Real Estate Developers</div>
                <div className="font-semibold text-slate-700">Dubai • Abu Dhabi • Riyadh</div>
            </footer>

        </section>
    );
}