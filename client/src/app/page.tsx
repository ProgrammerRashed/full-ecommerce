import BestSellingProducts from "@/components/best-selling/BestSellingProducts";
import DealOfTheDay from "@/components/deal-of-the-day/DealOfTheDay";
import DealOfTheMonth from "@/components/deal-of-the-month/DealOfTheMonth";
import HeroSection from "@/components/hero-section/banner";
import ShopByCategory from "@/components/shop-by-category/ShopByCategory";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ZossGadget",
  description: "One of the best E-commerce website in bangladesh",
};
export default function Home() {
  return (
    <main className="website min-h-screen ">
     

      {/* BANNER SECTION / HERO SECTION */}
      <section className="h-[calc(100vh-64px)] overflow-hidden">
        <HeroSection />
      </section>
       {/* SHOP BY CATEGORY SECTION */}
       <section className="shop-by-category max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">
        <ShopByCategory />
      </section>
       {/* DEALS OF THE DAY SECTION */}
       <section className="deals-of-the-day max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">
        <DealOfTheDay />
      </section>
       {/* BEST SELLING PRODUCTS SECTION */}
       <section className="best-selling-products max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">
        <BestSellingProducts />
      </section>

       {/* DEAL OF THE MONTH SECTION */}
       <section className="best-selling-products max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">
        <DealOfTheMonth />
      </section>
    </main>
  );
}
