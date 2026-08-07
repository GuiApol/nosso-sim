import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import {
  DASHBOARD_COOKIE_NAME,
  verifyDashboardSession,
} from "@/lib/dashboard-auth";

import { LoginForm } from "./LoginForm";

export default async function DashboardLoginPage() {
  const cookieStore = await cookies();

  const session = cookieStore.get(
    DASHBOARD_COOKIE_NAME,
  )?.value;

  if (verifyDashboardSession(session)) {
    redirect("/painel");
  }

  return <LoginForm />;
}