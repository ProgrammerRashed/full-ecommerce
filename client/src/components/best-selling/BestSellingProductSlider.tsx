
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../shared/ProductCard"


const BestSellingProductSlider = ({ products }: any) => {
  return (
    <Carousel className="w-full ">
      <CarouselContent className="-ml-1 pb-6">
        {products.map((product: any, index: number) => (
          <CarouselItem key={index} className="pl-3 basis-10/12 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full select-none">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default BestSellingProductSlider





