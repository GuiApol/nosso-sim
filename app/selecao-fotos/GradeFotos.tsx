
"use client";

import { useState } from "react";

export default function GradeFotos({ fotos }: { fotos: string[] }) {
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  function alternarFoto(foto: string) {
    setSelecionadas((atuais) =>
      atuais.includes(foto)
        ? atuais.filter((item) => item !== foto)
        : [...atuais, foto]
    );
  }

  return (
    <div>
      <p className="mb-5 text-center text-sm">
        {fotos.length} fotos disponíveis · {selecionadas.length} selecionadas
      </p>

      {fotos.length === 0 ? (
        <p className="rounded-xl bg-white p-6 text-center">
          Nenhuma foto WebP encontrada. Confira a pasta public/images/otimizadas.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {fotos.map((foto) => {
            const ativa = selecionadas.includes(foto);

            return (
              <button
                key={foto}
                type="button"
                onClick={() => alternarFoto(foto)}
                className={`overflow-hidden rounded-xl border-2 bg-white text-left ${
                  ativa ? "border-[#6d1f32]" : "border-transparent"
                }`}
              >
                <img
                  src={`/images/otimizadas/${encodeURIComponent(foto)}`}
                  alt={`Foto ${foto}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover"
                />
                <span className="block truncate px-2 py-2 text-xs">
                  {ativa ? "✓ " : ""}
                  {foto}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {selecionadas.length > 0 && (
        <div className="mt-8 rounded-xl bg-white p-5">
          <h2 className="mb-3 font-serif text-2xl">Minhas favoritas</h2>
          <textarea
            readOnly
            value={selecionadas.join("\n")}
            className="mb-3 min-h-24 w-full rounded border p-3 text-sm"
          />
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(selecionadas.join("\n"))}
            className="rounded-full bg-[#6d1f32] px-5 py-3 text-sm text-white"
          >
            Copiar nomes das fotos
          </button>
        </div>
      )}
    </div>
  );
}
