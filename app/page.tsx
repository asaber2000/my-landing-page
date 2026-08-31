import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ContactSection from "@/components/ContactSection";
import PlayReel from "@/components/PlayReel";
import FAQSection from "@/components/FAQSection";
import InteractiveFinder from "@/components/InteractiveFinder";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <FeaturedSolutions />
      <ContactSection />
      <PlayReel />
      <FAQSection />
      <InteractiveFinder />
    </main>
  );
}