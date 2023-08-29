import { getToken } from "next-auth/jwt";
import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default async function middleware(req: NextRequestWithAuth) {
  const token = await getToken({ req });
  const isAuthenticated = !!token;
  console.log(isAuthenticated);
  if (req.nextUrl.pathname.startsWith("/auth")) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  } else {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  }
}

export const config = { matcher: ["/", "/posts", "/auth"] };
