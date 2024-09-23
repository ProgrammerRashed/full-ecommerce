import ProductDetails from "@/components/product-details/ProductDetails";

const ProductDetailsPage = ({params}:any) => {
  return (
    <div className="max-w-[1440px] mx-auto px-2 md:px-3 lg:px-5">
      <ProductDetails params={params} />
    </div>
  );
};

export default ProductDetailsPage;
