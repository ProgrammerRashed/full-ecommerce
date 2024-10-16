"use client"
import CartTable from "./CartTable";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";

import Link from "next/link";
import { useCartStore } from "../../../store/cartStore";


const ShoppingCart = () => {
  const { items, total, addItem, removeItem, clearCart } = useCartStore();

  if (items.length === 0) {
    return <div><h1>No Items are added to the cart!!!</h1></div>;
  }

  return (
    // CART PRODUCTS
    <div className="grid lg:grid-cols-12 gap-5">
      <div className="cart lg:col-span-8">
        <h1 className="text-xl lg:font-bold my-4">Cart</h1>
        <CartTable />
      </div>

      {/* CART SUMMARY */}
      <div className="cart-summary lg:col-span-4">
        <h1 className="text-xl font-bold my-4">Order Summary</h1>

        <div className="content bg-accent/80 p-5">

        <div className="flex justify-between items-center pb-3 border-b border-border">
          <h1 className="font-medium">Sub Total</h1>
          <p>{total}.00৳</p>
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
            <Button><Link href="/checkout" className="w-full">Checkout</Link></Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
