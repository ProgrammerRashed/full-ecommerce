"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import categoryImage from "../../assets/categories/ipads.png"
import Image from "next/image"


const ShopByCatSlider = ({ categories }: any) => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <Carousel plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{ align: "start", loop: true }}
        >
            <CarouselContent className="-ml-1 pb-6">
                {categories.map((category: any, index: number) => (
                    <CarouselItem key={index} className="pl-3 basis-1/2 md:basis-1/3 lg:basis-1/4">
                        <div className="p-1 h-full select-none">
                            <div className="card bg-muted p-5">
                                <div className="p-3 h-28 w-28 mx-auto">
                                    <Image width={100} height={100} src={category.image || categoryImage} alt="category-image" className="h-full w-full object-contain" />
                                </div>
                                <div className="bg-white text-black p-3 rounded flex justify-center items-center">{category.name || "Gadgets"}</div>
                            </div>
                        </div>
                    </CarouselItem>
                ))}

            </CarouselContent>

        </Carousel>
    )
}

export default ShopByCatSlider





