"use client";

import React from "react";

export default function LinkButton({ link, newpage }) {
  const baseStyle =
    "bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded";

  const handleClickButton = () => {
    const formattedLink = link.includes("://") ? link : `https://${link}`;
    window.open(formattedLink, "_blank");
  };

  return <button onClick={handleClickButton}>{`Link to ${newpage}`}</button>;
}
