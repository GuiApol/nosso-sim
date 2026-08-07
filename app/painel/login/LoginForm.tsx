"use client";

import Image from "next/image";
import { LockKeyhole } from "lucide-react";
import {
  FormEvent,
  useState,
} from "react";
import {
  useRouter,
} from "next/navigation";

type LoginResponse = {
  success: boolean;
  message: string;
};

export function LoginForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        "/api/dashboard/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        },
      );

      const result =
        (await response.json()) as LoginResponse;

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Não foi possível entrar.",
        );
      }

      router.replace("/painel");
      router.refresh();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Não foi possível entrar.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6f2] px-6 py-12">
      <div className="w-full max-w-md rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-2xl shadow-black/10 sm:p-10">
        <Image
          src="/images/logo/logo.png"
          alt="Guilherme e Raul"
          width={260}
          height={130}
          className="mx-auto h-auto w-[190px]"
          priority
        />

        <div className="mx-auto mt-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
          <LockKeyhole
            aria-hidden="true"
            className="h-6 w-6"
          />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#7c8465]">
          Área reservada
        </p>

        <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
          Painel dos noivos
        </h1>

        <p className="mt-4 leading-7 text-[#666]">
          Digite a senha para acompanhar as
          confirmações.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 text-left"
        >
          <label
            htmlFor="password"
            className="text-sm font-semibold text-[#2b2b2b]"
          >
            Senha
          </label>

          <input
            id="password"
            type="password"
            required
            value={password}
            disabled={loading}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="Digite a senha"
            className="mt-3 min-h-14 w-full rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 outline-none transition focus:border-[#6d1f32]"
          />

          {error && (
            <div
              role="alert"
              className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-[#6d1f32] px-8 text-sm font-semibold text-white transition hover:bg-[#581827] disabled:cursor-wait disabled:opacity-60"
          >
            {loading
              ? "Entrando..."
              : "Acessar painel"}
          </button>
        </form>
      </div>
    </main>
  );
}