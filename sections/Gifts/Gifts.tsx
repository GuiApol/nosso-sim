import { Reveal } from "@/components/animations";
import { Heart } from "lucide-react";

import { PixCard } from "./PixCard";

export function Gifts() {
  return (
    <section
      id="presentes"
      className="relative overflow-hidden bg-[#efe9df] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
              <Heart aria-hidden="true" className="h-6 w-6" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
              Um gesto de carinho
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
              Sua presença será o nosso maior presente.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
              Estar ao nosso lado nesse dia já é motivo de muita felicidade.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
              Mas, caso deseje nos presentear de outra forma, disponibilizamos
              abaixo nossa chave PIX. Toda contribuição será recebida com muito
              carinho e nos ajudará a construir novas memórias nesta etapa.
            </p>

            <p className="mt-7 font-[var(--font-heading)] text-2xl italic text-[#6d1f32]">
              Obrigado por fazer parte da nossa história.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mx-auto mt-14 max-w-3xl">
            <PixCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}