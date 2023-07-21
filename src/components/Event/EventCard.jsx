"use client";
import Image from "next/image";
// photo
// desc
import React from "react";
import useSWR from "swr";

export default function EventCard({ eventName }) {
  const { data: event, isLoading, error } = useSWR(`/api/event/${eventName}`);

  if (isLoading) return <p>Loading...</p>;

  const { image, description } = event[0];

  return (
    <div className="flex items-center bg-slate-400 p-2">
      <Image src={event[0].image} width={300} height={300} alt="Event Photo" />
      <p className="ml-2 text-xl">{event[0].description}</p>
    </div>
  );
}
