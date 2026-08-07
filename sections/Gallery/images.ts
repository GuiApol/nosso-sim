export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Momento especial de Guilherme e Raul",
    caption: "Um capítulo especial da nossa história.",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Registro da história de Guilherme e Raul",
    caption: "Entre encontros, conversas e descobertas.",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Lembrança especial de Guilherme e Raul",
    caption: "Cada momento nos trouxe até aqui.",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Fotografia especial do casal",
    caption: "Celebrando o começo de um novo capítulo.",
    className: "md:col-span-2",
  },
  {
    src: "/images/hero/foto-casal.jpg",
    alt: "Momento compartilhado por Guilherme e Raul",
    caption: "Nossa história continua sendo escrita.",
  },
];