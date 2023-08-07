"use client";
import useSWR from "swr";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function ClubDescription() {

  const { data: description, isLoading, error } = useSWR("/api/home/club-description");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="bg-black p-4 w-screen mx-auto">
        <h1 className="text-orange-500 text-2xl font-bold">
          What does Community Service Club do?
        </h1>
        <div className="text-white">{description}</div>
    </div>
  )
}
