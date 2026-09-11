import Image from "next/image";

export default function WhatsAppWidget() {
  const phoneNumber = "971543474869";
  const defaultMessage = encodeURIComponent(
    "Hello Bait Al Nokhada, I would like to inquire about your tent solutions."
  );

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Checkbox مخفي للتحكم في الفتح والإغلاق بدون useState نهائياً */}
      <input
        type="checkbox"
        id="whatsapp-chat-toggle"
        className="peer hidden"
      />

      {/* نافذة المحادثة الداكنة الفاخرة (Dark Card) */}
      <div className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] sm:w-80 rounded-2xl bg-[#0B111E] border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 origin-bottom-right scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100">
        
        {/* رأس النافذة (Header) */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#070B14] p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* الشعار أو صورة البروفايل مع نقطة أونلاين خضراء */}
            <div className="relative w-10 h-10 rounded-full bg-[#1A2333] border border-white/15 flex items-center justify-center overflow-hidden shrink-0">
              <Image
                src="/logo w.png"
                alt="Bait Al Nokhada"
                width={30}
                height={30}
                className="object-contain"
              />
              <span className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#0B111E]" />
            </div>

            <div>
              <h4 className="text-sm font-bold text-white tracking-wide">
                Bait Al Nokhada
              </h4>
              <p className="text-[11px] text-emerald-400 font-medium">
                Typically replies within minutes
              </p>
            </div>
          </div>

          {/* زر الإغلاق X المرتبط بالـ Checkbox */}
          <label
            htmlFor="whatsapp-chat-toggle"
            className="cursor-pointer text-zinc-400 hover:text-white p-1 transition-colors"
            aria-label="Close Chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        {/* جسم المحادثة (Chat Body) مع خلفية داكنة خفيفة */}
        <div className="p-4 bg-[#070B14]/90 min-h-[120px] flex flex-col justify-end space-y-2">
          {/* الرسالة الترحيبية (Bubble) */}
          <div className="relative bg-[#162032] border border-white/10 rounded-2xl rounded-tl-sm p-3 shadow-md max-w-[90%]">
            <span className="block text-[10px] font-semibold text-[#D4AF37] mb-1">
              Sales Specialist
            </span>
            <p className="text-xs text-zinc-200 leading-relaxed font-light">
              Hello! 👋 Have a question about tent rentals or custom structures? Click below to chat directly with our specialist.
            </p>
            <span className="block text-[9px] text-zinc-500 text-right mt-1">
              Just now
            </span>
          </div>
        </div>

        {/* زر الإرسال المباشر على واتساب (Footer Action) */}
        <div className="p-3.5 bg-[#0B111E] border-t border-white/10">
          <a
            href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            id="popup-whatsapp-send-btn"
            data-tracking="whatsapp-chat-popup"
            className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>Start WhatsApp Chat</span>
          </a>
          <p className="text-[10px] text-zinc-500 text-center mt-2 tracking-wide">
            Powered by Bait Al Nokhada • UAE &amp; KSA and GCC
          </p>
        </div>
      </div>

      {/* الزر العائم الدائري (Floating Button) المشغل للنافذة */}
      <label
        htmlFor="whatsapp-chat-toggle"
        id="floating-whatsapp-widget"
        className="pointer-events-auto cursor-pointer flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Open WhatsApp Chat"
      >
        {/* نبض تنبيهي هادئ في وضع الإغلاق فقط */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none peer-checked:hidden" />

        {/* أيقونة الواتساب الرسمية */}
        <svg className="w-8 h-8 fill-white shrink-0 relative z-10" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </label>
    </div>
  );
}