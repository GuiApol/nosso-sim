import { Container } from "@/components/ui/Container";

export function Navbar() {
  return (
    <header className="fixed top-6 left-0 z-50 w-full">
      <Container>
        <nav className="glass flex h-16 items-center justify-between rounded-full px-8">
          <span className="text-xl font-semibold">
            Raul & Guilherme
          </span>

          <ul className="hidden gap-8 md:flex">
            <li>História</li>
            <li>Evento</li>
            <li>Galeria</li>
            <li>Presentes</li>
            <li>RSVP</li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}