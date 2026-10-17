const fs = require('fs');
const sharp = require('sharp');

const html = fs.readFileSync('site.html', 'utf8');
const match = html.match(/data:image\/jpeg;base64,([^"']+)/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  sharp(buf).metadata().then(meta => {
    console.log('Original metadata:', meta);
    // Let's also save the full unresized original image
    fs.writeFileSync('public/img/lucas-original.jpg', buf);
    // And create a high quality 600x600 WebP version
    sharp(buf)
      .resize(600, 600, { fit: 'cover', kernel: 'lanczos3' })
      .webp({ quality: 92 })
      .toFile('public/img/lucas_profile.webp')
      .then(() => console.log('✓ Created public/img/lucas_profile.webp (600x600)'));
  });
}
