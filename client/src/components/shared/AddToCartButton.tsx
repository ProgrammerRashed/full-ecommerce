"use client"
import { useCartStore } from "../../../store/cartStore";
import { Button } from "../ui/button";

const AddToCartButton = ({ id, name, price, quantity, image }: any) => {
    const { addItem } = useCartStore();
  
    const handleAddToCart = () => {
        addItem( {id, name, price, quantity, image})
    };
    
    

    return (
        <div>
            <Button onClick={() => handleAddToCart()} className="w-full rounded-none">
                Add to Cart
            </Button>
        </div>
    );
};

export default AddToCartButton;
