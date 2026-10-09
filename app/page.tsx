import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import dynamic from "next/dynamic";

const FeaturedSolutions = dynamic(() => import("@/components/FeaturedSolutions"), {
  ssr: true,
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  ssr: true,
});import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LinkedInPageView from "@/components/LinkedInPageView";
import OpenAIPageView from "@/components/OpenAIPageView";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <Clients />
      <FeaturedSolutions />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
      <LinkedInPageView />
      <OpenAIPageView />
    </main>
  );
}