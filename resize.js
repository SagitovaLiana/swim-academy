import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images/gallery/full";
const outputDir = "public/images/gallery/thumbs";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  [".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
);

console.log(`\n Найдено ${files.length} изображений для обработки...\n`);

let processed = 0;

async function processImage(file) {
  const inputPath = path.join(inputDir, file);
  const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const outputPath = path.join(outputDir, outputFile);


  if (fs.existsSync(outputPath)) {
    console.log(` Пропущено (уже есть): ${outputFile}`);
    return;
  }

  try {
    await sharp(inputPath)
      .resize({ width: 1200 })
      .webp({ quality: 80 })
      .toFile(outputPath);

    processed++;
    console.log(` Сжато и сохранено: ${outputFile}`);
  } catch (err) {
    console.error(` Ошибка при обработке ${file}:`, err.message);
  }
}

(async () => {
  const start = Date.now();


  const concurrency = 5;
  const queue = [...files];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const file = queue.shift();
      await processImage(file);
    }
  });

  await Promise.all(workers);

  const end = ((Date.now() - start) / 1000).toFixed(1);
  console.log(
    `\n Готово! ${processed} изображений оптимизировано за ${end} сек.\n`
  );
})();
