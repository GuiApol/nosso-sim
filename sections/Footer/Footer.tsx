import Image from "next/image";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1b1a18] px-6 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/logo/logo.png"
            alt="Logo Guilherme e Raul"
            width={360}
            height={180}
            className="h-auto w-[220px] brightness-0 invert sm:w-[280px]"
          />

          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.38em] text-white/65 sm:text-sm">
            06 de janeiro de 2027
          </p>

          <div className="mt-9 flex items-center gap-4 text-white/35">
            <span className="h-px w-16 bg-white/20" />

            <Heart
              aria-hidden="true"
              className="h-4 w-4 fill-current text-[#b8c5a0]"
            />

            <span className="h-px w-16 bg-white/20" />
          </div>

          <p className="mt-9 max-w-xl font-[var(--font-heading)] text-2xl font-light italic leading-relaxed text-white/85 sm:text-3xl">
            Obrigado por fazer parte deste capítulo das nossas vidas.
          </p>

          <p className="mt-8 text-sm leading-7 text-white/55">
            Com carinho,
            <br />
            Guilherme + Raul
          </p>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7 text-center">
          <p className="text-xs tracking-wide text-white/40">
            Feito com carinho para celebrar o nosso sim.
          </p>
        </div>
      </div>
    </footer>
  );
}