import { cookies } from "next/dist/client/components/headers";

export async function POST(req) {
  cookies().delete("token");
  return Response.json({ message: "logout is down" });
}
