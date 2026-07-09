import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const loginUrl = new URL("/login?loggedOut=true", req.url);

  const response = NextResponse.redirect(loginUrl);

  response.cookies.delete("access_token");
  response.cookies.delete("roles");

  return response;
}