
import { listarFotos } from "../../lib/fotos";
import GradeFotos from "./GradeFotos";

export const dynamic = "force-dynamic";

export default function SelecaoFotosPage() {
  const fotos = listarFotos();

  return (
    <main className="min-h-screen bg-[#f7f4ef] px-5 py-10 text-[#29251f]">
      <header className="mx-auto mb-8 max-w-6xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em]">
          Guilherme & Raul
        </p>
        <h1 className="font-serif text-4xl md:text-5xl">
          Nossa seleção de fotos
        </h1>
        <p className="mt-4 text-sm text-neutral-600">
          Clique nas imagens para marcar suas favoritas.
        </p>
      </header>

      <section className="mx-auto max-w-6xl">
        <GradeFotos fotos={fotos} />
      </section>
    </main>
  );
}
