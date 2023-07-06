// /api/members

// 부동산 중개인: component에게서 member를 모두 가져와달라는 request를 받고
// service의 getAllMembers를 호출
// service로부터 받은 데이터를 예쁘게 json으로 포맷해서 component에게 response를 보내줌
import { getAllMembers } from "@/services/member";
import { NextResponse } from "next/server";

export async function GET() {
  return getAllMembers().then((data) => NextResponse.json(data));
}
