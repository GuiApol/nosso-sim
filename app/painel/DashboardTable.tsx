"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { RSVPResponse } from "@/lib/dashboard-data";

type DashboardTableProps = {
  responses: RSVPResponse[];
};

type Filter = "all" | "yes" | "no";

export function DashboardTable({
  responses,
}: DashboardTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const filteredResponses = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return responses.filter((item) => {
      const attendance = item.attendance.trim().toLowerCase();

      const matchesFilter =
        filter === "all" ||
        (filter === "yes" && attendance === "sim") ||
        (filter === "no" &&
          (attendance === "não" || attendance === "nao"));

      const matchesSearch =
        !normalizedSearch ||
        item.name.toLowerCase().includes(normalizedSearch) ||
        item.message.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [filter, responses, search]);

  return (
    <section className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
      <div className="border-b border-black/10 px-6 py-6 sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-[var(--font-heading)] text-3xl text-[#1f1f1f]">
              Confirmações recebidas
            </h2>

            <p className="mt-2 text-sm text-[#777]">
              {filteredResponses.length} de {responses.length} respostas
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="relative block">
              <span className="sr-only">Buscar convidado</span>

              <Search
                aria-hidden="true"
                className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#888]"
              />

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar por nome"
                className="min-h-12 w-full rounded-full border border-black/10 bg-[#f8f6f2] pl-12 pr-5 text-sm outline-none transition focus:border-[#6d1f32] sm:w-64"
              />
            </label>

            <select
              value={filter}
              onChange={(event) =>
                setFilter(event.target.value as Filter)
              }
              aria-label="Filtrar confirmações"
              className="min-h-12 rounded-full border border-black/10 bg-[#f8f6f2] px-5 text-sm outline-none transition focus:border-[#6d1f32]"
            >
              <option value="all">Todas as respostas</option>
              <option value="yes">Confirmados</option>
              <option value="no">Não comparecerão</option>
            </select>
          </div>
        </div>
      </div>

      {filteredResponses.length === 0 ? (
        <div className="px-6 py-16 text-center text-[#777]">
          Nenhuma confirmação encontrada.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">
            <thead className="bg-[#efe9df] text-xs uppercase tracking-[0.18em] text-[#686868]">
              <tr>
                <th className="px-6 py-4">Nome</th>
                <th className="px-6 py-4">Presença</th>
                <th className="px-6 py-4">Acompanhantes</th>
                <th className="px-6 py-4">Mensagem</th>
                <th className="px-6 py-4">Data</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-black/10">
              {filteredResponses.map((item) => {
                const attendance =
                  item.attendance.trim().toLowerCase();

                const confirmed = attendance === "sim";

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