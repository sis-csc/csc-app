"use client";

import React, { useState } from "react";
import ClubLogoText from "./ClubLogoText";
import MobileMenuButton from "./MobileMenuButton";

export default function MobileNavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full flex items-center justify-between mx-auto py-6 px-3">
      <ClubLogoText size="small" />
      <div>
        <MobileMenuButton onClick={handleOnClick} />
      </div>
    </div>
  );
}
