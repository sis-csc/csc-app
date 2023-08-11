import Image from "next/image";
import React from "react";
import { urlFor } from "../../services/sanity";

export default function AchievementsItem({ title, photo, description }) {
  // styling 필요
  // image undefined error 수정 필요
  return (
    <div className="flex w-full items-center pb-2 bg-yellow-200">
      <div className="flex bg-blue-500 min-w-[50%]">
        <Image
          className="object-cover"
          src={photo}
          width={800}
          height={800}
          alt={`${title} image`}
        />
      </div>
      <div className="flex-grow text-center px-5 overflow-auto min-w-[50%]">
        <p className="text-2xl mt-4 mb-3">{title}</p>
        <p className="text-gray-600 md:text-xl">{description}</p>
      </div>      
    </div>
  );
}
