import { NextResponse } from "next/server";
import { getCarouselImages } from "@/services/home";

export async function GET() {
  return getCarouselImages().then((data) => NextResponse.json(data));
}
