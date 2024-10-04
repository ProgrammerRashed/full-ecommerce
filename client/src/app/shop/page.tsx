"use client"
import { PaginationComponent } from "@/components/shared/PaginationComponent";
import FilterDrawerClient from "@/components/shop/FilterDrawer";
import ProductsPage from "@/components/shop/ProductsPage";
import SidebarFilters from "@/components/shop/SidebarFilters";
import getJsonData from "@/lib/getJsonData";



const AllProductShop = () => {
  const data = getJsonData();


  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">

<FilterDrawerClient/>
      <div className="grid lg:grid-cols-12 ">
        <div className="sidebar lg:col-span-3 pb-10 hidden lg:block">
          <SidebarFilters />
        </div>
        <div className="products lg:col-span-9">
          <h4 className="font-bold mb-3">Showing 1 - 10 of 15 Products</h4>
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
