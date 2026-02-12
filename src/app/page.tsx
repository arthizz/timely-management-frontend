import Image from "next/image";
import HeroSection from "@/components/landingpage/hero";
import About from "@/components/landingpage/about";
import Help from "@/components/landingpage/help";

export default function Home() {
  return (
    <div className="mx-0 px-0">
      <main>
        <HeroSection />
        <About />
        <Help />
      </main>
    </div>
  );
}
