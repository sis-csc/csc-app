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
        width={size === "medium" ? 70 : size === "small" ? 30 : 70}
        height={size === "medium" ? 70 : size === "small" ? 30 : 70}
      />

      <div className="flex flex-col justify-center">
        <h1 className="hidden md:block ml-2 text-lg translate-y-1">SIS</h1>
        <h1 className="hidden md:block ml-2 text-lg -translate-y-1">
          Community Service Club
        </h1>
      </div>

      <h1 className="block md:hidden ml-1 text-base">SIS CSC</h1>
    </Link>
  );
}
