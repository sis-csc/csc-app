import React from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

export default function Header() {
  return (
    <div className="flex">
      <div className="hidden md:block w-full">
        <NavBar />
      </div>
      <div className="fixed top-0 w-full block md:hidden z-10">
        <MobileNavBar />
      </div>
    </div>
  );
}
