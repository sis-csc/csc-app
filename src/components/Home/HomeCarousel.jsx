import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default function HomeCarousel({ images }) {
  return (
    <div className="absolute flex w-screen justify-center">
      <Carousel loop>
        {images.map((item, i) => {
          return (
            <div
              className="w-full h-96
              flex flex-[0_0_100%] justify-center items-center
              z-10 "
              key={i}
            >
              <CarouselItem photo={item.photo} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
