// CRUD
// Create Read(GET) Update Delete

// request -> server -> response

// component - api - service

import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ key: "hello" });
}
