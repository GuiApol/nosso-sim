"use client";

import { Check, Copy, QrCode } from "lucide-react";
import { useState } from "react";

const PIX_KEY = "6e224ab6-231b-4153-a3b1-bf62771d97b7";

export function PixCard() {
  const [copied, setCopied] = useState(false);

  async function copyPixKey() {
    try {
      await navigator.clipboard.writeText(PIX_KEY);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-2xl shadow-black/10">
      <div className="bg-[#6d1f32] px-8 py-7 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
          Chave PIX
        </p>

        <h3 className="mt-3 font-[var(--font-heading)] text-3xl font-light">
          Com carinho
        </h3>
      </div>

      <div className="p-8 sm:p-10">
        <div className="mx-auto flex aspect-square max-w-[220px] items-center justify-center rounded-[1.5rem] border border-dashed border-[#6d1f32]/35 bg-[#f8f6f2] text-[#6d1f32]">
          <div className="text-center">
            <QrCode aria-hidden="true" className="mx-auto h-12 w-12" />

            <p className="mt-4 text-sm font-medium">
              QR Code em breve
            </p>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#7c8465]">
            Chave
          </p>

          <div className="mt-3 rounded-2xl border border-black/10 bg-[#f8f6f2] px-5 py-4">
            <p className="break-all text-center text-sm font-medium text-[#2c2c2c] sm:text-base">
              {PIX_KEY}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={copyPixKey}
          className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#6d1f32] px-8 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#581827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32]"
        >
          {copied ? (
            <>
              <Check aria-hidden="true" className="h-5 w-5" />
              Obrigado pelo carinho!
            </>
          ) : (
            <>
              <Copy aria-hidden="true" className="h-5 w-5" />
              Copiar chave PIX
            </>
          )}
        </button>

        <p className="mt-5 text-center text-sm leading-6 text-[#777]">
          Contribuir é totalmente opcional. Sua presença já significa muito
          para nós.
        </p>
      </div>
    </article>
  );
}