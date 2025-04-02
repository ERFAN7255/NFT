import connectToDB from "../../../../../configs/db";
import { cookies } from "next/dist/client/components/headers";
import UserModel from "../../../../../models/User";
import { verifyAccessToken } from "@/utils/auth";
import {NextResponse } from "next/server";

export async function GET() {
  await connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload && typeof tokenPayload === "object" && "email" in tokenPayload) {
      user = await UserModel.findOne(
        {
          $or: [
            { username: tokenPayload.email },
            { email: tokenPayload.email },
          ],
        },
        "-__v -password"
      );
    }
    return NextResponse.json(user, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Not Access !!", data: null },
      { status: 401 }
    );
  }
}