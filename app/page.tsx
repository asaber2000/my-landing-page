import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070B14] text-white">
      <Hero />
      <Benefits />
    </main>
  );
}