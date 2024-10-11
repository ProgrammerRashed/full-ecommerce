"use client"
import Image from "next/image";
import productImage from "../../assets/banner-bg.jpg";
import { useCartStore } from "../../../store/cartStore";
const CartTable = () => {
  const { items, total, addItem, addQuantity, removeQuantity, removeItem, clearCart } = useCartStore();


  return (
    <div>
      <div className="mx-auto">
        <div className="space-y-6">
          {
            items.map((product: any, index: any) => (

              <div key={index} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                <div className="flex gap-4 flex-col md:flex-row justify-between items-center">
                  <div className="flex gap-2 md:w-[70%]">
                    <div>
                      <Image alt={product.name} height={80} width={80} className="h-20 w-20 dark:hidden" src={product.image || productImage} />
                      <Image alt={product.name} height={80} width={80} className="hidden h-20 w-20 dark:block" src={product.image || productImage} />
                    </div>
                    <div>
                      <a href="#" className="text-base font-medium text-gray-900 hover:underline dark:text-white">{product.name}</a>
                      <p className="text-base font-bold text-gray-900 dark:text-white">Price: {product.price}৳</p>
                    </div>

                  </div>
                  <div className="group flex md:w-[30%]">
                  <div className="flex items-center ">
                      <button onClick={() => {
                        removeQuantity(product.id);
                      }} type="button" id="decrement-button-5" data-input-counter-decrement="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                        </svg>
                      </button>
                      <input type="text" id="counter-input-5" data-input-counter className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white" placeholder="" value={product.quantity} required />
                      <button onClick={() => {
                        addQuantity({ id: product.id, name: product.name, price: product.price, quantity: product.quality, image: product.image })
                      }} type="button" id="increment-button-5" data-input-counter-increment="counter-input-5" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                        <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="text-end  md:w-[15%]">
                      <p>Total Cost</p>
                      <p className="text-base font-bold text-gray-900 dark:text-white">{product.price * product.quantity}৳</p>
                    </div>

                  </div>
                </div>
              </div>
            ))
          }

        </div>

      </div>
    </div>
  );
};

export default CartTable;
{/* <button
                     
type="button"
className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
>
<svg className="me-1.5 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
</svg>
Remove
</button> */}