"use client";
import useSWR from "swr";
import LoadingSpinner from "../shared/LoadingSpinner";

export default function JoinButton() {
  // swr
  const { data: link , isLoading, error } = useSWR("/api/home/register-link");

  if (isLoading)
    return (
      <div>
        <LoadingSpinner />
      </div>
    );

  const toRegisterLink = () => {
    window.open(link, "_blank");
  }

  return ( 
    link===undefined ? <></> : 
    <button 
      className="bg-orange-200 text-black text-2xl py-4 px-4 rounded"
      onClick={toRegisterLink}
    >
      Click here to join our club!
    </button>
  );

}