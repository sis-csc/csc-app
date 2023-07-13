"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ClubLogoText from "./ClubLogoText";
// "/": homepage

// 1. Website name
// 2. Menu: About, Events, Schedule, Members

const menu = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Schedule",
    href: "/schedule",
  },
  {
    name: "Members",
    href: "/members",
  },
];

export default function NavBar() {
  return (
    // px는 padding x방향, py는 padding y방향
    <div className="w-full flex items-center mx-auto justify-between px-4 py-6">
      <ClubLogoText />

      <nav>
        {/* ul: list */}
        {/* li: list안의 요소, 항상 unique한 key를 가지고 있어야함 */}
        <ul className="flex items-center gap-9 p-4">
          {menu.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href}>
                <button
                  className="text-lg lg:text-xl 
                text-black hover:text-slate-500"
                >
                  {item.name}
                </button>
              </Link>
            </li>
          ))}
          <div>
            <button class="peer hover:text-slate-500 text-lg lg:text-xl">Events</button>
            <div className="hidden peer-hover:flex hover:flex
            w-[200px]
            flex-col bg-white drop-shadow-lg">
                <Link class="px-5 hover:bg-gray-200" href="/events/inschool">
                <h1>In-School</h1>
                </Link>
                <Link class="px-5 hover:bg-gray-200" href="/events/annashouse">
                <h1>Anna's House</h1>
                </Link>
                <Link class="px-5 hover:bg-gray-200" href="/events/fundraising">
                <h1>Fundraising</h1>
                </Link>
            </div>
        </div>
        </ul>
      </nav>

    </div>
  );
}
