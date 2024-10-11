
import { PaginationComponent } from "@/components/shared/PaginationComponent";

import ProductsPage from "@/components/shop/ProductsPage";
import SidebarFilters from "@/components/shop/SidebarFilters";
import TopSearchBar from "@/components/shop/TopSearchBar";
import { getProductData } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SHOP PAGE || ZossGadget",
  description: "ALL PRODUCTS ",
};
interface SearchParams {
  page?: string;
  search?: string;
  limit?: string;
  skip?: string;
  sortBy?: string;
}

const AllProductShop = async ({ searchParams }: { searchParams: SearchParams }) => {
  const page = parseInt(searchParams["page"] as string) || 1; 
  const skip = parseInt(searchParams["skip"] as string) || 0
  const limit = parseInt(searchParams["limit"] as string) || 10; 
  const sortBy = (searchParams["sortBy"] as string) || "Default";
  
  const data = await getProductData(page,skip,limit, sortBy,);
  const products = Array.isArray(data) ? data : data.products || [];
  const totalItems = data.total


  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">


      <div className="grid lg:grid-cols-12 ">
        <div className="sidebar lg:col-span-3 pb-10 hidden lg:block py-4">
          <SidebarFilters  />
        </div>
        <div className="products lg:col-span-9 overflow-hidden">
          <TopSearchBar  />
          <div>
            <ProductsPage products={products}/>
          </div>
          <div className="my-10 w-full mx-auto">
            <PaginationComponent currentPage={page} totalItems={ totalItems || 0} limit={limit}  sortBy={sortBy} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default AllProductShop;
