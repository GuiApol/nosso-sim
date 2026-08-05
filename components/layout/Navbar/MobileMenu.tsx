"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type LinkItem = {
  href: string;
  label: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  links: LinkItem[];
};

export function MobileMenu({ open, onClose, links }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 text-white"
          >
            <X size={34} />
          </button>

          <div className="flex h-full flex-col items-center justify-center gap-10">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="text-3xl font-[var(--font-heading)] text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}