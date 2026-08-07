import { NextResponse } from "next/server";

import { DASHBOARD_COOKIE_NAME } from "@/lib/dashboard-auth";

export async function POST(request: Request) {
  const response = NextResponse.redirect(
    new URL("/painel/login", request.url),
    { status: 303 },
  );

  response.cookies.set({
    name: DASHBOARD_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });

  return response;
}