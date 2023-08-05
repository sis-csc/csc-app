"use client";

import React from "react";

export default function LinkButton({ link, newpage }) {
  const handleClickButton = () => {
    const formattedLink = link.includes("://") ? link : `https://${link}`;
    window.open(formattedLink, "_blank");
  };

  return <button onClick={handleClickButton}>{`Link to ${newpage}`}</button>;
}
