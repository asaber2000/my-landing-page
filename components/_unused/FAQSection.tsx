"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What types of tents and structures do you offer?",
    answer: "We offer a comprehensive range of turnkey tensile structures, including event tents, exhibition marquees, royal/luxury tents, sports complexes, storage hangars, and custom architecture tailored to UAE weather conditions."
  },
  {
    question: "Do you handle both manufacturing and installation?",
    answer: "Yes! We operate on a strict 'No Subcontracting, No Outsourcing' policy. All design, manufacturing, and installation works are completely handled in-house by our expert engineering teams."
  },
  {
    question: "Are your structures certified for extreme UAE weather?",
    answer: "Absolutely. All our high-span pavilions and fabric structures are engineered and certified to withstand high wind loads, extreme heat, and severe environmental conditions across the UAE and KSA."
  },
  {
    question: "Can tents be customized for corporate or royal events?",
    answer: "Yes, we specialize in bespoke royal and VIP event setups, featuring custom interior layouts, climate control integration, high-end flooring, and luxury architectural finishes."
  },
  {
    question: "How quickly can a temporary or permanent tent be deployed?",
    answer: "Deployment timelines depend on the scale and complexity of the project, but our in-house manufacturing allows for rapid deployment models without compromising safety or structural integrity."
  },
  {
    question: "Do you offer rental services as well as sales?",
    answer: "Yes, we provide flexible options for both temporary rentals (for exhibitions, weddings, and seasonal events) and permanent turnkey structure purchases."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-24 px-6 sm:px-12 lg:px-20 bg-[#070B14] text-white z-20 overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* الجانب الأيسر: عنوان القسم الثابت (على ستايل الصورة الفخمة) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <span className="text-[#D4AF37] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight font-heading leading-tight">
            Frequently Asked <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#C5A880]">
              Questions.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-6 leading-relaxed">
            Everything you need to know about our engineering standards, manufacturing capabilities, and turnkey tent services in the UAE.
          </p>
        </div>

        {/* الجانب الأيمن: قائمة الأسئلة والأجوبة (Accordion) */}
        <div className="lg:col-span-7 flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-white/15 py-6 cursor-pointer group"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-lg sm:text-xl font-bold font-heading transition-colors duration-300 ${isOpen ? 'text-[#D4AF37]' : 'text-white group-hover:text-[#D4AF37]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-[#D4AF37] text-black border-[#D4AF37] rotate-90' : 'text-white/70 group-hover:border-white'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {/* المحتوى المنسدل بسلاسة */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-300 text-sm sm:text-base font-light pt-4 leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}