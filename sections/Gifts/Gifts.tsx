import { Heart } from "lucide-react";
import { PixCard } from "./PixCard";
import { Reveal } from "@/components/animations";

export function Gifts() {
  return (
    <section
      id="presentes"
      className="bg-[#efe9df] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
            <Heart aria-hidden="true" className="h-6 w-6" />
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
            Um gesto de carinho
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
            Se desejar nos presentear
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
            O maior presente para nós será celebrar esse momento ao lado de
            pessoas tão especiais.
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
            Caso queira contribuir com o início da nossa nova etapa,
            disponibilizamos uma chave PIX. Todo gesto será recebido com muito
            carinho e gratidão.
          </p>

          <p className="mt-7 font-[var(--font-heading)] text-2xl italic text-[#6d1f32]">
            Cada gesto de carinho ilumina o começo da nossa nova história.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-xl">
          <PixCard />
        </div>
      </div>
      </Reveal>
    </section>
  );
}