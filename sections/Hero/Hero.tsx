import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[#f8f6f2]" />

      {/* Gradiente */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/30 via-transparent to-[#f8f6f2]" />

      <Container>
        <div className="flex flex-col items-center text-center">

          <span className="mb-4 tracking-[0.4em] uppercase text-sm text-[#7C8465]">
            Nosso Sim
          </span>

          <h1 className="text-6xl md:text-8xl font-light leading-none">
            Raul
            <br />
            <span className="text-[#6D1F32]">&</span>
            <br />
            Guilherme
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Cada história de amor é única.
            <br />
            A nossa continuará para sempre.
          </p>

          <p className="mt-10 text-[#6D1F32] uppercase tracking-[0.3em]">
            06 de Janeiro de 2027
          </p>

          <Button className="mt-12">
            Confirmar presença
          </Button>

        </div>
      </Container>
    </section>
  );
}