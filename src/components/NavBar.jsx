"use client";

import Link from "next/link";
import React from "react";
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

export default function NavBar() {
  return (
    // px는 padding x방향, py는 padding y방향
    <div className="flex items-center justify-between px-2 py-6">
      <Link href="/">
        <h1 className="text-3xl">SIS Community Service Club</h1>
      </Link>

      <nav>
        {/* ul: list */}
        {/* li: list안의 요소, 항상 unique한 key를 가지고 있어야함 */}
        <ul className="flex items-center gap-10 p-4">
          {menu.map((item, index) => (
            <li key={item.href}>
              <Link href={item.href}>
                <h1 className="text-xl">{item.name}</h1>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
