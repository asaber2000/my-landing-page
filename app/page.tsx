"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import FeaturedSolutions from "@/components/FeaturedSolutions";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  useEffect(() => {
    // إرسال إشارة الـ Page View تلقائياً بمجرد فتح اللاندينج بيدج
    fetch("/api/linkedin-conversion", { method: "POST" });
  }, []);
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <FeaturedSolutions />
      <ContactSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}