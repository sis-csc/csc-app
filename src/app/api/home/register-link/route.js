import { NextResponse } from "next/server";
import { getRegisterLink } from "@/services/home";

export async function GET() {
  return getRegisterLink().then((data) => NextResponse.json(data));
}