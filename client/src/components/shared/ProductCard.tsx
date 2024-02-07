import Image from "next/image";
import TooltipComponent from "./TooltipComponent";
import { Button } from "../ui/button";
import { FaStar } from "react-icons/fa";
import placeholderImage from "../../assets/banner-bg.jpg"
const ProductCard = ({product}:any) => {
  return (
    <div className="group shadow-sm flex flex-col hover:scale-[101%] hover:shadow w-full h-full rounded overflow-hidden transition-all ease-in-out">
      <div className="product-image relative h-[300px] w-full transition-all ease-in-out overflow-hidden">
        <Image
          src={product?.image|| placeholderImage}
          width={300}
          height={300}
          className="object-cover object-center w-full h-full overflow-hidden"
          alt={product?.name}
     
        />
        <div className="cta add-to-cart absolute w-full bottom-0  h-0 group-hover:h-10 overflow-hidden transition-all ease-in-out">
            <Button className="w-full rounded-none">Add to Cart</Button>
        </div>
      </div>
      <div className="product-details space-y-2 p-2 overflow-hidden">
        
          <h1 className="text-lg font-medium line-clamp-2">
           {product?.name}
          </h1>
       
        <div className="flex justify-between items-center">
          <h3 className="price text-lg font-bold">
            <span className="taka">৳</span>{product?.price}.00
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
