"use client";

// CSR: client-side rendering [keep updating]

import Image from "next/image";
import React from "react";
import useSWR from "swr";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function EventCard({ eventName }) {
  const { data: event, isLoading, error } = useSWR(`/api/event/${eventName}`);

  if (isLoading)
    return (
      <div className="flex">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="mt-2 flex overflow-hidden w-full items-center bg-black pb-2 rounded-lg">
      <div className="flex basis-1/2 h-full">
        <Image
          src={event[0].image}
          width={800}
          height={800}
          alt="Event Photo"
        />
      </div>

      <div
        className="px-5 py-5 overflow-auto basis-1/2 h-full 
      flex items-center justify-center"
      >
        <p className="translate-x-4 sm:translate-x-0 text-white text-sm md:text-xl">
          {event[0].description}
        </p>
      </div>
    </div>
  );
}
