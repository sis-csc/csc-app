"use client";

import useSWR from "swr";
import React from "react";
import Carousel from "./Carousel";
import CarouselItem from "./CarouselItem";

export default function HomeCarousel() {
  const { data: images, isLoading, error } = useSWR("/api/home/carousel");

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="absolute flex w-screen justify-center">
      <Carousel loop>
        {images[0].map((item, i) => {
          return (
            <div
              className="w-full h-96
              flex flex-[0_0_100%] justify-center items-center bg-slate-200
              z-10 "
              key={i}
            >
              {/* <CarouselItem image={item} /> */}
              <p className="text-3xl">{`item ${i}`}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
