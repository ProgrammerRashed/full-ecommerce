import Link from "next/link";
import { PaginationComponent } from "../shared/PaginationComponent";
import ProductCard from "../shared/ProductCard";

const BestSellingProducts = () => {
  return (
    <div className="py-20">
      <div className="text-xl flex justify-between items-center mb-5 font-bold">
        <h1>Best Selling Products</h1>
        <Link href="view-all" className="text-base font-normal">View All</Link>
      </div>

      <div className="best-selling-products grid grid-cols-4 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <div className="mt-10">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default BestSellingProducts;
