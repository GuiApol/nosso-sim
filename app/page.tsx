import { Button } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { Paragraph } from "@/components/ui/Paragraph";
import { Section } from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Section className="min-h-screen flex flex-col items-center justify-center text-center">
        <Heading>
          Raul & Guilherme
        </Heading>

        <Paragraph className="mt-6 max-w-xl">
          06 de janeiro de 2027
          <br />
          Estamos construindo uma experiência inesquecível
          para compartilhar esse momento tão especial com você.
        </Paragraph>

        <Button className="mt-10">
          Em breve
        </Button>
      </Section>
    </main>
  );
}