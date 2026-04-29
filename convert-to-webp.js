const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const PUBLIC_IMAGES_DIR = path.join(__dirname, 'public', 'images');
const MAX_SIZE_KB = 120;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walkDir(fullPath, fileList);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function convertImage(inputPath) {
  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(dir, name + '.webp');

  let quality = 80;
  let buffer;
  let resizePercent = 100;

  while (quality >= 10) {
    const transformer = sharp(inputPath).webp({ quality });
    if (resizePercent < 100) {
      const metadata = await sharp(inputPath).metadata();
      transformer.resize(Math.floor(metadata.width * resizePercent / 100), null, { withoutEnlargement: true });
    }
    buffer = await transformer.toBuffer();
    if (buffer.length <= MAX_SIZE_BYTES) break;
    if (quality > 10) {
      quality -= 10;
    } else if (resizePercent > 25) {
      resizePercent -= 25;
      quality = 80;
    } else {
      break;
    }
  }

  fs.writeFileSync(outputPath, buffer);
  const sizeKB = (buffer.length / 1024).toFixed(1);
  const resizeInfo = resizePercent < 100 ? `, resized to ${resizePercent}%` : '';
  console.log(`Converted: ${path.relative(PUBLIC_IMAGES_DIR, inputPath)} -> ${path.relative(PUBLIC_IMAGES_DIR, outputPath)} (${sizeKB} KB, quality: ${quality}${resizeInfo})`);
}

async function main() {
  const images = walkDir(PUBLIC_IMAGES_DIR);
  console.log(`Found ${images.length} images to convert...\n`);

  for (const image of images) {
    try {
      await convertImage(image);
    } catch (err) {
      console.error(`Failed: ${image}`, err.message);
    }
  }

  console.log('\nDone!');
}

main();
