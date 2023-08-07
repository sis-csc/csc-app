import { NextResponse } from "next/server";
import { getClubDescription } from "../../../../services/home";

export async function GET() {
  return getClubDescription().then((data) => NextResponse.json(data));
}