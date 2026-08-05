"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";

import {
  fade,
  fadeUp,
  staggerContainer,
} from "@/lib/motion";

export function HeroContent() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center"
    >
      <motion.span
        variants={fade}
        className="mb-6 uppercase tracking-[0.45em] text-sm text-[#7C8465]"
      >
        Nosso Sim
      </motion.span>

      <motion.h1
        variants={fadeUp}
        className="text-7xl md:text-9xl leading-none"
      >
        Guilherme

        <span className="block my-2 text-[#6D1F32]">
          &
        </span>

        Raul
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-8 max-w-xl text-lg leading-8 text-neutral-600"
      >
        Cada história de amor possui um começo.

        <br />

        A nossa escolheu você para fazer parte deste capítulo.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-12 flex gap-5"
      >
        <Button>
          Confirmar Presença
        </Button>

        <Button variant="outline">
          Nossa História
        </Button>
      </motion.div>
    </motion.div>
  );
}