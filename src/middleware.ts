import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/my-account/:path*"],
};

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get("token")?.value;

  if (!isLoggedIn && request.nextUrl.pathname === "/my-account") {
    return NextResponse.redirect(new URL("/login-register", request.url));
  }

  return NextResponse.next();
}
