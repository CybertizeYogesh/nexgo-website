const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const targetDir = path.join(__dirname, '../public/images');
async function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    
    if (fs.statSync(fullPath).isDirectory()) {
      await processDirectory(fullPath);
    } else if (fullPath.match(/\.(jpg|jpeg|png)$/i)) {
      const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      
      try {
        // Resize massive images to max 1920px width and convert to WebP at 75 quality 
        // to practically guarantee file sizes under 120 KB.
        const info = await sharp(fullPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 75, effort: 6 })
          .toFile(outputPath);
          
        console.log(`✅ Converted: ${file} -> ${(info.size / 1024).toFixed(2)} KB`);
      } catch (err) {
        console.error(`❌ Error converting ${file}:`, err);
      }
    }
  }
}
console.log('Starting image optimization...');
processDirectory(targetDir).then(() => console.log('Optimization complete.'));
