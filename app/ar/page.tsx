"use client";

import { CheckCircle2, ShieldCheck, Zap, Headphones } from "lucide-react";
import { useState } from "react";

export default function ArabicLandingPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#070B14] text-white relative overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#D4AF37]/8 blur-[200px] rounded-full pointer-events-none" />

      {/* Top Bar / Simple Header */}
      <header className="w-full px-12 sm:px-16 lg:px-32 py-8 flex items-center justify-between border-b border-white/10 relative z-10 backdrop-blur-md">
        <div className="text-xl font-black tracking-wider text-white font-heading">
          بيت النوخذة <span className="text-[#D4AF37] text-xs block tracking-[0.3em]">للخيام والهياكل النسيجية</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all font-body"
          >
            English
          </a>
          <a
            href="#inquiry"
            className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#070B14] font-bold text-xs uppercase tracking-widest hover:bg-[#F3E5AB] transition-all shadow-xl font-body"
          >
            طلب استشارة
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full px-12 sm:px-16 lg:px-32 py-20 lg:py-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-[#C5A880]/10 text-[#D4AF37] border border-[#C5A880]/20 shadow-inner">
              <Zap className="w-3.5 h-3.5" /> حلول متكاملة للمشاريع الكبرى
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight font-heading">
              هياكل نسيجية متطورة <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                وقاعات الفعاليات الكبرى
              </span>
            </h1>
            <p className="text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              مصممة خصيصاً لتحمل أقسى الظروف المناخية في دولة الإمارات. نقدم أحدث الخيام ذات الامتداد الكبير، مجالس الضيافة الملكية، والحلول السريعة للقطاعات الحكومية والصناعية.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> شهادة الجودة الألمانية DIN
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> تركيب سريع خلال 48-72 ساعة
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" /> أنظمة تكييف متكاملة
              </div>
            </div>
          </div>

          {/* Inquiry Form Box */}
          <div id="inquiry" className="lg:col-span-5 bg-[#0D1527] border border-white/15 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative text-right">
            <div className="absolute -top-4 left-8 bg-[#D4AF37] text-[#070B14] text-xs font-black uppercase px-4 py-1 rounded-full tracking-wider shadow-lg">
              حجز سريع
            </div>

            <h3 className="text-2xl font-black mb-2 font-heading">احصل على استشارة فورية</h3>
            <p className="text-xs text-slate-400 mb-6">املأ النموذج أدناه وسيتواصل معك فريق الهندسة خلال ساعتين.</p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold">تم استلام طلبك بنجاح!</h4>
                <p className="text-sm text-slate-300">شكراً لك. سيتواصل معك أحد مستشاري المشاريع قريباً.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">الاسم الكامل</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="ادخل اسمك" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors text-right"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">الشركه / الجهة</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="اسم الشركة" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors text-right"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">رقم الهاتف</label>
                  <input 
                    required 
                    type="tel" 
                    placeholder="+971 XX XXX XXXX" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors text-left"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1">الحل المطلوب</label>
                  <select className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#D4AF37] focus:outline-none transition-colors">
                    <option>خيم المعارض الكبرى</option>
                    <option>الضيافة الفخمة والمجالس الملكية</option>
                    <option>المستودعات والمظلات الصناعية</option>
                    <option>هياكل نسيجية مخصصة</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C5A880] text-[#070B14] font-black uppercase tracking-widest text-xs hover:opacity-95 transition-opacity shadow-xl cursor-pointer"
                >
                  إرسال الاستفسار الآن
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full px-12 sm:px-16 lg:px-32 py-20 border-t border-white/10 bg-[#0B1120]/50 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">لماذا تختار بيت النوخذة</span>
          <h2 className="text-3xl sm:text-4xl font-black font-heading">مصممة لأعلى معايير الجودة والمتانة</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">معايير سلامة معتمدة</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              مبنية لتتطابق مع الإرشادات العالمية الصارمة، مع معدلات تحمل عالية للرياح وأقمشة مقاومة للحريق.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">سرعة التنفيذ والتركيب</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              يقدم مهندسونا المحترفون أروع القاعات والهياكل الجاهزة للعمل في قياسي ودون المساومة على الجودة.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
              <Headphones className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading">دعم متكامل ومستمر</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              من أنظمة التكييف والتحكم بالمناخ وحتى التشطيبات الداخلية والصيانة، نتولى دورة المشروع بالكامل.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-12 sm:px-16 lg:px-32 py-10 border-t border-white/10 text-center text-xs text-slate-500 relative z-10">
        © 2026 بيت النوخذة للخيام والهياكل النسيجية. كافة الحقوق محفوظة.
      </footer>

    </main>
  );
}