import Image from "next/image";
import { FaStar } from "react-icons/fa";
import placeholderImage from "../../assets/banner-bg.jpg"
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
const ProductCard = ({product}:any) => {
  
  return (
   
    <div className="group shadow-sm flex flex-col hover:scale-[101%] hover:shadow w-full h-full rounded overflow-hidden transition-all ease-in-out">
      <div className="product-image relative h-[300px] w-full transition-all ease-in-out overflow-hidden">
      <Link href={`/shop/${product.id}`}>
        <Image
          src={product?.image|| placeholderImage}
          width={300}
          height={300}
          className="object-cover object-center w-full h-full overflow-hidden"
          alt={product?.name}
     
        />
        </Link>
        <div className="cta add-to-cart z-30 absolute w-full bottom-0  h-0 group-hover:h-10 overflow-hidden transition-all ease-in-out">
        <AddToCartButton id={product.id}></AddToCartButton>
        </div>
      </div>
      <Link href={`/shop/${product.id}`}>
      <div className="product-details space-y-2 p-2 overflow-hidden">
        
          <h1 className="font-medium line-clamp-2">
           {product?.name}
          </h1>
       
        <div className="flex justify-between items-center">
          <h3 className="price font-bold">
            <span className="taka">৳</span>{product?.price}.00
          </h3>
          <div className="rating flex gap-1 items-center">
           <p><FaStar className=""/></p>
            <p className="rating-count text-muted-foreground">(5)</p>
          </div>
        </div>
      </div>
      </Link>
    </div>
  
  );
};

export default ProductCard;
