"use client";
import useSWR from "swr";

export default function JoinButton() {
  // swr
  const { data: link , isLoading, error } = useSWR("/api/home/register-link");

  if (isLoading) return <p>Loading...</p>;

  const toRegisterLink = () => {
    window.open(link, "_blank");
  }

  return ( 
    link===undefined ? <></> : 
    <button onClick={toRegisterLink}>
      Click here to join our club!
    </button>
  );

}