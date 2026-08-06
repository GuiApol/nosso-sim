import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f6f2] px-6">
      <div className="max-w-xl text-center">
        <Image
          src="/images/logo/logo.png"
          alt="Guilherme e Raul"
          width={320}
          height={160}
          className="mx-auto h-auto w-[220px]"
        />

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465]">
          Página não encontrada
        </p>

        <h1 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
          Parece que você seguiu um caminho diferente do nosso.
        </h1>

        <p className="mx-auto mt-7 max-w-md leading-8 text-[#666]">
          Esta página não existe ou pode ter sido movida.
        </p>

        <Link
          href="/"
          className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#6d1f32] px-9 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#581827]"
        >
          Voltar para o convite
        </Link>
      </div>
    </main>
  );
}