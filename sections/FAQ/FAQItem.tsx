
"use client";

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
};

export function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

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

        <motion.span
          animate={{ rotate: open && !shouldReduceMotion ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
          className="flex shrink-0"
        >
          <ChevronDown
            aria-hidden="true"
            className="h-5 w-5 text-[#6d1f32]"
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, height: 0, y: -4 }
            }
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, height: 0, y: -4 }
            }
            transition={{
              duration: shouldReduceMotion ? 0 : 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 leading-8 text-[#666]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
