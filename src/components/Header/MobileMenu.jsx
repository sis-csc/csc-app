import React from "react";
import Navigation from "./Navigation";

export default function MobileMenu({ showMenu, onClick }) {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-gray-100">
      <Navigation mode="mobile" />
    </div>
  );
}
