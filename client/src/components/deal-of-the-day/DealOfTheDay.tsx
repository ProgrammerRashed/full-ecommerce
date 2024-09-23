import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import getJsonData from "@/lib/getJsonData";

const DealOfTheDay = () => {
  const data = getJsonData();
  const filteredData = (data.filter((product) =>
    product.tags.some((singleTag) => singleTag.includes("dealoftheday"))).slice(0, 4)
  );
  return (
    <div className="py-0 ">
      <div className="flex w-full">
      <div className="head flex justify-between items-center w-full">
          <h1 className="text-xl font-bold">Deals of the Day</h1>
          <Link href="/view-all">View All</Link>
          </div>
     
      </div>
      {/* PRODUCTS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      {filteredData.map((product, index) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;
