import productImage from "../../assets/banner-bg.jpg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const ProductDetails = () => {
  const productName =
    "FiFine K669B Microphone- USB Studio Condenser Microphone For YouTube Studio";
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="image bg-accent rounded">
          <Image
            width={500}
            height={500}
            src={productImage}
            alt="product-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="content px-5">
          <div className="title">
            <h1 className="text-xl font-bold">{productName}</h1>
          </div>
          <div className="category">
            <div className="flex gap-2 my-3">
              <p>Laptops</p> <p className="text-accent">|</p>
              <p className="text-green-500">In Stock</p>
            </div>
          </div>
          <div className="pricing">
            <h3 className="font-bold text-xl">200.00৳</h3>
          </div>
          <div className="description mt-3">
            <h1 className="font-bold">Description</h1>
            <p>
              This FiFine K669B Microphone is perfect for anyone who wants to
              start creating their own content. It’s easy to use and install on
              any computer, and the sturdy metal construction means it’s durable
              enough to withstand even the most intense recording sessions. You
              won’t find a better quality microphone at this price. The tone of
              voice is incredibly friendly, making it perfect for those just
              starting out in the world of content creation. With this
              microphone, you can create amazing videos and music that will
              amaze your friends and family.
            </p>
          </div>
        </div>
      </div>

      {/* PRODUCT DETAILS TABS */}
      <div className="w-full flex justify-center my-8">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="more-info">More Information</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="details">
            <div>
              <div>
                <div>Account</div>
                <p>
                  Make changes to your account here. Click save when you're
                  done.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="more-info">
            <div>
              <div>
                <h1>Password</h1>
                <p>
                  Change your password here. After saving, you'll be logged out.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div>
              <div>
                <h1>Password</h1>
                <p>
                  Change your password here. After saving, you'll be logged out.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="faq">
            <div>
              <div>
                <h1>Password</h1>
                <p>
                  Change your password here. After saving, you'll be logged out.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;
