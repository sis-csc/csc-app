import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ClubLogoText({ size = "medium" }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/club_logo.png"
        className="object-cover"
        alt="club logo"
        width={size === "medium" ? 100 : size === "small" ? 50 : 100}
        height={size === "medium" ? 100 : size === "small" ? 50 : 100}
      />

      <h1 className="ml-1 md:ml-2 text-lg md:text-2xl lg:text-3xl">
        SIS Community Service Club
      </h1>
    </Link>
  );
}
