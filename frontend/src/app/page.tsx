import HeroSection from "@/components/hero-section/banner";
import DesktopNav from "@/components/ui/navigation/DesktopNav";
import MobileNav from "@/components/ui/navigation/MobileNav";

export default function Home() {
  return (
    <main className="website min-h-screen">
      {/* MOBILE NAV */}
      <div className="fixed border lg:hidden bottom-0 w-full overflow-hidden border-border">
        <MobileNav />
      </div>
      {/* DESKTOP NAV */}
      <div className="hidden lg:block">
        <div className="p-3 rounded">
          <DesktopNav />
        </div>
      </div>

      {/* BANNER SECTION / HERO SECTION */}
      <section className="max-w-[1240px] mx-auto h-[calc(100vh-64px)] overflow-hidden">
        <HeroSection />
      </section>
    </main>
  );
}
