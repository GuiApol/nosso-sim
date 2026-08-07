"use client";

import Image from "next/image";
import { useState } from "react";

import { GalleryLightbox } from "./GalleryLightbox";
import { galleryImages } from "./images";

export function GalleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[240px] gap-5 sm:auto-rows-[280px] md:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Abrir fotografia ${index + 1} da galeria`}
            className={`group relative overflow-hidden rounded-[1.75rem] bg-[#ded8cd] text-left shadow-lg shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32] ${
              image.className ?? ""
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

            <div className="absolute inset-x-0 bottom-0 translate-y-4 bg-gradient-to-t from-black/75 via-black/20 to-transparent px-6 pb-6 pt-20 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                Ver fotografia
              </p>

              {image.caption && (
                <p className="mt-2 max-w-sm font-[var(--font-heading)] text-xl font-light">
                  {image.caption}
                </p>
              )}
            </div>
          </button>
        ))}
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