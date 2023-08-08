"use client";

import useSWR from "swr";
import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function HomeCarousel() {
  const { data: images, isLoading, error } = useSWR("/api/home/carousel");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

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
