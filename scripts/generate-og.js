const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

(async () => {
  try {
    const root = path.join(__dirname, '..');
    const inPath = path.join(root, 'public', 'og', 'ordo-og.svg');
    const outDir = path.join(root, 'public', 'og');

    if (!fs.existsSync(inPath)) {
      throw new Error(`Input SVG not found: ${inPath}`);
    }

    // Ensure outDir exists
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    const width = 1200;
    const height = 630;

    // PNG
    await sharp(inPath)
      .resize(width, height, { fit: 'contain' })
      .png({ quality: 92 })
      .toFile(path.join(outDir, 'ordo-og.png'));

    // WebP
    await sharp(inPath)
      .resize(width, height, { fit: 'contain' })
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'ordo-og.webp'));

    // AVIF (optional, good fallback)
    await sharp(inPath)
      .resize(width, height, { fit: 'contain' })
      .avif({ quality: 50 })
      .toFile(path.join(outDir, 'ordo-og.avif'));

    console.log('Generated: ordo-og.png, ordo-og.webp, ordo-og.avif in public/og');
  } catch (err) {
    console.error('Error generating OG images:', err);
    process.exit(1);
  }
})();
