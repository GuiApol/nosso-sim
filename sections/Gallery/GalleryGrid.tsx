"use client";

import Image from "next/image";
import { useState } from "react";
import { GalleryLightbox } from "./GalleryLightbox";

const images = [
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Momento especial de Guilherme e Raul",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Registro da história de Guilherme e Raul",
    className: "",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Lembrança especial do casal",
    className: "",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Momento compartilhado pelo casal",
    className: "md:col-span-2",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Fotografia especial do casal",
    className: "",
  },
];

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <div className="grid auto-rows-[260px] gap-5 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setSelectedImage(index)}
            aria-label={`Abrir imagem ${index + 1} da galeria`}
            className={`group relative overflow-hidden rounded-[1.75rem] bg-[#ded8cd] text-left shadow-lg shadow-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6d1f32] ${image.className}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-center transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/25" />

            <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-6 pb-6 pt-16 text-white transition duration-500 group-hover:translate-y-0">
              <p className="text-xs font-semibold uppercase tracking-[0.28em]">
                Ver fotografia
              </p>
            </div>
          </button>
        ))}
      </div>

      <GalleryLightbox
        images={images}
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
        onChange={setSelectedImage}
      />
    </>
  );
}