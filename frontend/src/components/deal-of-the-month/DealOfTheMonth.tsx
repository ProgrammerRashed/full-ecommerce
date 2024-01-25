import Image from "next/image"
import { Button } from "../ui/button"
import demoImage from "../../assets/banner-bg.jpg"

const DealOfTheMonth = () => {
  return (
    <div className="py-20 grid grid-cols-7">
      <div className="content col-span-4 space-y-4">
        <h1 className="text-xl font-medium">Deal of the month</h1>
        <p>Get ready for a shopping Experience like never before with our Deal of the month! Every purchase comes with exclusive offers and Free Delivery, making this month a celebration of savvy choices and amazing deals. Don't miss out! 🎁 🛒</p>
      <div className="countdown-timer flex gap-3">
        <div className="border border-border p-4 flex justify-center items-center flex-col rounded w-24">
            <p className="text-xl font-bold">01</p>
            <p>Days</p>
        </div>
        <div className="border border-border p-4 flex justify-center items-center flex-col rounded  w-24">
            <p className="text-xl font-bold">11</p>
            <p>Hours</p>
        </div>
        <div className="border border-border p-4 flex justify-center items-center flex-col rounded  w-24">
            <p className="text-xl font-bold">22</p>
            <p>Minutes</p>
        </div>
        <div className="border border-border p-4 flex justify-center items-center flex-col rounded  w-24">
            <p className="text-xl font-bold">01</p>
            <p>Sec</p>
        </div>
      </div>

      {/* CTA BUTTON */}
      <div className="cta-button">
        <Button>View Product</Button>
      </div>
      </div>
      <div className="image col-span-3 h-full w-full">
      <Image src={demoImage} width={500} height={500} alt="product-name" className="h-full w-full object-cover"/>
      </div>
    </div>
  )
}

export default DealOfTheMonth
