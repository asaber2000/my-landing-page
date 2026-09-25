import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import LinkedInPageView from "@/components/LinkedInPageView";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <FeaturedSolutions />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
      <LinkedInPageView />
    </main>
  );
}