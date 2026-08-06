import { Reveal } from "@/components/animations";
import { GalleryGrid } from "./GalleryGrid";

export function Gallery() {
  return (
    <section
      id="galeria"
      className="bg-[#f8f6f2] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
              Nossos momentos
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
              Algumas lembranças da nossa história.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
              Em breve, este espaço receberá algumas das fotografias mais
              especiais da nossa caminhada.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </Reveal>
      </div>
    </section>
  );
}