import Image from "next/image";
import demoImage from "../../assets/banner-bg.jpg";
import TooltipComponent from "./TooltipComponent";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
const ProductCard = () => {
    const handleAddToCart = () =>{
        
    }
    const productName = "FiFine K669B Microphone- USB Studio Condenser Microphone For YouTube Studio"
  return (
    <div className="group shadow-sm hover:scale-[103%] hover:shadow-md w-full h-full rounded overflow-hidden transition-all ease-in-out">
      <div className="product-image relative w-full transition-all ease-in-out">
        <Image
          src={demoImage}
          width={300}
          height={300}
          className="object-cover w-full"
          alt={productName}
        />
        <div className="cta add-to-cart absolute w-full bottom-0  h-0 group-hover:h-10 overflow-hidden transition-all ease-in-out">
            <Button className="w-full rounded-none">Add to Cart</Button>
        </div>
      </div>
      <div className="product-details space-y-2 p-4">
        <TooltipComponent content={productName}>
          <h1 className="text-lg font-medium truncate">
           {productName}
          </h1>
        </TooltipComponent>
        <div className="flex justify-between items-center">
          <h3 className="price text-xl font-bold">
            <span className="taka">৳</span>200.00
          </h3>
          <div className="rating flex gap-1 items-center">
           <p><FaStar className="text-lg"/></p>
            <p className="rating-count text-muted-foreground">(5)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
