import BestSellingProducts from "@/components/best-selling/BestSellingProducts";
import DealOfTheDay from "@/components/deal-of-the-day/DealOfTheDay";
import DealOfTheMonth from "@/components/deal-of-the-month/DealOfTheMonth";
import HeroSection from "@/components/hero-section/banner";
import ShopByCategory from "@/components/shop-by-category/ShopByCategory";

export default function Home() {
  return (
    <main className="website min-h-screen max-w-[1240px] mx-auto">
     

      {/* BANNER SECTION / HERO SECTION */}
      <section className="h-[calc(100vh-64px)] overflow-hidden">
        <HeroSection />
      </section>
       {/* SHOP BY CATEGORY SECTION */}
       <section className="shop-by-category">
        <ShopByCategory />
      </section>
       {/* DEALS OF THE DAY SECTION */}
       <section className="deals-of-the-day">
        <DealOfTheDay />
      </section>
       {/* BEST SELLING PRODUCTS SECTION */}
       <section className="best-selling-products">
        <BestSellingProducts />
      </section>

       {/* DEAL OF THE MONTH SECTION */}
       <section className="best-selling-products">
        <DealOfTheMonth />
      </section>
    </main>
  );
}
