import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { FaCcMastercard } from "react-icons/fa";
const ShopFeatures = () => {
  return (
    <div className="max-w-[1440px] mx-auto py-10 px-2 md:px-3 lg:px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card space-y-2 border rounded p-3">
          <FaShippingFast className="text-2xl" />
          <h1 className="font-bold">Free Shipping</h1>
          <p>Free shipping for order above ৳10,000</p>
        </div>
        <div className="card space-y-2 border rounded p-3">
          <FaCcMastercard className="text-2xl" />
          <h1 className="font-bold">FLexible Payment</h1>
          <p>Pay with multiple payment method</p>
        </div>
        <div className="card space-y-2 border rounded p-3">
          <BiSupport className="text-2xl" />
          <h1 className="font-bold">Online Support</h1>
          <p>24 hours a day, 7 days a week</p>
        </div>
        <div className="card space-y-2 border rounded p-3">
          <TbTruckReturn className="text-2xl" />
          <h1 className="font-bold">Easy Return</h1>
          <p>Easily return damage product</p>
        </div>
      </div>
    </div>
  );
};

export default ShopFeatures;
