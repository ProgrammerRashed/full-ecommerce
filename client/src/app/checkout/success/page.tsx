import { Button } from "@/components/ui/button"


const CheckoutSuccessComponent = () => {
  return (
    <div className="min-h-[60vh] max-w-[1440px] mx-auto flex flex-col gap-4 justify-center items-center px-2 md:px-3 lg:px-5">
      <h1 className="text-3xl font-bold text-center">Thanks you for your order!</h1>
      <p className="text-center">Your order is confirmed. you will receive an email confirmation shortly. Your order id is: ##########</p>
      <div className="cta flex gap-5">
        <Button>View Order</Button>
        <Button variant="outline">View All Orders</Button>
      </div>
    </div>
  )
}

export default CheckoutSuccessComponent
