"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="py-2">
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-[var(--font-heading)] text-2xl text-[#1f1f1f]">
          {question}
        </span>

        <ChevronDown
          aria-hidden="true"
          className={`h-5 w-5 shrink-0 text-[#6d1f32] transition duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr] pb-6 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-3xl leading-8 text-[#666]">
            {answer}
          </p>
        </div>
      </div>
    </article>
  );
}