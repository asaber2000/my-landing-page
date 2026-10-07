import Hero from "@/components/Hero";
import ClientsAndUSPs from "@/components/ClientsAndUSPs";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LinkedInPageView from "@/components/LinkedInPageView";
import OpenAIPageView from "@/components/OpenAIPageView";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <ClientsAndUSPs />
      <FeaturedSolutions />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
      <LinkedInPageView />
      <OpenAIPageView />
    </main>
  );
}