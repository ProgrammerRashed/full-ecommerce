import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const CheckoutComponent = () => {
  const productName =
    "FiFine K669B Microphone- USB Studio Condenser Microphone For YouTube Studio";
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* BILLING DETAILS */}
      <div className="col-span-6">
        <h1 className="text-xl font-bold my-4">Billing Details</h1>
        <div>
          <form>
            {/* NAME INPUT */}

            <div className="grid w-full items-center gap-1.5 ">
              <label htmlFor="name">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                name="name"
                placeholder="Enter Full Name.."
                type="text"
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>
            {/* FILE INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <label htmlFor="phone">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                placeholder="+8801700123456"
                type="text"
                required
                className="border border-border focus:outline-input rounded p-1 file:bg-muted file:border-none file:rounded file:mr-3 file:p-1 file:px-2 text-muted-foreground"
              />
            </div>

            {/* EMAIL INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <label htmlFor="email">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your email.."
                name="email"
                type="email"
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>

            {/* Delivery INPUT */}
            <div className="grid w-full items-center gap-1.5 mt-4">
              <label htmlFor="delivery-address">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <input
                placeholder="Enter your email.."
                name="delivery-address"
                type="text"
                required
                className="border border-border focus:outline-input rounded p-2"
              />
            </div>

            {/* LOCATION INPUTS */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* DISTRICT INPUT */}

              <div className="grid w-full items-center gap-1.5 mt-3">
                <label htmlFor="district">
                  District <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your District" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Districts</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              {/*DELIVERY ARIA */}
              <div className="grid w-full items-center gap-1.5 mt-3">
                <label htmlFor="area">
                  Area <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select delivery area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Area</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* ORDER DETAILS */}
      <div className="col-span-6">
        <div className="cart-summary">
          <h1 className="text-xl font-bold my-4">Your Order</h1>

          <div className="content bg-accent/80 p-5">
            {/* PRODUCT TABLE */}
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left ">
                <thead className="text-xs text-gray-700 uppercase bg-muted">
                  <tr>
                    <th scope="col" className="py-3">
                      Product
                    </th>

                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="py-3">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-accent/50">
                    <td className="py-4 font-semibold text-gray-900 dark:text-white">
                      {productName}
                    </td>

                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      1020.00৳
                    </td>
                    <td className="py-4">
                      <p>1020.00৳</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-border">
              <h1 className="font-medium">Sub Total</h1>
              <p>1020.00৳</p>
            </div>
            {/* SELECTED SHIPPING METHOD */}
            <div className="py-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center">
                  <Checkbox checked={true} id="pathao" />
                  <label htmlFor="high">All Bangladesh (Pathao Courier)</label>
                </div>
                <div>120.00৳</div>
              </div>
            </div>

            {/* CART TOTAL */}
            <div className="py-3 border-t border-border font-bold text-xl flex justify-between items-center">
              <h1>Total:</h1>
              <p>3600.00৳</p>
            </div>

            {/* ADVANCE PAYMENT */}
            <div>
              <div className="flex justify-between items-center border-y border-border py-2">
                <h1>Advance Payment</h1>
                <p>- 200.00৳</p>
              </div>
              <div className="flex justify-between items-center border-t border-border py-2">
                <h1>Payment Amount (DUE)</h1>
                <p className="text-lg font-bold">3400.00৳</p>
              </div>
            </div>
            {/* Payment Option */}
            <div className="py-3">
              <h1 className="text-xl py-2">Payment Options</h1>
              <div className="payment-options">
                <RadioGroup
                  defaultValue="full"
                  className="flex justify-between items-center"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <RadioGroupItem value="full" id="full" />
                      <label htmlFor="full">Online Payment</label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <RadioGroupItem value="partial" id="partial" />
                      <label htmlFor="partial">
                        Advance 200৳ for Cash on Delivery
                      </label>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            {/* CART CTA */}
            <div>
              <Button className="w-full">Login to Checkout</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
