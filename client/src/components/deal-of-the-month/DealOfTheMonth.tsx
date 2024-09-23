import Image from "next/image";
import { Button } from "../ui/button";
import demoImage from "../../assets/banner-bg.jpg";
import getJsonData from "@/lib/getJsonData";
import Link from "next/link";
import CuntDownTimer from "./CuntDownTimer";

const DealOfTheMonth = () => {
  const data = getJsonData();
  const filteredData = data.filter((product) =>
    product.tags.some((singleTag) => singleTag.includes("dealofthemonth"))
  );
  const bestProductOfTheMonth = filteredData[0];
  return (
    <div className="grid md:grid-cols-7  overflow-hidden">
      <div className="content md:col-span-4 space-y-4 order-2 md:order-1" >
        <h1 className="text-xl lg:text-xl font-medium mt-5 md:mt-0">Deal of the Month</h1>
        <p>
          Get ready for a shopping Experience like never before with our Deal of
          the month! Every purchase comes with exclusive offers and Free
          Delivery, making this month a celebration of savvy choices and amazing
          deals. Don't miss out! 🎁 🛒
        </p>
        <CuntDownTimer />

        {/* CTA BUTTON */}
        <div className="cta-button pt-5">
          <Link href={`/shop/${bestProductOfTheMonth.id}`}>
            <Button>View Product</Button>
          </Link>
        </div>
      </div>
      <div className="image md:col-span-3 h-full w-full p-10  shadow-md group order-1 ">
        <Image
          src={bestProductOfTheMonth.image}
          width={500}
          height={500}
          alt={bestProductOfTheMonth.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-all ease-in-out"
        />
      </div>
    </div>
  );
};

export default DealOfTheMonth;
