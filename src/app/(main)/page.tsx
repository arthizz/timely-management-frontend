import HeroSection from "@/components/landingpage/hero";
import About from "@/components/landingpage/about";
import Help from "@/components/landingpage/help";
import CallToAction from "@/components/landingpage/cta";

export default function Home() {
  return (
    <div className="mx-0 px-0">
      <main>
        <HeroSection />
        <About />
        <Help />
        <CallToAction />
      </main>
    </div>
  );
}
