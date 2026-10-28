import { FAQItem } from "./FAQItem";
import { Reveal } from "@/components/animations";


const questions = [
  {
    question: "Existe algum traje recomendado?",
    answer:
      "Fiquem à vontade! Pedimos apenas algo leve e confortável, porque o dia em Fortaleza costuma ser bem quente.",
  },
  {
    question: "Haverá recepção ou festa depois?",
    answer:
      "Não. Nossa cerimônia será íntima, só com pessoas muito especiais, e não haverá recepção após o momento no cartório.",
  },
  {
    question: "Posso tirar fotos?",
    answer:
      "Teremos fotógrafo registrando tudo, então fiquem à vontade para fazer seus registros também. Só pedimos que não atrapalhem o trabalho dele.",
  },
  {
    question: "Posso levar acompanhante?",
    answer:
      "Na confirmação de presença, informe o nome de quem vai com você.",
  },
  {
    question: "Até quando posso confirmar presença?",
    answer:
      "A confirmação de presença deve ser feita até 13 de dezembro de 2026. Recomendamos confirmar assim que possível para nos ajudar com a organização.",
  },
  {
    question: "É obrigatório contribuir pelo PIX?",
    answer:
      "Não. Sua presença já é muito importante para nós. A contribuição é completamente opcional.",
  },
];


export function FAQ() {
  return (
    <section
      id="duvidas"
      className="bg-[#efe9df] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <Reveal>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.42em] text-[#7c8465] sm:text-sm">
            Perguntas frequentes
          </p>

          <h2 className="mt-5 font-[var(--font-heading)] text-5xl font-light leading-tight text-[#1f1f1f] sm:text-6xl">
            Algumas informações importantes.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#5f5f5f] sm:text-lg">
            Reunimos aqui algumas respostas para ajudar você a se preparar para
            esse momento.
          </p>
        </div>

        <div className="mt-14 divide-y divide-black/10 rounded-[2rem] border border-black/10 bg-white px-6 shadow-2xl shadow-black/5 sm:px-9">
          {questions.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      </Reveal>
    </section>
  );
}