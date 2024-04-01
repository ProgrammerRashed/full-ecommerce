import Image from "next/image";
import { Button } from "../ui/button";
import demoImage from "../../assets/banner-bg.jpg";
import Link from "next/link";
import ProductCard from "../shared/ProductCard";
import getJsonData from "@/lib/getJsonData";

const DealOfTheDay = () => {
  const data = getJsonData();
  const filteredData = (data.filter((product) =>
    product.tags.some((singleTag) => singleTag.includes("dealoftheday"))).slice(0, 4)
  );
  return (
    <div className="py-20 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center justify-center">
          <h1 className="text-xl font-bold">Deals of the Day</h1>
          <div className=" flex gap-2 items-center">
            <div className="bg-white text-black text-lg">Ends After</div>
            <div className="timer bg-black text-white p-2 rounded">
              02 Hours : 05 Minutes : 04 Sec
            </div>
          </div>
        </div>

        <Link href="/view-all">View All</Link>
      </div>
      {/* PRODUCTS */}
      <div className="grid grid-cols-4 gap-3 mt-8">
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
