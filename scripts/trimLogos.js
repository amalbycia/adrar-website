const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inDir = path.join(__dirname, '..', 'public', 'logos');
const outDir = path.join(__dirname, '..', 'public', 'trimmed-logos');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const files = fs.readdirSync(inDir).filter(f => f.endsWith('.png'));

(async () => {
  for (const f of files) {
    const p = path.join(inDir, f);
    const temp = path.join(outDir, f);
    try {
      // Trim transparent edges
      await sharp(p)
        .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 15 })
        .toFile(temp);
      console.log('Trimmed', f);
    } catch (e) {
      // If error (e.g. image contains no background to trim), just copy it
      console.error('Copying without trim for', f);
      fs.copyFileSync(p, temp);
    }
  }
  console.log('All done');
})();
