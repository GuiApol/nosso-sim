import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Imagem temporária de fundo */}
      <Image
        src="/images/hero/foto-casal.jpg"
        alt="Imagem temporária representando o casal"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-center"
      />

      {/* Camada geral para escurecer a fotografia */}
      <div className="absolute inset-0 z-10 bg-black/25" />

      {/* Gradiente mais escuro no lado esquerdo */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

      {/* Gradiente inferior */}
      <div className="absolute inset-x-0 bottom-0 z-10 h-52 bg-gradient-to-t from-black/55 to-transparent" />


      {/* Conteúdo principal */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-6 pb-20 pt-36 sm:px-8 sm:pt-40 lg:px-12">
        <div className="max-w-2xl text-center text-white lg:text-left">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.48em] text-white/85 sm:text-sm">
            Nosso Sim
          </p>

          {/* Logo */}
          <Image
            src="/images/logo/logo.png"
            alt="Logo Guilherme e Raul"
            width={560}
            height={260}
            priority
            className="mx-auto h-auto w-[250px] brightness-0 invert sm:w-[340px] lg:mx-0 lg:w-[450px]"
          />

          {/* Data */}
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.38em] text-white/85 sm:text-sm">
            06 <span className="mx-2 text-white/50">de</span> Janeiro
            <span className="mx-2 text-white/50">de</span> 2027
          </p>

          {/* Frase */}
          <p className="mt-8 max-w-xl text-xl italic leading-relaxed text-white/90 sm:text-2xl">
            Celebrando o começo de um novo capítulo.
          </p>

          {/* Botões */}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#confirmacao"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#6d1f32] px-10 py-4 text-sm font-semibold text-white shadow-lg shadow-black/15 transition duration-300 hover:-translate-y-1 hover:bg-[#581827] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Confirmar presença
            </a>

            <a
              href="#historia"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/70 bg-white/10 px-10 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#1f1f1f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Nossa história
            </a>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#historia"
        aria-label="Ir para a seção Nossa História"
        className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-white/85 transition hover:text-white"
      >
        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.32em] sm:block">
          Descubra
        </span>

        <ChevronDown
          aria-hidden="true"
          className="h-8 w-8 animate-bounce"
        />
      </a>
    </section>
  );
}