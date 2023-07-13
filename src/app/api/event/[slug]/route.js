import { getAnnaHouse, getInSchool, getFundraising } from "@/services/event";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  // localhost:3000/api/event/anna
  const name = params.slug;

  switch (name) {
    case "anna":
      return getAnnaHouse().then((data) => NextResponse.json(data));
    case "inschool":
      return getInSchool().then((data) => NextResponse.json(data));
    case "fundraising":
      return getFundraising().then((data) => NextResponse.json(data));
    default:
      return NextResponse.json({ error: "Invalid event name" });
  }
}
