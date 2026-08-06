"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type LinkItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  links: LinkItem[];
};

export function MobileMenu({
  open,
  onClose,
  links,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-[#1b1a18]/98 px-6 text-white backdrop-blur-xl"
        >
          <div className="mx-auto flex h-full max-w-lg flex-col">
            <div className="flex h-24 items-center justify-between">
              <Image
                src="/images/logo/logo.png"
                alt="Guilherme e Raul"
                width={180}
                height={90}
                className="h-auto w-[140px] brightness-0 invert"
              />

              <button
                type="button"
                onClick={onClose}
                aria-label="Fechar menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label="Navegação para dispositivos móveis"
              className="flex flex-1 flex-col justify-center gap-2"
            >
              {links.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.08 * index,
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-white/10 py-5 font-[var(--font-heading)] text-3xl font-light transition hover:pl-2 hover:text-[#b8c5a0]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pb-10 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                06 de janeiro de 2027
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}