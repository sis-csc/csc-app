import Image from "next/image";
import React from "react";

export default function MembersGridItem({ photo, name, role, email }) {
  return (
    <div className="relative flex flex-col">
      <div className="flex w-full h-full">
        {/* Photo */}
        <Image
          className="object-cover"
          src={photo}
          width={800}
          height={800}
          alt={`${name}'s photo`}
        />
      </div>

      <div className="absolute bottom-0 w-full flex flex-col z-20">
        <p className="text-right">{name}</p>
        <p className="text-right">{role}</p>
        <p className="text-left">{email}</p>
      </div>

      {/* <div
        className="absolute bottom-0 w-full h-[80%]  
        origin-bottom-r -rotate-12
      bg-pink-200 z-10"
      ></div> */}
    </div>
  );
}
