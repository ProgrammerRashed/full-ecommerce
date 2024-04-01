import Link from "next/link";
import { PaginationComponent } from "../shared/PaginationComponent";
import ProductCard from "../shared/ProductCard";
import getJsonData from "@/lib/getJsonData";

const BestSellingProducts = () => {
  const data = getJsonData();
  const filteredData = (data.filter((product) =>
    product.tags.some((singleTag) => singleTag.includes("bestselling"))).slice(0, 4)
  );
  return (
    <div className="py-20">
      <div className="text-xl flex justify-between items-center mb-5 font-bold">
        <h1>Best Selling Products</h1>
        <Link href="view-all" className="text-base font-normal">
          View All
        </Link>
      </div>

      <div className="best-selling-products grid grid-cols-4 gap-5">
        {filteredData.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="mt-10">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default BestSellingProducts;
