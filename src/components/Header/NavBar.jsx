import React from "react";
import ClubLogoText from "./ClubLogoText";
import Navigation from "./Navigation";

export default function NavBar() {
  return (
    // px는 padding x방향, py는 padding y방향
    <div className="w-full flex items-center mx-auto justify-between px-4 py-6">
      <ClubLogoText />

      <Navigation />
    </div>
  );
}
