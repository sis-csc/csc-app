import React from "react";

export default function LinkButton({ eventName }) {
  const baseStyle =
    "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded";
  
  const handleClickButton = () => {
      window.open(event[0].link.addLink, "_blank");
    };

  return (
    <button onClick={handleClickButton}>
      {event[0].link===undefined ? "No Title" : event[0].link.title}
    </button>
  );
}
