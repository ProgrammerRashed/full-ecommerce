"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "../shared/ProductCard"


const BestSellingProductSlider = ({ products }: any) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <Carousel   plugins={[plugin.current]}
    className="w-full"
    onMouseEnter={plugin.current.stop}
    onMouseLeave={plugin.current.reset}
    opts={{ align: "start", loop: true }}
    >
         <div className="justify-end gap-4  absolute w-full -translate-y-full hidden md:flex">
      <CarouselPrevious className="!relative translate-x-0 translate-y-0 top-0 left-0 right-0"/>
      <CarouselNext  className="!relative translate-x-0 translate-y-0 top-0 left-0 right-0"/>
      </div>
      <CarouselContent className="pb-6">
        {products.map((product: any, index: number) => (
          <CarouselItem key={index} className="pl-3 basis-10/12 md:basis-1/2 lg:basis-1/3">
            <div className="p-1 h-full select-none">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
   

    </Carousel>
  )
}

export default BestSellingProductSlider





