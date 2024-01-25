import BestSellingProducts from "@/components/best-selling/BestSellingProducts";
import HeroSection from "@/components/hero-section/banner";
import DesktopNav from "@/components/ui/navigation/DesktopNav";
import MobileNav from "@/components/ui/navigation/MobileNav";

export default function Home() {
  return (
    <main className="website min-h-screen max-w-[1240px] mx-auto">
     

      {/* BANNER SECTION / HERO SECTION */}
      <section className="h-[calc(100vh-64px)] overflow-hidden">
        <HeroSection />
      </section>
       {/* BEST SELLING PRODUCTS SECTION */}
       <section className="best-selling-products">
        <BestSellingProducts />
      </section>
    </main>
  );
}
