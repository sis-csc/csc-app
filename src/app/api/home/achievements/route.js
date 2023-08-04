import { NextResponse } from "next/server";
import { getAchievements } from "../../../../services/home";

export async function GET() {
  return getAchievements().then((data) => NextResponse.json(data));
}