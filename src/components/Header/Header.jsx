import React from "react";
import NavBar from "./NavBar";
import MobileNavBar from "./MobileNavBar";

export default function Header() {
  return (
    <div className="">
      <div>
        <NavBar />
      </div>
      <div className="flex md:hidden">
        <MobileNavBar />
      </div>
    </div>
  );
}
