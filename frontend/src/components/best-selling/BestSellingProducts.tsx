import ProductCard from "../shared/ProductCard"

const BestSellingProducts = () => {
  return (
    <div className="py-20">
      <h1 className="text-2xl text-center mb-10 font-bold">Best Selling Products</h1>

      <div className="best-selling-products grid grid-cols-3 gap-5">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default BestSellingProducts
