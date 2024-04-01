"use client"
import { Button } from "../ui/button";

const AddToCartButton = ({ id }: any) => {
    const handleAddToCart = () => {
        const receivedProductId = id;
        const localItemsString = localStorage.getItem("cartProducts");
        let localItems: string[] = [];
    
        if (localItemsString) {
            localItems = JSON.parse(localItemsString);
        }
    
        if (localItems) {
            let updatedProducts = [...localItems, receivedProductId];
            localStorage.setItem("cartProducts", JSON.stringify(updatedProducts));
        } else {
            let products: string[] = [];
            products.push(receivedProductId);
            localStorage.setItem("cartProducts", JSON.stringify(products));
        }
       
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
