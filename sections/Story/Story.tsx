
import Image from "next/image";
import { Reveal } from "@/components/animations";

export function Story() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-[#f8f6f2] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465]">
              Nossa história
            </p>

            <h2 className="max-w-xl font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
              Toda grande história começa com um encontro.
            </h2>

            <div className="mt-8 h-px w-20 bg-[#6d1f32]" />

            <p className="mt-8 max-w-xl text-base leading-8 text-[#565656] sm:text-lg">
              Nossa história começou pelas redes sociais, mas, desde o
              primeiro encontro, parecia que já nos conhecíamos há muito
              tempo. Foi um match que trouxe uma conexão especial, uma paz
              difícil de explicar e a vontade de estar cada vez mais perto.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#565656] sm:text-lg">
              Foi quando deixei Raul na rodoviária que percebi o quanto ele
              já significava para mim. Ao vê-lo partir, senti que algo estava
              faltando e as lágrimas vieram. Naquele momento, entendi que sua
              presença já fazia parte de mim.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#565656] sm:text-lg">
              E foi assim, entre encontros, saudade e amor, que começamos a
              construir a nossa história.
            </p>

            <p className="mt-8 font-[var(--font-heading)] text-2xl italic text-[#6d1f32]">
              Agora, queremos celebrar o próximo capítulo: a nossa vida juntos.
            </p>
          </div>
        </Reveal>

        
<Reveal direction="left" delay={0.15}>
  <div className="relative">
    <div className="absolute -left-5 -top-5 hidden h-full w-full rounded-[2rem] border border-[#7c8465]/40 lg:block" />

    <div className="story-photo-reveal relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10">
      <Image
        src="/images/otimizadas/DSC02392.webp"
        alt="Um registro especial da história de Guilherme e Raul"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </div>
  </div>
</Reveal>

      </div>
    </section>
  );
}
