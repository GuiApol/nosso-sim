
"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { FormEvent } from "react";

type FormData = {
  name: string;
  attendance: "yes" | "no";
  guests: string;
  message: string;
};

type ApiResponse = {
  success: boolean;
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const reduceMotion = useReducedMotion();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (loading) return;

    if (!form.name.trim()) {
      setError("Informe seu nome completo.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          attendance: form.attendance,
          guests: form.attendance === "yes" ? form.guests : "0",
          message: form.message.trim(),
        }),
      });

      const result = (await response.json()) as ApiResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Não foi possível enviar sua resposta."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível enviar sua resposta. Tente novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  function resetForm() {
    setForm(initialForm);
    setSubmitted(false);
    setError("");
  }

  const transition = {
    duration: reduceMotion ? 0 : 0.35,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {submitted ? (
        <motion.div
          key="success"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-2xl shadow-black/10 sm:p-12"
          role="status"
          aria-live="polite"
        >
          <motion.div
            initial={reduceMotion ? { scale: 1 } : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={transition}
          >
            <CheckCircle2
              aria-hidden="true"
              className="mx-auto h-14 w-14 text-[#6d1f32]"
            />
          </motion.div>

          <h3 className="mt-6 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
            Obrigado pelo retorno!
          </h3>

          <p className="mx-auto mt-5 max-w-md leading-8 text-[#666]">
            Sua resposta foi registrada com sucesso. Ficamos muito felizes em
            saber que você fez parte deste momento.
          </p>

          <button
            type="button"
            onClick={resetForm}
            className="mt-8 rounded-full border border-[#6d1f32] px-8 py-4 text-sm font-semibold text-[#6d1f32] transition-colors duration-300 hover:bg-[#6d1f32] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32]"
          >
            Enviar outra resposta
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={transition}
          className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-2xl shadow-black/10 sm:p-10"
        >
          <div>
            <label htmlFor="name" className="text-sm font-semibold text-[#2b2b2b]">
              Nome completo
            </label>

            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={form.name}
              disabled={loading}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Digite seu nome"
              className="mt-3 min-h-14 w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 text-[#1f1f1f] outline-none transition-colors placeholder:text-[#999] focus:border-[#6d1f32] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          <fieldset className="mt-7" disabled={loading}>
            <legend className="text-sm font-semibold text-[#2b2b2b]">
              Você poderá comparecer?
            </legend>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label
                className={`cursor-pointer rounded-2xl border px-5 py-4 text-center text-sm font-semibold transition-colors ${
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
                    setForm((current) => ({ ...current, attendance: "yes" }))
                  }
                  className="sr-only"
                />
                Sim, estarei presente
              </label>

              <label
                className={`cursor-pointer rounded-2xl border px-5 py-4 text-center text-sm font-semibold transition-colors ${
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
              <label htmlFor="guests" className="text-sm font-semibold text-[#2b2b2b]">
                Quantidade de acompanhantes
              </label>

              <select
                id="guests"
                name="guests"
                value={form.guests}
                disabled={loading}
                onChange={(event) =>
                  setForm((current) => ({ ...current, guests: event.target.value }))
                }
                className="mt-3 min-h-14 w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 text-[#1f1f1f] outline-none transition-colors focus:border-[#6d1f32] disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="0">Somente eu</option>
                <option value="1">1 acompanhante</option>
                <option value="2">2 acompanhantes</option>
                <option value="3">3 acompanhantes</option>
              </select>
            </div>
          )}

          <div className="mt-7">
            <label htmlFor="message" className="text-sm font-semibold text-[#2b2b2b]">
              Deixe uma mensagem
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              disabled={loading}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              placeholder="Escreva uma mensagem para nós"
              className="mt-3 w-full resize-none rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4 text-[#1f1f1f] outline-none transition-colors placeholder:text-[#999] focus:border-[#6d1f32] disabled:cursor-not-allowed disabled:opacity-60"
            />
          </div>

          {error && (
            <div
              role="alert"
              className="mt-7 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#6d1f32] px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#581827] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32] disabled:cursor-wait disabled:opacity-70"
          >
            {loading ? (
              <>
                <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />
                Enviando sua resposta...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Confirmar resposta
              </>
            )}
          </button>

          <p className="mt-5 text-center text-xs leading-6 text-[#888]">
            Seus dados serão usados apenas para organizar a confirmação de
            presença.
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
