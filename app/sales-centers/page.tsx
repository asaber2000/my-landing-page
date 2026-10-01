import SalesCentersHero from "@/components/SalesCentersHero";
import NewDesign from "@/components/NewDesign";
import SalesCentersLeadForm from "@/components/SalesCentersLeadForm";
import SalesCentersFooter from "@/components/SalesCentersFooter";
import SalesCentersWhatsAppWidget from "@/components/SalesCentersWhatsAppWidget";


export const metadata = {
  title: "Turnkey Sales Centers & Real Estate Pavilions | Bait Al Nokhada",
  description: "Pre-engineered luxury temporary and semi-permanent sales galleries for UAE real estate developers. Clear-span engineering delivered in 14-21 days.",
};

export default function SalesCentersPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#D4AF37] selection:text-slate-950 overflow-x-hidden">
      {/* 1. الهيرو السينمائي الأول */}
      <SalesCentersHero />
      <NewDesign />

      {/* 2. سكشن المقارنة التفاعلية قبل وبعد للمشاريع المنفذة */}
      <SalesCentersLeadForm />
      <SalesCentersFooter />
      <SalesCentersWhatsAppWidget />
    </main>
  );
}