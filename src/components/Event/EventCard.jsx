"use client";
import Image from "next/image";
// photo
// desc
import React from "react";
import useSWR from "swr";

export default function EventCard({ eventName }) {
  const { data: event, isLoading, error } = useSWR(`/api/event/${eventName}`);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex items-center bg-black">
      <div className="flex max-w-[50%]">
        <Image
          src={event[0].image}
          width={800}
          height={800}
          alt="Event Photo"
        />
      </div>

      <div className="px-5">
        <p className="text-white text-xl">{event[0].description}</p>
      </div>
    </div>
  );
}
