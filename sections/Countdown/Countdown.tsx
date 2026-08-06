"use client";

import { Reveal } from "@/components/animations";
import { CountdownTimer } from "./CountdownTimer";


export function Countdown() {
  return (
    <section
      className="bg-[#1b1a18] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-5 uppercase tracking-[0.45em] text-[#d2c7b3] text-sm">
          Contagem Regressiva
        </p>

        <h2 className="font-[var(--font-heading)] text-5xl sm:text-6xl">
          O grande dia está chegando
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
          Estamos contando os dias para celebrar esse momento tão especial com
          vocês.
        </p>

        <div className="mt-20">
          <CountdownTimer />
        </div>

        <div className="mt-16 h-px bg-white/10" />

        <p className="mt-12 uppercase tracking-[0.35em] text-white/70">
          06 de Janeiro de 2027
        </p>

        <p className="mt-3 text-white/50">
          Fortaleza • Ceará
        </p>
      </div>
      </Reveal>
    </section>
  );
}