
"use client";

import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";
import { galleryImages } from "./images";

export function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentImage = galleryImages[activeIndex];

  function previousImage() {
    setActiveIndex((index) =>
      index === 0 ? galleryImages.length - 1 : index - 1
    );
  }

  function nextImage() {
    setActiveIndex((index) =>
      index === galleryImages.length - 1 ? 0 : index + 1
    );
  }

  if (!currentImage) return null;

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="relative mx-auto max-w-3xl">
          <button
            type="button"
            onClick={() => setSelectedIndex(activeIndex)}
            aria-label={`Ampliar fotografia ${activeIndex + 1}`}
            className="group relative block aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-[#e7eadf] shadow-xl shadow-black/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32] sm:aspect-[16/10]"
          >
            <img
              key={currentImage.src}
              src={currentImage.src}
              alt={currentImage.alt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                Nossos momentos
              </p>

              {currentImage.caption && (
                <p className="mt-2 font-[var(--font-heading)] text-xl font-light sm:text-2xl">
                  {currentImage.caption}
                </p>
              )}
            </div>
          </button>

          <button
            type="button"
            onClick={previousImage}
            aria-label="Fotografia anterior"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f6f2]/95 text-2xl text-[#6d1f32] shadow-md transition hover:bg-white sm:-left-6"
          >
            &#8249;
          </button>

          <button
            type="button"
            onClick={nextImage}
            aria-label="Próxima fotografia"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f8f6f2]/95 text-2xl text-[#6d1f32] shadow-md transition hover:bg-white sm:-right-6"
          >
            &#8250;
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-5">
          <span className="text-sm tracking-wider text-[#5f5f5f]">
            {activeIndex + 1} / {galleryImages.length}
          </span>

          <div className="h-px w-12 bg-[#7c8465]/50" />

          <span className="text-xs uppercase tracking-[0.2em] text-[#7c8465]">
            Guilherme &amp; Raul
          </span>
        </div>

        <p className="mt-5 text-center text-sm text-[#5f5f5f]">
          Cada fotografia guarda um pedacinho da nossa história.
        </p>
      </div>

      <GalleryLightbox
        images={galleryImages}
        selectedIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onChange={setSelectedIndex}
      />
    </>
  );
}