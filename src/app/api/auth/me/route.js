import connectToDB from "../../../../../configs/db";
import { cookies } from "next/dist/client/components/headers";
import UserModel from "../../../../../models/User";
import { verifyAccessToken } from "@/utils/auth";

export async function GET(req) {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne(
        { email: tokenPayload.email },
        "-__v -password"
      );
    }
    return Response.json(user);
  } else {
    return Response.json(
      { message: "Not Access !!", data: null },
      { status: 401 }
    );
  }
}
