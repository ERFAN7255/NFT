import { generateAccessToken, verifyPassword } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";

export async function POST(req) {
  try {
    connectToDB();
    const body = await req.json();
    const { email, username, password } = body;

    if (!password.trim()) {
      return Response.json(
        { message: "data is not valid plz completed for all Inputs !!" },
        { status: 422 }
      );
    }

    const user = await UserModel.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return Response.json({ message: "user not found !!" }, { status: 401 });
    }

    const isCorrectPasswordWithHash = await verifyPassword(
      password,
      user.password
    );

    if (!isCorrectPasswordWithHash) {
      return Response.json(
        { msg: "email or password is not correct !!" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const headers = new Headers();

    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly:true`);

    return Response.json(
      { message: "user loginSuccessfully :))" },
      { status: 201, headers }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
