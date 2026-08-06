"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type GalleryLightboxProps = {
  images: GalleryImage[];
  selectedImage: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function GalleryLightbox({
  images,
  selectedImage,
  onClose,
  onChange,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (selectedImage === null) {
      return;
    }

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

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  if (selectedImage === null) {
    return null;
  }

  function showPrevious() {
    const previous =
      selectedImage === 0 ? images.length - 1 : selectedImage - 1;

    onChange(previous);
  }

  function showNext() {
    const next =
      selectedImage === images.length - 1 ? 0 : selectedImage + 1;

    onChange(next);
  }

  const image = images[selectedImage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Visualização da galeria"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-8 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar galeria"
        className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black"
      >
        <X aria-hidden="true" className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Imagem anterior"
        className="absolute left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black sm:left-8"
      >
        <ChevronLeft aria-hidden="true" className="h-7 w-7" />
      </button>

      <div className="relative h-[75vh] w-full max-w-6xl">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-contain"
        />
      </div>

      <button
        type="button"
        onClick={showNext}
        aria-label="Próxima imagem"
        className="absolute right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black sm:right-8"
      >
        <ChevronRight aria-hidden="true" className="h-7 w-7" />
      </button>

      <p className="absolute bottom-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/60">
        {selectedImage + 1} / {images.length}
      </p>
    </div>
  );
}