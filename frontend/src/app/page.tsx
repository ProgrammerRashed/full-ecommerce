import HeroSection from "@/components/hero-section/banner";
import DesktopNav from "@/components/ui/navigation/DesktopNav";
import MobileNav from "@/components/ui/navigation/MobileNav";

export default function Home() {
  return (
    <main className="website min-h-screen">
     

      {/* BANNER SECTION / HERO SECTION */}
      <section className="max-w-[1240px] mx-auto h-[calc(100vh-64px)] overflow-hidden">
        <HeroSection />
      </section>
    </main>
  );
}
