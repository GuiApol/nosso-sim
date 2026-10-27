
import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const inputDir = path.resolve("public/images/fotos-originais");
const outputDir = path.resolve("public/images/otimizadas");

const extensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
]);

async function main() {
  await fs.mkdir(outputDir, { recursive: true });

  const files = await fs.readdir(inputDir, {
    withFileTypes: true,
  });

  const photos = files.filter(
    (file) =>
      file.isFile() &&
      extensions.has(path.extname(file.name).toLowerCase())
  );

  if (photos.length === 0) {
    console.log("Nenhuma foto encontrada na pasta de originais.");
    return;
  }

  for (const photo of photos) {
    const inputPath = path.join(inputDir, photo.name);
    const parsed = path.parse(photo.name);
    const outputPath = path.join(
      outputDir,
      `${parsed.name}.webp`
    );

    const metadata = await sharp(inputPath).metadata();

    await sharp(inputPath)
      .rotate()
      .resize({
        width: 1920,
        height: 1920,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80, effort: 5 })
      .toFile(outputPath);

    const original = await fs.stat(inputPath);
    const optimized = await fs.stat(outputPath);
    const reduction = (
      (1 - optimized.size / original.size) * 100
    ).toFixed(1);

    console.log(
      `${photo.name} (${metadata.width}x${metadata.height})`
    );
    console.log(
      `  ${(original.size / 1024).toFixed(0)} KB -> ` +
      `${(optimized.size / 1024).toFixed(0)} KB ` +
      `(${reduction}% menor)`
    );
  }

  console.log(`\nConversão concluída: ${outputDir}`);
}

main().catch((error) => {
  console.error("Erro ao converter as fotos:", error);
  process.exitCode = 1;
});
