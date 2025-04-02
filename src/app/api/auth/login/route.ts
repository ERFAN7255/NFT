import { generateAccessToken, verifyPassword } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDB();
    const body = await req.json();
    const { email, username, password } = body;

    if (!password.trim()) {
      return NextResponse.json(
        { message: "Data is not valid. Please complete all inputs!" },
        { status: 422 }
      );
    }

    const user = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return NextResponse.json({ message: "User not found!" }, { status: 401 });
    }

    const isCorrectPasswordWithHash = await verifyPassword(
      password,
      user.password
    );

    if (!isCorrectPasswordWithHash) {
      return NextResponse.json(
        { message: "Email or password is not correct!" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const headers = new Headers();

    headers.append("Set-Cookie", `token=${accessToken}; Path=/; HttpOnly; Secure`);

    return NextResponse.json(
      { message: "User logged in successfully!" },
      { status: 201, headers }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during login.", error: String(error) },
      { status: 500 }
    );
  }
}