import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Slider() {
  const localImages = [
    "/image1.jpg",
    "/image2.jpg",
    "/image3.jpg",
    "/image4.jpg",
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <Carousel>
        <CarouselContent>
          {localImages.map((imagePath, index) => (
            <CarouselItem key={index}>
              <Image
                src={imagePath}
                width={800}
                height={400}
                alt={`Slider image ${index + 1}`}
                className="w-full h-[180px] md:h-[400px] object-cover rounded-2xl"
                priority={index === 0}
                unoptimized={process.env.NODE_ENV !== "production"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-lg" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-lg" />
      </Carousel>
    </div>
  );
}

export default Slider;