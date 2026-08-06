import { RSVPForm } from "./RSVPForm";
import { Reveal } from "@/components/animations";

export function RSVP() {
  return (
    <section
      id="confirmacao"
      className="bg-[#f8f6f2] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
            Confirmação de presença
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
            Sua presença tornará esse dia ainda mais especial.
          </h2>

          <div className="mt-8 h-px w-20 bg-[#6d1f32]" />

          <p className="mt-8 max-w-xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
            Para nos ajudar com a organização, confirme sua presença e informe
            se haverá acompanhantes.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
            A confirmação poderá ser feita até a data que definirmos mais
            adiante.
          </p>

          <p className="mt-8 font-[var(--font-heading)] text-2xl italic text-[#6d1f32]">
            Mal podemos esperar para celebrar com você.
          </p>
        </div>
        

        <RSVPForm />
      </div></Reveal>
    </section>
  );
}