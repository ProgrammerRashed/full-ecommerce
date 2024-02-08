import productImage from "../../assets/banner-bg.jpg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProductCard from "../shared/ProductCard";
import getJsonData from "@/lib/getJsonData";

const ProductDetails = ({ params }: any) => {
  const data = getJsonData();
  const product = data.filter((product) => product.id == params.id)[0];

  const relatedProducts = data.filter(relatedProduct => relatedProduct?.category.includes(product?.category))

  if (!product) {
    return (
      <div>
        <h1>No Product Available</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="image bg-accent rounded h-[500px] w-[500px]">
          <Image
            width={500}
            height={500}
            src={product.image}
            alt="product-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content px-5">
          <div className="title">
            <h1 className="text-xl font-bold">{product.name}</h1>
          </div>
          <div className="category">
            <div className="flex gap-2 my-3">
              <p>{product.category}</p> <p className="text-accent">|</p>
              <p className="text-green-500">In Stock</p>
            </div>
          </div>
          <div className="pricing">
            <h3 className="font-bold text-xl">{product.price}.00৳</h3>
          </div>
          <div className="description mt-3">
            <h1 className="font-bold">Description</h1>
            <p>{product.description}</p>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS TABS */}
      <div className="w-full flex justify-center my-8">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="more-info">More Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div>
              <div>
                <p>{product.description}</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="more-info">
            <div>
              <div>
                <p>Information Not Available!!</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div>
              <div>
                <p>Not Enough to display!!</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <div>
              <div>
                <p>Information Not Available!!</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* DISPLAY RELATED PRODUCTS */}
      <div>
        <div className="bg-accent p-2 w-full">
          <h1>Related Products</h1>
        </div>
        <div className="grid grid-cols-4 mt-3 gap-4">
          {
            relatedProducts.map(relatedProduct => (
              <div key={product.id}><ProductCard product={relatedProduct}/> </div>
            ))
          }
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
