import { generateAccessToken, hashedPassowrd } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import UserModel from "../../../../../models/User";

export async function POST(req) {
  try {
    connectToDB();

    const body = await req.json();
    const { name, username, email, phone, password } = body;

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !name.trim() ||
      !phone.trim()
    ) {
      return Response.json(
        { message: "data is not valid plz completed for all Inputs !!" },
        { status: 422 }
      );
    }

    const isUserExist = await UserModel.findOne({
      $or: [{ username }, { email }, { phone }, { name }],
    });

    if (isUserExist) {
      return Response.json(
        { message: "The Usernname or email or phone exist already !!" },
        { status: 404 }
      );
    }

    const hashedPasswordBody = await hashedPassowrd(password);
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

    return Response.json(
      { message: "user rgister successfully ✔" },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${accessToken};path=/;httpOnly:true`,
        },
      }
    );
  } catch (error) {
    return Response.json({ message: error }, { status: 500 });
  }
}
