"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";

import type { GalleryImage } from "./images";

type GalleryLightboxProps = {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function GalleryLightbox({
  images,
  selectedIndex,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isOpen = selectedIndex !== null;

  function showPrevious() {
    if (selectedIndex === null) return;

    const previousIndex =
      selectedIndex === 0
        ? images.length - 1
        : selectedIndex - 1;

    onChange(previousIndex);
  }

  function showNext() {
    if (selectedIndex === null) return;

    const nextIndex =
      selectedIndex === images.length - 1
        ? 0
        : selectedIndex + 1;

    onChange(nextIndex);
  }

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, selectedIndex]);

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da galeria"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) {
              onClose();
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 py-8 backdrop-blur-xl"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Fotografia anterior"
            className="absolute left-3 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-8"
          >
            <ChevronLeft aria-hidden="true" className="h-7 w-7" />
          </button>

          <motion.div
            key={selectedIndex}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-[72vh] w-full max-w-6xl"
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </motion.div>

          <button
            type="button"
            onClick={showNext}
            aria-label="Próxima fotografia"
            className="absolute right-3 z-30 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-8"
          >
            <ChevronRight aria-hidden="true" className="h-7 w-7" />
          </button>

          <div className="absolute bottom-5 left-1/2 w-[min(90vw,720px)] -translate-x-1/2 text-center text-white">
            {images[selectedIndex].caption && (
              <p className="font-[var(--font-heading)] text-xl font-light sm:text-2xl">
                {images[selectedIndex].caption}
              </p>
            )}

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/55">
              {selectedIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}