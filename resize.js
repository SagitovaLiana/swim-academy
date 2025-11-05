import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = "public/images/gallery/full";
const outputDir = "public/images/gallery/thumbs";
const outputJson = "src/components/ui/ImagesGallery/gallery.json"; // 👈 JSON для React

// 1. Проверяем наличие папки thumbs
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter((file) =>
  [".jpg", ".jpeg", ".png"].includes(path.extname(file).toLowerCase())
);

console.log(`\n🖼 Найдено ${files.length} изображений для обработки...\n`);

let processed = 0;

// 2. Функция обработки изображения
async function processImage(file) {
  const inputPath = path.join(inputDir, file);
  const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const outputPath = path.join(outputDir, outputFile);

  if (fs.existsSync(outputPath)) {
    console.log(`⚪ Пропущено (уже есть): ${outputFile}`);
    return;
  }

  try {
    await sharp(inputPath)
      .resize({ width: 1200 })
      .webp({ quality: 80 })
      .toFile(outputPath);

    processed++;
    console.log(`✅ Сжато и сохранено: ${outputFile}`);
  } catch (err) {
    console.error(`❌ Ошибка при обработке ${file}:`, err.message);
  }
}

// 3. Основная функция
(async () => {
  const start = Date.now();

  // Параллельная обработка
  const concurrency = 5;
  const queue = [...files];
  const workers = Array.from({ length: concurrency }, async () => {
    while (queue.length > 0) {
      const file = queue.shift();
      await processImage(file);
    }
  });

  await Promise.all(workers);

  // 4. После обработки — создаём gallery.json
  const images = files.map((file) => {
    const name = path.parse(file).name;
    return {
      thumb: `/images/gallery/thumbs/${name}.webp`,
      full: `/images/gallery/full/${file}`,
    };
  });

  // Проверяем наличие директории src/data
  const jsonDir = path.dirname(outputJson);
  if (!fs.existsSync(jsonDir)) {
    fs.mkdirSync(jsonDir, { recursive: true });
  }

  fs.writeFileSync(outputJson, JSON.stringify(images, null, 2));
  console.log(`\n📁 Файл ${outputJson} успешно создан/обновлён!\n`);

  const end = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`✨ Готово! ${processed} новых изображений оптимизировано за ${end} сек.\n`);
})();
