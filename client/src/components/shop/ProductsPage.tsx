
import ProductCard from "../shared/ProductCard";

const ProductsPage = ({ products }: { products: any[] }) => {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {products.length > 0 ? (
        products.map((product: any, index: number) => (
          <div key={index}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default ProductsPage;
