import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    // Credential protect
    if (req.nextUrl.pathname.startsWith("/auth")) {
      return NextResponse.redirect(new URL("/forbidden", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        return Boolean(token);
      },
    },
  }
);

export const config = { matcher: ["/", "/posts", "/auth"] };
