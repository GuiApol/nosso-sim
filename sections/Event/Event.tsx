import { CalendarDays, Clock3, MapPin } from "lucide-react";

export function Event() {
  return (
    <section
      id="local"
      className="bg-[#f8f6f2] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
            O grande dia
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
            Um momento especial para celebrar juntos.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#616161] sm:text-lg">
            Em breve, adicionaremos todos os detalhes do local da cerimônia.
            Por enquanto, esta seção já está preparada para receber o endereço,
            horário e rota.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <EventCard
            icon={<CalendarDays aria-hidden="true" />}
            label="Data"
            value="06 de janeiro de 2027"
          />

          <EventCard
            icon={<Clock3 aria-hidden="true" />}
            label="Horário"
            value="A confirmar"
          />

          <EventCard
            icon={<MapPin aria-hidden="true" />}
            label="Local"
            value="Fortaleza, Ceará"
          />
        </div>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-xl shadow-black/5">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex min-h-[390px] items-center justify-center bg-[#ded8cd] px-8 text-center">
              <div>
                <MapPin
                  aria-hidden="true"
                  className="mx-auto h-10 w-10 text-[#6d1f32]"
                />

                <p className="mt-5 font-[var(--font-heading)] text-3xl text-[#1f1f1f]">
                  Mapa em breve
                </p>

                <p className="mx-auto mt-3 max-w-md leading-7 text-[#666]">
                  Quando o local estiver definido, colocaremos aqui o mapa
                  interativo e o botão para abrir a rota.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#7c8465]">
                Informações
              </p>

              <h3 className="mt-4 font-[var(--font-heading)] text-4xl font-light text-[#1f1f1f]">
                Cerimônia civil
              </h3>

              <p className="mt-6 leading-8 text-[#626262]">
                Recomendamos que os convidados cheguem com antecedência para
                que todos possam acompanhar esse momento com tranquilidade.
              </p>

              <div className="mt-8 border-l-2 border-[#6d1f32] pl-5">
                <p className="text-sm font-semibold text-[#1f1f1f]">
                  Endereço
                </p>

                <p className="mt-2 leading-7 text-[#666]">
                  Local e endereço serão informados em breve.
                </p>
              </div>

              <button
                type="button"
                disabled
                className="mt-9 inline-flex min-h-14 w-fit cursor-not-allowed items-center justify-center rounded-full bg-[#6d1f32]/50 px-9 text-sm font-semibold text-white"
              >
                Como chegar
              </button>
            </div>
          </div>
        </div>
      </div>
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