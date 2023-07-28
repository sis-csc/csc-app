import { NextResponse } from "next/server";
import { getAllSchedule } from "../../../services/schedule";

export async function GET() {
  return getAllSchedule().then((data) => NextResponse.json(data));
}
