const fs = require('fs');
const sharp = require('sharp');

const html = fs.readFileSync('Lucas Xavier.html', 'utf8');
const match = html.match(/data:image\/jpeg;base64,([^"']+)/);
if (match) {
  const buf = Buffer.from(match[1], 'base64');
  sharp(buf)
    .resize(96, 96)
    .webp({ quality: 90 })
    .toFile('public/img/lucas_avatar.webp')
    .then(() => console.log('✓ Saved public/img/lucas_avatar.webp'))
    .catch(err => console.error(err));
} else {
  console.log('No base64 avatar found');
}
