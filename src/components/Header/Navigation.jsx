"use client";

import Link from "next/link";
import React, { useState } from "react";
import { menu, subEvents } from "../../utils/navigationMenu";

export default function Navigation({ mode = "desktop" }) {
  const [showSubEvents, setShowSubEvents] = useState(false);

  const baseTextStyle = "text-sm lg:text-base text-black hover:text-slate-500";

  return (
    <ul
      className={`flex ${
        mode === "mobile" && "flex-col"
      } justify-center items-center gap-6 md:gap-9 p-4`}
    >
      {menu.map((item) => (
        <li key={item.href}>
          {item.name === "Events" ? (
            <div className="top-0 flex flex-col">
              <button
                className={`peer text-sm lg:text-base 
                 ${showSubEvents ? "text-slate-500" : "text-black"}`}
                onClick={() => setShowSubEvents(!showSubEvents)}
              >
                Events
              </button>

              <ul
                className={`fixed mt-8 ${
                  showSubEvents ? "flex" : "hidden"
                } peer-hover:flex
               flex-col bg-white drop-shadow-lg p-3`}
              >
                {subEvents.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>
                      <p className={baseTextStyle}>{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <Link href={item.href}>
              <button className={baseTextStyle}>{item.name}</button>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
