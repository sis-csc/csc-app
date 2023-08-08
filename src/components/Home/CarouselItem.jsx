// image 에러 수정 필요

import React from "react";
import Image from "next/image";

export default function CarouselItem({ photo }) {
  return (
    <div className="flex">
      <Image
        src={photo}
        className="object-cover"
        width={800}
        height={800}
        alt="alt"
      />
    </div>
  );
}
