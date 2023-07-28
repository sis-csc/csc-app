"use client";

import React from "react";
import useSWR from "swr";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function EventCalendar() {
  const { data: events, isLoading, error } = useSWR("/api/schedule");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return <div>EventCalendar</div>;
}
