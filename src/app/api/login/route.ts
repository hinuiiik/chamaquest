import { NextResponse } from "next/server";

// ✅ Correct `POST` function for App Router
export async function POST(req: Request) {
  console.log("Raise up!");

  const data = await req.json();
  console.log(data);

  return NextResponse.json({ status: 201 });
}

// ✅ Correct `GET` function for App Router
export async function GET(req: Request) {
  console.log("North Carolina!");

  return NextResponse.json({ status: 201 });
}
