import Image from "next/image";
import React from "react";
import MailIcon from "../ui/MailIcon";

export default function MembersGridItem({ photo, name, role, email }) {
  return (
    <div
      className="relative w-full aspect-[4/5] flex flex-col justify-end shadow-lg overflow-hidden
    border border-gray-200 rounded-lg"
    >
      <div className="flex flex-col px-4 py-2 z-30 ">
        <div className="flex flex-col w-full items-end">
          <p className="text-3xl font-bold">{name}</p>
          <p className="text-xl text-gray-800">{role}</p>
        </div>

        <div className="mt-10 flex items-center">
          <MailIcon />
          <div className="ml-1 flex flex-col items-center">
            <p className="ml-1 text-xl pr-2 text-gray-800">{email}</p>

            <div className="-translate-y-2 w-full border-2 border-gray-800"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 flex w-full h-[90%] z-10">
        <Image
          className="object-cover"
          src={photo}
          width={800}
          height={800}
          alt={`${name}'s photo`}
        />
      </div>

      <div
        className="absolute bottom-0 w-[150%] h-3/4 -rotate-[35deg] translate-y-20 translate-x-2
       bg-gradient-to-r from-orange-400 to-orange-200 z-20"
      ></div>
    </div>
  );
}
