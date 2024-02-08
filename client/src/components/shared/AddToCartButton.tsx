"use client"
import { Button } from "../ui/button";

const AddToCartButton = ({ id }: any) => {
    const handleAddToCart = () => {
       
        console.log("added to cart", id);
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
