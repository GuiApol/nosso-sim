import { NextResponse } from "next/server";

import {
  createDashboardSession,
  DASHBOARD_COOKIE_NAME,
  verifyDashboardPassword,
} from "@/lib/dashboard-auth";

type LoginRequest = {
  password?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginRequest;
    const password = body.password ?? "";

    if (!password) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe a senha.",
        },
        { status: 400 },
      );
    }

    if (!verifyDashboardPassword(password)) {
      return NextResponse.json(
        {
          success: false,
          message: "Senha incorreta.",
        },
        { status: 401 },
      );
    }

    const session = createDashboardSession();

    const response = NextResponse.json({
      success: true,
      message: "Login realizado com sucesso.",
    });

    response.cookies.set({
      name: DASHBOARD_COOKIE_NAME,
      value: session.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: session.maxAge,
    });

    return response;
  } catch (error) {
    console.error("Erro no login do painel:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Não foi possível acessar o painel.",
      },
      { status: 500 },
    );
  }
}