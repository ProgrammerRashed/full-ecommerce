import Image from "next/image";
import bgImage from "../../assets/banner-bg.jpg";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-full">
      <div className="absolute -z-10 rounded-md overflow-hidden h-full w-full ">
        <Image
          src={bgImage}         
          height={1080}
          width={1080}
          alt="hero-banner"
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="h-full flex items-center">
        <div className="flex flex-col gap-5 justify-center p-8 mt-20">
          <div className="text-2xl lg:text-5xl font-bold lg:space-y-3">
            <p>Unleash Innovation </p>
            <p>in Every Byte</p>
          </div>
          <p className="lg:text-lg">Explore a word of cutting edge technology</p>
          <Button className="w-fit">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
