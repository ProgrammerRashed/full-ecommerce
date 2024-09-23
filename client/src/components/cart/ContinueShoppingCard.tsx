import { Button } from "../ui/button";

const ContinueShoppingCard = () => {
  return (
    <div className="bg-accent/80 p-10 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between items-center my-5">
      <div>
        <h1 className="text-xl font-medium text-center lg:text-left">Continue Shopping</h1>
        <p className="text-center lg:text-left">
          Discover more product that are perfect for gift, for your room or a
          unique addition to your collection
        </p>
      </div>
      <div>
        <Button>Continue Shopping</Button>
      </div>
    </div>
  );
};

export default ContinueShoppingCard;
