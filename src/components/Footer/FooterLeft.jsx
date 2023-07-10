import Image from "next/image";
import React from "react";
import FooterLeftInfo from "./FooterLeftInfo";
import CopyrightText from "./CopyrightText";

export default function FooterLeft() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center my-2">
        <Image
          src="/club_logo.png"
          className="object-cover"
          alt="club logo"
          width={100}
          height={100}
        />
        <p className="text-xl md:text-2xl ml-[10px]">
          SIS Community Service Club
        </p>
      </div>

      <FooterLeftInfo />

      <div className="hidden md:flex ml-[10px] my-1">
        <CopyrightText />
      </div>
    </div>
  );
}
