import { NextResponse } from "next/server";

type RSVPRequest = {
  name?: string;
  attendance?: "yes" | "no";
  guests?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RSVPRequest;

    const name = body.name?.trim();
    const attendance = body.attendance;

    if (!name || !attendance) {
      return NextResponse.json(
        {
          success: false,
          message: "Preencha os campos obrigatórios.",
        },
        {
          status: 400,
        },
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_RSVP_URL;

    if (!scriptUrl) {
      console.error(
        "A variável GOOGLE_SCRIPT_RSVP_URL não foi configurada.",
      );

      return NextResponse.json(
        {
          success: false,
          message: "O serviço de confirmação não está configurado.",
        },
        {
          status: 500,
        },
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        attendance,
        guests: attendance === "yes" ? body.guests ?? "0" : "0",
        message: body.message?.trim() ?? "",
      }),
      cache: "no-store",
    });

    const result = (await response.json()) as {
      success?: boolean;
      message?: string;
    };

    if (!response.ok || !result.success) {
      throw new Error(
        result.message ?? "O Apps Script não confirmou o envio.",
      );
    }

    return NextResponse.json({
      success: true,
      message: "Confirmação registrada com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao registrar RSVP:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Não foi possível enviar sua resposta. Tente novamente.",
      },
      {
        status: 500,
      },
    );
  }
}