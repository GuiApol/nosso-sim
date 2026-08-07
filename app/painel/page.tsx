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

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
          <div className="border-b border-black/10 px-6 py-6 sm:px-8">
            <h2 className="font-[var(--font-heading)] text-3xl text-[#1f1f1f]">
              Confirmações recebidas
            </h2>
          </div>

          {responses.length === 0 ? (
            <div className="px-6 py-16 text-center text-[#777]">
              Nenhuma resposta foi recebida ainda.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[850px] w-full text-left">
                <thead className="bg-[#efe9df] text-xs uppercase tracking-[0.18em] text-[#686868]">
                  <tr>
                    <th className="px-6 py-4">
                      Nome
                    </th>
                    <th className="px-6 py-4">
                      Presença
                    </th>
                    <th className="px-6 py-4">
                      Acompanhantes
                    </th>
                    <th className="px-6 py-4">
                      Mensagem
                    </th>
                    <th className="px-6 py-4">
                      Data
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-black/10">
                  {responses.map((item) => {
                    const confirmed =
                      item.attendance
                        .trim()
                        .toLowerCase() === "sim";

                    return (
                      <tr
                        key={`${item.id}-${item.date}`}
                        className="align-top transition hover:bg-[#f8f6f2]"
                      >
                        <td className="px-6 py-5 font-semibold text-[#262626]">
                          {item.name}
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                              confirmed
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.attendance}
                          </span>
                        </td>

                        <td className="px-6 py-5 text-[#555]">
                          {item.guests}
                        </td>

                        <td className="max-w-sm px-6 py-5 leading-7 text-[#666]">
                          {item.message || "—"}
                        </td>

                        <td className="whitespace-nowrap px-6 py-5 text-sm text-[#777]">
                          {formatDate(item.date)}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </section>
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