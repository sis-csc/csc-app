"use client";

import React, { useEffect, useState } from "react";
import ClubLogoText from "./ClubLogoText";
import MobileMenuButton from "./MobileMenuButton";
import MobileMenu from "./MobileMenu";

export default function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, []);

  return (
    <div
      className="w-full flex items-center justify-center 
    mx-auto py-3 px-3 bg-gray-100"
    >
      <div className="absolute left-0 pl-4 z-40">
        <MobileMenuButton showMenu={showMenu} onClick={handleOnClick} />
      </div>

      <ClubLogoText size="small" />

      {showMenu && (
        <div className="absolute top-0 w-full h-[350px] z-30">
          <MobileMenu showMenu={showMenu} onClick={handleOnClick} />
        </div>
      )}
    </div>
  );
}
