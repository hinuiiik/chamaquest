import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: NextApiResponse) {
  console.log("Raise up!");

  const data = await req.json();
  console.log(data);

  return NextResponse.json({ status: 201 });
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.status(405).send({ message: "No." });
    return;
  }

  console.log("North Carolina!");
  const data = req.body;

  return NextResponse.json({ status: 201 });
}
