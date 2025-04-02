import { cookies } from "next/dist/client/components/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  cookies().delete("token");
  return NextResponse.json({ message: "Logout is successful" }, { status: 201 });
}