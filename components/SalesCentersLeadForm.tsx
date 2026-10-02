"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { track } from "@vercel/analytics";

export default function SalesCentersLeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    track("Sales Center Inquiry Submit", {
      company: formData.company,
      email: formData.email,
    });

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source: "Sales Centers White Minimal Landing",
        }),
      });
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* 1. رأس القسم */}
        <div className="text-center space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#8C6D2B]">
            FAST RESPONSE • UAE SALES CENTERS & TENTS
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-heading">
            Request a Quote & Site Layout
          </h2>
          <p className="text-sm text-slate-500 font-normal max-w-lg mx-auto leading-relaxed">
            Get instant pricing, engineering specs, and layout options tailored for your property launch.
          </p>
        </div>

        {/* 2. بطاقة الفورم البيضاء الفاخرة */}
        <div className="relative bg-[#FCFCFB] p-8 sm:p-12 rounded-3xl border border-slate-200/70 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.05)]">
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-50 text-[#8C6D2B] rounded-full flex items-center justify-center mx-auto border border-amber-200/50">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-950 font-heading">Inquiry Received</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Our architectural engineering team is reviewing your project requirements and will reach out shortly.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/97143444091"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#8C6D2B] hover:underline uppercase tracking-wider"
                >
                  Direct WhatsApp Follow-up &rarr;
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">

                {/* 1. الاسم */}
                <div className="space-y-1.5 border-b border-slate-200 focus-within:border-[#8C6D2B] transition-colors pb-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Representative Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none font-medium"
                  />
                </div>

                {/* 2. جهة التطوير العقاري */}
                <div className="space-y-1.5 border-b border-slate-200 focus-within:border-[#8C6D2B] transition-colors pb-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Developer / Entity
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Company or Group"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none font-medium"
                  />
                </div>

                {/* 3. رقم الاتصال والواتساب */}
                <div className="space-y-1.5 border-b border-slate-200 focus-within:border-[#8C6D2B] transition-colors pb-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+971 50 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none font-medium"
                  />
                </div>

                {/* 4. البريد الإلكتروني الرسمي (بدل القائمة المنسدلة) */}
                <div className="space-y-1.5 border-b border-slate-200 focus-within:border-[#8C6D2B] transition-colors pb-1">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@developer.ae"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent py-1.5 text-sm text-slate-900 placeholder:text-slate-300 focus:outline-none font-medium"
                  />
                </div>

              </div>

              {/* زر الإرسال المدمج في الأسفل */}
              <div className="pt-4 flex justify-center items-center border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 mx-auto"
                >
                  <span>Get Project Quote & Layout</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A880]" />
                </button>
              </div>

            </form>
          )}
        </div>

        {/* 3. كروت التواصل المباشر والفروع الإقليمية (بالثيم الأبيض الفاخر) */}
        <div className="space-y-6 pt-4">

          {/* قنوات الاتصال المباشرة */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Phone Card */}
            <a
              href="tel:+971558850631"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCFCFB] border border-slate-200/80 hover:border-[#8C6D2B]/50 transition-all shadow-xs group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50/80 border border-amber-200/50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-[#8C6D2B]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Phone Inquiries</p>
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#8C6D2B] transition-colors">
                  +971 55 885 0631
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:dm@baitalnokhada.com?subject=Tender%20%26%20Sales%20Inquiry"
              className="flex items-center gap-4 p-4 rounded-2xl bg-[#FCFCFB] border border-slate-200/80 hover:border-[#8C6D2B]/50 transition-all shadow-xs group"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-50/80 border border-amber-200/50 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#8C6D2B]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Tender & Sales Inquiries</p>
                <p className="text-sm font-bold text-slate-900 group-hover:text-[#8C6D2B] transition-colors">
                  dm@baitalnokhada.com
                </p>
              </div>
            </a>

          </div>

          {/* الفروع الإقليمية */}
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C6D2B]">
              Regional Presence & Branches
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">

              {/* دبي */}
              <div className="p-4 rounded-2xl bg-[#FCFCFB] border border-slate-200/80 relative group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6D2B]" />
                    <span>Dubai, UAE</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8C6D2B] transition-colors" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pl-5">
                  Techno Park, Jebel Ali
                </p>
              </div>

              {/* أبوظبي */}
              <div className="p-4 rounded-2xl bg-[#FCFCFB] border border-slate-200/80 relative group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6D2B]" />
                    <span>Abu Dhabi, UAE</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8C6D2B] transition-colors" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pl-5">
                  M41, ICAD-1, Mussafah
                </p>
              </div>

              {/* الرياض */}
              <div className="p-4 rounded-2xl bg-[#FCFCFB] border border-slate-200/80 relative group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <MapPin className="w-3.5 h-3.5 text-[#8C6D2B]" />
                    <span>Riyadh, Saudi Arabia</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#8C6D2B] transition-colors" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium pl-5">
                  Al Olaya District
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}