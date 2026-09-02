import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ScrollTrigger from "@/components/ScrollTrigger";
import ContactSection from "@/components/ContactSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <FeaturedSolutions />
      <ScrollTrigger />
      <ContactSection />
    </main>
  );
}