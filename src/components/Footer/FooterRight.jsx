"use client";

import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import CopyrightText from "./CopyrightText";

export default function FooterRight() {
  const navigateToInstagram = () => {
    window.open("https://www.instagram.com/sis_csc/", "_blank");
  };
  const navigateToSchoolWebsite = () => {
    window.open("https://www.siskorea.org/", "_blank");
  };

  return (
    <div className="mt-4 md:mt-0 py-3 md:py-0 flex flex-col items-center">
      <div className="flex items-center justify-center pl-2">
        <button onClick={navigateToInstagram} className="cursor-pointer">
          <FaInstagramSquare size={40} color="#e05a00" />
        </button>
        <div className="ml-4">
          <button onClick={navigateToSchoolWebsite} className="cursor-pointer">
            <Image
              src="/school.png"
              className="object-cover  cursor-pointer"
              alt="school logo"
              width={60}
              height={60}
            />
          </button>
        </div>
        <div className="ml-2">
          <button onClick={navigateToSchoolWebsite} className="cursor-pointer">
            <Image
              src="/siskorea.webp"
              className="object-cover  cursor-pointer"
              alt="school logo"
              width={90}
              height={90}
            />
          </button>
        </div>
      </div>
      <div className="flex md:hidden mt-4">
        <CopyrightText />
      </div>
    </div>
  );
}
