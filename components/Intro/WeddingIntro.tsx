"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const INTRO_STORAGE_KEY = "nosso-sim-intro-viewed";

export function WeddingIntro() {
  const [visible, setVisible] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const alreadyViewed =
      window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (alreadyViewed || reducedMotion) {
      setReady(true);
      return;
    }

    setVisible(true);
    setReady(true);

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      closeIntro();
    }, 5200);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  function closeIntro() {
    window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    document.body.style.overflow = "";
    setVisible(false);
  }

  if (!ready) {
    return null;
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#1b1a18] px-6 text-white"
        >
          {/* Luzes suaves */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#6d1f32]/30 blur-[120px]"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1.1, 0.95, 1.1],
              opacity: [0.1, 0.24, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[#b8c5a0]/20 blur-[140px]"
          />

          <div className="relative z-10 mx-auto w-full max-w-3xl text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xs font-semibold uppercase tracking-[0.48em] text-white/55 sm:text-sm"
            >
              Nosso Sim
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.9,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8"
            >
              <Image
                src="/images/logo/logo.png"
                alt="Guilherme e Raul"
                width={520}
                height={240}
                priority
                className="mx-auto h-auto w-[250px] brightness-0 invert sm:w-[360px]"
              />
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{
                delay: 1.8,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-9 h-px w-24 origin-center bg-white/35"
            />

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.35,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 text-xs font-semibold uppercase tracking-[0.34em] text-white/70 sm:text-sm"
            >
              06 de janeiro de 2027
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-7 max-w-xl font-[var(--font-heading)] text-2xl font-light italic leading-relaxed text-white/85 sm:text-3xl"
            >
              Dois caminhos que se encontraram. Um futuro que escolhemos
              construir juntos.
            </motion.p>
          </div>

          <motion.button
            type="button"
            onClick={closeIntro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
            }}
            className="absolute bottom-8 right-6 z-20 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/65 backdrop-blur-md transition hover:border-white/40 hover:bg-white/10 hover:text-white sm:right-8"
          >
            Pular introdução
          </motion.button>

          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 5.2,
              ease: "linear",
            }}
className="absolute -bottom-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-[var(--olive)]/30 blur-[140px]"          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}