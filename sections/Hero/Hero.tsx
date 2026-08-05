import { Container } from "@/components/ui/Container";

import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      <HeroBackground />

      <Container>

        <div
          className="
            grid
            min-h-screen
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <HeroContent />

          <div className="relative flex justify-center">

            <div
              className="
                h-[620px]
                w-[450px]
                overflow-hidden
                rounded-[220px]
                bg-white
                shadow-2xl
              "
            >
              FOTO
            </div>

          </div>

        </div>

      </Container>

    </section>
  );
}