"use client";

import { CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormData = {
  name: string;
  attendance: "yes" | "no";
  guests: string;
  message: string;
};

const initialForm: FormData = {
  name: "",
  attendance: "yes",
  guests: "0",
  message: "",
};

export function RSVPForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-2xl shadow-black/10 sm:p-12">
        <CheckCircle2
          aria-hidden="true"
          className="mx-auto h-14 w-14 text-[#6d1f32]"
        />

        <h3 className="mt-6 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
          Obrigado pelo retorno!
        </h3>

        <p className="mx-auto mt-5 max-w-md leading-8 text-[#666]">
          Sua resposta foi registrada nesta prévia. Em breve, o formulário será
          conectado ao sistema definitivo de confirmações.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(initialForm);
            setSubmitted(false);
          }}
          className="mt-8 rounded-full border border-[#6d1f32] px-8 py-4 text-sm font-semibold text-[#6d1f32] transition hover:bg-[#6d1f32] hover:text-white"
        >
          Enviar outra resposta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-2xl shadow-black/10 sm:p-10"
    >
      <div>
        <label
          htmlFor="name"
          className="text-sm font-semibold text-[#2b2b2b]"
        >
          Nome completo
        </label>

        <input
          id="name"
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              name: event.target.value,
            }))
          }
          placeholder="Digite seu nome"
          className="mt-3 min-h-14 w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 text-[#1f1f1f] outline-none transition placeholder:text-[#999] focus:border-[#6d1f32]"
        />
      </div>

      <fieldset className="mt-7">
        <legend className="text-sm font-semibold text-[#2b2b2b]">
          Você poderá comparecer?
        </legend>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <label
            className={`cursor-pointer rounded-2xl border px-5 py-4 text-center text-sm font-semibold transition ${
              form.attendance === "yes"
                ? "border-[#6d1f32] bg-[#6d1f32] text-white"
                : "border-black/10 bg-[#f8f6f2] text-[#444]"
            }`}
          >
            <input
              type="radio"
              name="attendance"
              value="yes"
              checked={form.attendance === "yes"}
              onChange={() =>
                setForm((current) => ({
                  ...current,
                  attendance: "yes",
                }))
              }
              className="sr-only"
            />
            Sim, estarei presente
          </label>

          <label
            className={`cursor-pointer rounded-2xl border px-5 py-4 text-center text-sm font-semibold transition ${
              form.attendance === "no"
                ? "border-[#6d1f32] bg-[#6d1f32] text-white"
                : "border-black/10 bg-[#f8f6f2] text-[#444]"
            }`}
          >
            <input
              type="radio"
              name="attendance"
              value="no"
              checked={form.attendance === "no"}
              onChange={() =>
                setForm((current) => ({
                  ...current,
                  attendance: "no",
                  guests: "0",
                }))
              }
              className="sr-only"
            />
            Não poderei comparecer
          </label>
        </div>
      </fieldset>

      {form.attendance === "yes" && (
        <div className="mt-7">
          <label
            htmlFor="guests"
            className="text-sm font-semibold text-[#2b2b2b]"
          >
            Quantidade de acompanhantes
          </label>

          <select
            id="guests"
            name="guests"
            value={form.guests}
            onChange={(event) =>
              setForm((current) => ({
                ...current,
                guests: event.target.value,
              }))
            }
            className="mt-3 min-h-14 w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 text-[#1f1f1f] outline-none transition focus:border-[#6d1f32]"
          >
            <option value="0">Somente eu</option>
            <option value="1">1 acompanhante</option>
            <option value="2">2 acompanhantes</option>
            <option value="3">3 acompanhantes</option>
          </select>
        </div>
      )}

      <div className="mt-7">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[#2b2b2b]"
        >
          Deixe uma mensagem
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((current) => ({
              ...current,
              message: event.target.value,
            }))
          }
          placeholder="Escreva uma mensagem para nós"
          className="mt-3 w-full resize-none rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-[#1f1f1f] outline-none transition placeholder:text-[#999] focus:border-[#6d1f32]"
        />
      </div>

      <button
        type="submit"
        className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#6d1f32] px-8 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#581827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32]"
      >
        Confirmar resposta
      </button>

      <p className="mt-5 text-center text-xs leading-6 text-[#888]">
        Nesta etapa, os dados ainda não são enviados para um banco de dados.
      </p>
    </form>
  );
}