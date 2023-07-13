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
    name: "Events",
    href: "/events",
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

const subEvents = [
  {
    name: `Anna's House`,
    href: "/events/annashouse",
  },
  {
    name: "In-School Activities",
    href: "/events/inschool",
  },
  {
    name: "Fundraising",
    href: "/events/fundraising",
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
              {item.name === "Events" ? (
                <div className="flex flex-col top-0">
                  <button
                    className="peer text-lg lg:text-xl 
                text-black"
                  >
                    Events
                  </button>

                  <ul
                    className="fixed mt-8 hidden peer-hover:flex hover:flex
               flex-col bg-white drop-shadow-lg p-2"
                  >
                    {subEvents.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>
                          <p
                            className="text-md lg:text-lg 
                text-black hover:text-slate-500"
                          >
                            {item.name}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link href={item.href}>
                  <button
                    className="text-lg lg:text-xl 
                  text-black hover:text-slate-500"
                  >
                    {item.name}
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
