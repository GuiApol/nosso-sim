
import fs from "node:fs";
import path from "node:path";

const pastaFotos = path.join(
  process.cwd(),
  "public",
  "images",
  "otimizadas"
);

export function listarFotos(): string[] {
  if (!fs.existsSync(pastaFotos)) {
    return [];
  }

  return fs
    .readdirSync(pastaFotos)
    .filter((arquivo) => /\.webp$/i.test(arquivo))
    .sort((a, b) => a.localeCompare(b, "pt-BR"));
}
