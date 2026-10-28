
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Reveal } from "@/components/animations";

export function Event() {
  return (
    <section
      id="local"
      className="bg-[#f8f6f2] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
              O grande dia
            </p>

            <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
              Um momento especial para celebrar juntos.
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#616161] sm:text-lg">
              Preparamos cada detalhe para compartilhar esse momento tão
              especial com vocês. Confira o local da cerimônia e consulte
              o mapa para planejar sua chegada.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <EventCard
              icon={<CalendarDays aria-hidden="true" />}
              label="Data"
              value="Quarta-feira, 13 de janeiro de 2027 · 15h"
            />

            <EventCard
              icon={<MapPin aria-hidden="true" />}
              label="Local"
              value="Cartório da Messejana, Fortaleza, Ceará"
            />
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              <div className="min-h-[390px] overflow-hidden bg-[#ded8cd] lg:min-h-full">
                <iframe
                  title="Local da cerimônia no Cartório da Messejana"
                  src="https://maps.google.com/maps?q=Cart%C3%B3rio%20Messejana%2C%20Rua%20Santa%20Ros%C3%A1lia%2C%2027%2C%20Fortaleza%20CE&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "390px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c8465]">
                  Informações
                </p>

                <h3 className="mt-4 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
                  Cerimônia civil
                </h3>

                <p className="mt-6 leading-8 text-[#626262]">
                  Nossa cerimônia será às 15h. Recomendamos que os convidados
                  cheguem com antecedência para acompanhar esse momento
                  especial com tranquilidade.
                </p>

                <div className="mt-8 border-l-2 border-[#6d1f32] pl-5">
                  <p className="text-sm font-semibold text-[#1f1f1f]">
                    Endereço
                  </p>

                  <p className="mt-2 leading-7 text-[#666]">
                    Cartório da Messejana, Rua Santa Rosália, 27, Messejana,
                    Fortaleza, CE, 60871-060.
                  </p>
                </div>

                <a
                  href="https://maps.app.goo.gl/PHrP9hLsJ1UhwPkJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-flex min-h-14 w-fit items-center justify-center gap-2 rounded-full bg-[#6d1f32] px-9 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#541728]"
                >
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

type EventCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function EventCard({ icon, label, value }: EventCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-black/10 bg-white p-8 text-center shadow-lg shadow-black/5 transition duration-300 hover:-translate-y-1">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#6d1f32]/10 text-[#6d1f32]">
        {icon}
      </div>

      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#7c8465]">
        {label}
      </p>

      <p className="mt-3 font-[var(--font-heading)] text-2xl text-[#1f1f1f]">
        {value}
      </p>
    </article>
  );
}
