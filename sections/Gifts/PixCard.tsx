"use client";

import { Check, Copy, Heart, QrCode } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const PIX_KEY =
  "00020126960014br.gov.bcb.pix01366e224ab6-231b-4153-a3b1-bf62771d97b70234Cofrinho de Guilherme  Apolinario 5204000053039865802BR5922Guilherme  Apolinario 6006Trairi61086269000062270523COFROTU3NDcxNzYwMDAwMDI63044329";

export function PixCard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  async function copyPixKey() {
    setError("");

    try {
      await navigator.clipboard.writeText(PIX_KEY);

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setError(
        "Não foi possível copiar o código. Tente selecioná-lo manualmente."
      );
    }
  }

  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-black/10">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Lado esquerdo */}
        <div className="flex min-h-[360px] items-center justify-center bg-[#6d1f32] p-8 text-white sm:p-10">
          <div className="w-full text-center">
            <div className="mx-auto flex aspect-square max-w-[230px] items-center justify-center rounded-[1.75rem] border border-white/20 bg-white p-6 shadow-xl shadow-black/10">
              <div className="text-[#6d1f32]">
                <Image
  src="/images/pix/qr-code.png"
  alt="QR Code PIX para presentear Guilherme e Raul"
  width={220}
  height={220}
  className="mx-auto rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
/>

<p className="mt-5 text-sm font-semibold">
  Escaneie com o aplicativo do seu banco
</p>
              </div>
            </div>

            <p className="mx-auto mt-7 max-w-xs text-sm leading-7 text-white/75">
              Escaneie o QR Code ou copie o código PIX ao lado.
            </p>
          </div>
        </div>

        {/* Lado direito */}
        <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
            <Heart aria-hidden="true" className="h-5 w-5" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.35em] text-[#7c8465]">
            PIX Copia e Cola
          </p>

          <h3 className="mt-4 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
            Com carinho
          </h3>

          <p className="mt-5 leading-8 text-[#666]">
            Contribuir é totalmente opcional.
            <br />
            Sua presença continua sendo o que realmente importa para nós.
          </p>

          <div className="mt-8">
            <p className="text-sm font-semibold text-[#2b2b2b]">
              Código PIX
            </p>

            <div className="mt-3 max-h-32 overflow-y-auto rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4">
              <code
                id="pix-key"
                className="block break-all text-xs leading-6 text-[#2c2c2c] sm:text-sm"
              >
                {PIX_KEY}
              </code>
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="mt-5 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm leading-6 text-red-700"
            >
              {error}
            </div>
          )}

          <button
            type="button"
            onClick={copyPixKey}
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#6d1f32] px-8 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#581827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32]"
          >
            {copied ? (
              <>
                <Check className="h-5 w-5" />
                Código copiado
              </>
            ) : (
              <>
                <Copy className="h-5 w-5" />
                Copiar código PIX
              </>
            )}
          </button>

          <div
            aria-live="polite"
            className={`mt-5 text-center text-sm font-medium transition ${
              copied
                ? "translate-y-0 opacity-100 text-[#6d1f32]"
                : "translate-y-1 opacity-0"
            }`}
          >
            🤍 Obrigado por fazer parte da nossa história.
          </div>
        </div>
      </div>
    </article>
  );
}