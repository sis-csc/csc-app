"use client";

import Image from "next/image";
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";

export default function FooterRight() {
  const navigateToInstagram = () => {
    window.open("https://www.instagram.com/sis_csc/", "_blank");
  };

  return (
    <div>
      <div className="flex items-center">
        <section onClick={navigateToInstagram}>
          <FaInstagramSquare size={40} color="#e05a00" />
        </section>
        <div className="ml-4">
          <Image
            src="/school.png"
            className="object-cover"
            alt="school logo"
            width={60}
            height={60}
          />
        </div>
        <div className="ml-2">
          <a href="https://www.siskorea.org/#">
            <Image
              src="/siskorea.webp"
              className="object-cover"
              alt="school logo"
              width={90}
              height={90}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
