"use client";

import React from "react";
import useSWR from "swr";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function LinkButton({ eventName }) {
  const { data: event, isLoading, error } = useSWR(`/api/event/${eventName}`);

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  console.log(event)

  const handleClickButton = () => {
      window.open(event[0].link.addLink, "_blank");
    };

  return (
    <button onClick={handleClickButton}>
      {event[0].link===undefined ? "No Title" : event[0].link.title}
    </button>
  );
}
