"use client";

import React from "react";

export default function LinkButton({ link }) {
  console.log(link);

  const handleClickButton = () => {
    const formattedLink = link.includes("://") ? link : `https://${link}`;
    window.open(formattedLink, "_blank");
  };

  return <button onClick={handleClickButton}>Link to Google Doc</button>;
}
