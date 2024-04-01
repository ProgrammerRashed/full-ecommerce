"use client"
import { Checkbox } from "@radix-ui/react-checkbox";
import CartTable from "./CartTable";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import getJsonData from "@/lib/getJsonData";
import { useEffect, useState } from "react";


interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  brand: string;
  category: string;
  price: string;
  tags: string[];
}

const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Check if running in the client-side environment
    if (typeof window !== 'undefined') {
      const cartItemsRaw = localStorage.getItem("cartProducts");
      let cartItems:string[] = [];

      if (cartItemsRaw) {
        cartItems = JSON.parse(cartItemsRaw);
      }

      const data = getJsonData();
      const filteredProducts = data.filter(product => cartItems.includes(product.id));
      setCartProducts(filteredProducts);
    }
  }, []);

  if (cartProducts.length === 0) {
    return <div><h1>No Items are added to the cart!!!</h1></div>;
  }

  return (
    // CART PRODUCTS
    <div className="grid grid-cols-12 gap-5">
      <div className="cart col-span-8">
        <h1 className="text-xl font-bold my-4">Cart</h1>
        <CartTable cartProducts={cartProducts} />
      </div>

      {/* CART SUMMARY */}
      <div className="cart-summary col-span-4">
        <h1 className="text-xl font-bold my-4">Order Summary</h1>

        <div className="content bg-accent/80 p-5">

        <div className="flex justify-between items-center pb-3 border-b border-border">
          <h1 className="font-medium">Sub Total</h1>
          <p>1020.00৳</p>
        </div>

        {/* COURIER OPTIONS */}
        <div className="py-3">
          <h1 className="font-medium pb-3">Choose Shipping Method:</h1>
          <div className="shipping">
            <RadioGroup defaultValue="pathao">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <RadioGroupItem value="pathao" id="pathao" />
                  <label htmlFor="high">All Bangladesh (Pathao Courier)</label>
                </div>
                <div>120.00৳</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <RadioGroupItem value="gazipur" id="gazipur" />
                  <label htmlFor="high">Gazipur, Savar, Keraniganj City</label>
                </div>
                <div>100.00৳</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <RadioGroupItem value="inside-dhaka" id="inside-dhaka" />
                  <label htmlFor="high">Inside Dhaka</label>
                </div>
                <div>60.00৳</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <RadioGroupItem value="office" id="office" />
                  <label htmlFor="high">Office Pickup (Mirpur)</label>
                </div>
                <div>00.00৳</div>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* CART TOTAL */}
        <div className="py-3 border-t border-border font-bold text-xl flex justify-between items-center">
            <h1>Total:</h1>
            <p>3600.00৳</p>
        </div>
        {/* CART CTA */}
        <div>
            <Button className="w-full">Login to Checkout</Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
