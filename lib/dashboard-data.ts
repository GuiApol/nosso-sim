import "server-only";

export type RSVPResponse = {
  id: number;
  date: string;
  name: string;
  attendance: string;
  guests: number;
  message: string;
};

type AppsScriptResponse = {
  success?: boolean;
  message?: string;
  responses?: RSVPResponse[];
};

export async function getDashboardResponses() {
  const scriptUrl =
    process.env.GOOGLE_SCRIPT_RSVP_URL;

  const dashboardToken =
    process.env.RSVP_DASHBOARD_TOKEN;

  if (!scriptUrl || !dashboardToken) {
    throw new Error(
      "As variáveis do painel não foram configuradas.",
    );
  }

  const url = new URL(scriptUrl);

  url.searchParams.set(
    "token",
    dashboardToken,
  );

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    redirect: "follow",
  });

  if (!response.ok) {
    throw new Error(
      "O Apps Script não respondeu corretamente.",
    );
  }

  const result =
    (await response.json()) as AppsScriptResponse;

  if (!result.success) {
    throw new Error(
      result.message ??
        "Não foi possível carregar as confirmações.",
    );
  }

  return result.responses ?? [];
}