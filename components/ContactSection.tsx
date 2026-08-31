"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // هنا يمكنك لاحقاً ربط Formspree أو API لإرسال البيانات الفعلي
  };

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* الجانب الأيسر: العنوان الضخم ومعلومات التواصل */}
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-heading leading-tight">
              LET'S TALK ABOUT <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
                YOUR PROJECT.
              </span>
            </h2>
          </div>

          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed max-w-lg">
            Have a custom architectural requirement or need turnkey tent solutions in the UAE? Reach out to our engineering experts today.
          </p>

          {/* تفاصيل الاتصال السريعة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</h4>
                <p className="text-sm font-medium text-white mt-1">Abu Dhabi & Dubai, UAE</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#D4AF37] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Phone Support</h4>
                <p className="text-sm font-medium text-white mt-1">+971 2 555 5555</p>
              </div>
            </div>
          </div>
        </div>

        {/* الجانب الأيمن: الفورم المبسطة الفخمة (بنفس ستايل الصورة) */}
        <div className="relative p-8 sm:p-10 rounded-3xl bg-[#0F172A]/80 border border-white/15 backdrop-blur-2xl shadow-2xl">
          <h3 className="text-2xl font-bold font-heading mb-2 text-white">
            Fill in the form below
          </h3>
          <p className="text-xs text-slate-400 mb-8">
            We will get back to you within 24 hours.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <CheckCircle2 className="w-16 h-16 text-[#D4AF37] animate-bounce" />
              <h4 className="text-xl font-bold text-white font-heading">Thank You!</h4>
              <p className="text-slate-400 text-sm max-w-xs">
                Your request has been sent successfully. Our team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* الاسم */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">Full Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Ahmed Saber" 
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                />
              </div>

              {/* الهاتف والبريد الإلكتروني في صفين أو عمودين */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">Phone Number *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+971 50 000 0000" 
                    className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@company.com" 
                    className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  />
                </div>
              </div>

              {/* الرسالة / المشروع */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold tracking-wider text-slate-300 uppercase">Your Message / Project Details *</label>
                <textarea 
                  required
                  rows={4}
                  placeholder="Tell us about your tent or structure requirements..." 
                  className="w-full bg-black/40 border border-white/20 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                />
              </div>

              {/* زر الإرسال */}
              <button 
                type="submit"
                className="mt-4 w-full py-4 rounded-xl bg-[#D4AF37] hover:bg-[#c29d30] text-black font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 group cursor-pointer"
              >
                <span>Send My Request</span>
                <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}