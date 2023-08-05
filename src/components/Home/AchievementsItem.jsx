import Image from "next/image";
import React from "react";
import { urlFor } from "../../services/sanity";

export default function AchievementsItem({ title, image, description }) {
  // styling 필요
  // image undefined error 수정 필요
  return (
    <div className="flex flex-col justify-center">
      <p>{title}</p>
      <div className="flex">
        <Image
          className="object-cover"
          src={urlFor(image)}
          width={800}
          height={800}
          alt={`${title} image`}
        />
      </div>
      <p className="text-black">{description}</p>
    </div>
  );
}
