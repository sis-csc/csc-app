// image 에러 수정 필요

import React from "react";
import { urlFor } from "../../services/sanity";
import Image from "next/image";

export default function CarouselItem({ image }) {
  console.log(image.asset);
  const { asset } = image.asset;
  console.log(urlFor(image.asset));
  return <Image src={urlFor(image)} fill className="object-cover" alt="alt" />;
}
