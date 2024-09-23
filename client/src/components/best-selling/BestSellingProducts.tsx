import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import getJsonData from "@/lib/getJsonData";

import BestSellingProductSlider from "./BestSellingProductSlider";

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

      <div className="mt-10">
        {/* <PaginationComponent /> */}
        <div className="mx-auto">
          <BestSellingProductSlider  products={filteredData}/>
        </div>


      </div>
    </div>
  );
};

export default BestSellingProducts;
