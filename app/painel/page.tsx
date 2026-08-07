import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  CheckCircle2,
  MessageCircle,
  UserRoundCheck,
  UserRoundX,
} from "lucide-react";

import {
  DASHBOARD_COOKIE_NAME,
  verifyDashboardSession,
} from "@/lib/dashboard-auth";
import {
  getDashboardResponses,
} from "@/lib/dashboard-data";

import { DashboardTable } from "./DashboardTable";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const session = cookieStore.get(
    DASHBOARD_COOKIE_NAME,
  )?.value;

  if (!verifyDashboardSession(session)) {
    redirect("/painel/login");
  }

  const responses =
    await getDashboardResponses();

  const confirmedResponses =
    responses.filter(
      (item) =>
        item.attendance
          .trim()
          .toLowerCase() === "sim",
    );

  const declinedResponses =
    responses.filter(
      (item) =>
        item.attendance
          .trim()
          .toLowerCase() === "não" ||
        item.attendance
          .trim()
          .toLowerCase() === "nao",
    );

  const confirmedPeople =
    confirmedResponses.reduce(
      (total, item) =>
        total + 1 + Number(item.guests || 0),
      0,
    );

  return (
    <main className="min-h-screen bg-[#f8f6f2] px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-6 border-b border-black/10 pb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c8465]">
              Nosso Sim
            </p>

            <h1 className="mt-3 font-[var(--font-heading)] text-5xl font-light text-[#1f1f1f]">
              Painel dos noivos
            </h1>

            <p className="mt-3 text-[#666]">
              Acompanhe as respostas recebidas pelo
              convite.
            </p>
          </div>

          <form
            action="/api/dashboard/logout"
            method="post"
          >
            <button
              type="submit"
              className="rounded-full border border-[#6d1f32] px-7 py-3 text-sm font-semibold text-[#6d1f32] transition hover:bg-[#6d1f32] hover:text-white"
            >
              Sair
            </button>
          </form>
        </header>

        <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            icon={<MessageCircle />}
            label="Respostas"
            value={responses.length}
          />

          <StatCard
            icon={<UserRoundCheck />}
            label="Confirmaram"
            value={confirmedResponses.length}
          />

          <StatCard
            icon={<CheckCircle2 />}
            label="Pessoas confirmadas"
            value={confirmedPeople}
          />

          <StatCard
            icon={<UserRoundX />}
            label="Não poderão ir"
            value={declinedResponses.length}
          />
        </section>
       <DashboardTable responses={responses} />
       <section className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
  {/* cards de estatísticas */}
</section>

<DashboardTable responses={responses} />
      </div>
    </main>
  );
}

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: number;
};

function StatCard({
  icon,
  label,
  value,
}: StatCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-lg shadow-black/5">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
        {icon}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#7c8465]">
        {label}
      </p>

      <p className="mt-2 font-[var(--font-heading)] text-5xl text-[#1f1f1f]">
        {value}
      </p>
    </article>
  );
}

function formatDate(value: string) {
  if (!value) {
    return "—";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "America/Fortaleza",
  }).format(date);
}