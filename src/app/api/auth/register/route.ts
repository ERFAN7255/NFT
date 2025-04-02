import { generateAccessToken, hashedPassword } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    await connectToDB();

    const body = await req.json();
    const { name, username, email, phone, password } = body;

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !phone.trim()
    ) {
      return NextResponse.json(
        { message: "Data is not valid. Please complete all inputs!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ username }, { email }, { phone }, { name }],
    });

    if (isUserExist) {
      return NextResponse.json(
        { message: "The username, email, or phone already exists!" },
        { status: 409 }
      );
    }

    const hashedPasswordBody = await hashedPassword(password);
    const accessToken = generateAccessToken({ email });

    const users = await UserModel.find({});

    await UserModel.create({
      name,
      username,
      email,
      phone,
      password: hashedPasswordBody,
      role: users.length > 0 ? "USER" : "ADMIN",
    });

    return NextResponse.json(
      { message: "User registered successfully ✔" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${accessToken}; Path=/; HttpOnly; Secure`,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred during registration.", error: String(error) },
      { status: 500 }
    );
  }
}