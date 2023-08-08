import Image from "next/image";
import React from "react";
import MemberEmail from "./MemberEmail";

export default function MembersGridItem({ photo, name, role, email }) {
  return (
    <div
      className="relative w-full aspect-[4/5] 
    flex flex-col justify-end overflow-hidden
    border border-gray-200 rounded-xl shadow-lg
    "
    >
      <div className="flex flex-col px-4 py-2 z-10 ">
        <div className="flex flex-col w-full items-end">
          <p className="text-[18px] md:text-[21px] lg:text-[26px] font-bold">
            {name}
          </p>
          <p
            className="-translate-y-2 
            text-[13px] md:text-[14px] lg:text-[18px]
            text-black opacity-70"
          >
            {role}
          </p>
        </div>

        <MemberEmail email={email} />
      </div>

      <div className="absolute top-0 flex w-full h-[85%] z-10">
        <Image
          className="object-cover"
          src={photo}
          width={800}
          height={800}
          alt={`${name}'s photo`}
        />
      </div>

      <div
        className="absolute bottom-0 w-[150%] h-3/4 -rotate-[35deg] 
        translate-y-[92px] md:translate-y-[90px] translate-x-2
       bg-gradient-to-r from-orange-400/90 via-orange-300/70 to-orange-300
       z-20 backdrop-blur-md"
      ></div>
    </div>
  );
}
