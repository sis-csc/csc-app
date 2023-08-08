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
        width={size === "medium" ? 100 : size === "small" ? 30 : 100}
        height={size === "medium" ? 100 : size === "small" ? 30 : 100}
      />

      <h1 className="hidden md:block ml-2 text-2xl">
        SIS Community Service Club
      </h1>

      <h1 className="block md:hidden ml-1 text-base">SIS CSC</h1>
    </Link>
  );
}
