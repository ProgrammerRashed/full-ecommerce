
import { PaginationComponent } from "@/components/shared/PaginationComponent";

import ProductsPage from "@/components/shop/ProductsPage";
import SidebarFilters from "@/components/shop/SidebarFilters";
import TopSearchBar from "@/components/shop/TopSearchBar";
import getJsonData from "@/lib/getJsonData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHOP PAGE || ZossGadget",
  description: "ALL PRODUCTS ",
};


const AllProductShop = () => {
  const data = getJsonData();


  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">


      <div className="grid lg:grid-cols-12 ">
        <div className="sidebar lg:col-span-3 pb-10 hidden lg:block py-4">
          <SidebarFilters />
        </div>
        <div className="products lg:col-span-9 overflow-hidden">
          <TopSearchBar />

          <div>
            <ProductsPage data={data} />
          </div>
          <div className="my-10 w-full mx-auto">
            <PaginationComponent />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllProductShop;
