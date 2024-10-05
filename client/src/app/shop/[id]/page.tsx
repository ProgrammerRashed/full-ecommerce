import ProductDetails from "@/components/product-details/ProductDetails";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Details Page",
  description: "Product Details Page | ZossGadget One of the best E-commerce website in bangladesh",
};
const ProductDetailsPage = ({params}:any) => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5 py-5">
      <ProductDetails params={params} />
    </div>
  );
};

export default ProductDetailsPage;
