import Link from "next/link";
import React from "react";
import { menu, subEvents } from "../../utils/navigationMenu";

export default function Navigation({ mode = "desktop" }) {
  return (
    <ul
      className={`flex ${
        mode === "mobile" && "flex-col"
      } justify-center items-center gap-6 md:gap-9 p-4`}
    >
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
  );
}
