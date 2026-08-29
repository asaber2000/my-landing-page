import { ShieldCheck, Zap, Headphones } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: "Certified Safety Standards",
      desc: "Built to comply with strict international guidelines, featuring high wind-load ratings and fire-retardant membranes.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#D4AF37]" />,
      title: "Rapid Deployment",
      desc: "Our expert engineers deliver fully operational pavilions and structures in record time without compromising quality.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#D4AF37]" />,
      title: "Turnkey Support",
      desc: "From climate control HVAC systems and interior fit-outs to dismantling, we handle the entire project lifecycle.",
    },
  ];

  return (
    <section className="w-full px-6 sm:px-12 lg:px-24 py-20 border-t border-white/10 bg-[#0B1120]/50 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold tracking-widest uppercase text-[#D4AF37]">Why Choose Us</span>
        <h2 className="text-3xl sm:text-4xl font-black font-heading">Engineered For Excellence & Durability</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((item, index) => (
          <div 
            key={index}
            className="p-8 rounded-3xl bg-[#0D1527] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 space-y-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold font-heading">{item.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-light">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}