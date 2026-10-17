const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  const svg = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="glow" cx="80%" cy="20%" r="60%">
        <stop offset="0%" stop-color="#2563EB" stop-opacity="0.3" />
        <stop offset="100%" stop-color="#0B0C0F" stop-opacity="0" />
      </radialGradient>
      <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#14161B" />
        <stop offset="100%" stop-color="#0B0C0F" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />
    
    <!-- Outer delicate frame -->
    <rect x="40" y="40" width="1120" height="550" rx="32" fill="none" stroke="#23262E" stroke-width="2" />
    
    <!-- Status badge -->
    <g transform="translate(90, 110)">
      <rect width="210" height="42" rx="21" fill="#1D2027" stroke="#2A2E37" stroke-width="1.5" />
      <circle cx="26" cy="21" r="5" fill="#22C55E" />
      <text x="42" y="27" fill="#F5F6F8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="600">Aceitando novos projetos</text>
    </g>

    <!-- Main Title -->
    <text x="90" y="280" fill="#F5F6F8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="82" font-weight="800" letter-spacing="-3">Lucas Xavier<tspan fill="#2563EB">.</tspan></text>
    
    <!-- Subtitle / Value Prop -->
    <text x="90" y="360" fill="#9AA1AE" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="30" font-weight="500">
      Sites rápidos para prestadores de serviço e empresas
    </text>
    <text x="90" y="405" fill="#6B7280" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" font-weight="400">
      Dentistas, advogados e comércios locais · Paulínia, SP
    </text>
    
    <!-- Pills / Stack highlights -->
    <g transform="translate(90, 475)">
      <rect x="0" y="0" width="105" height="38" rx="19" fill="#1D2027" />
      <text x="52" y="24" text-anchor="middle" fill="#C5CAD3" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Next.js</text>

      <rect x="120" y="0" width="125" height="38" rx="19" fill="#1D2027" />
      <text x="182" y="24" text-anchor="middle" fill="#C5CAD3" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">TypeScript</text>

      <rect x="260" y="0" width="135" height="38" rx="19" fill="#1D2027" />
      <text x="327" y="24" text-anchor="middle" fill="#C5CAD3" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Alta Performance</text>

      <rect x="410" y="0" width="130" height="38" rx="19" fill="#1D2027" />
      <text x="475" y="24" text-anchor="middle" fill="#C5CAD3" font-family="-apple-system, sans-serif" font-size="15" font-weight="600">Mobile First</text>
    </g>

    <!-- Right Brand Monogram -->
    <g transform="translate(900, 230)">
      <circle cx="80" cy="80" r="90" fill="#182544" stroke="#2563EB" stroke-width="2" />
      <text x="80" y="105" text-anchor="middle" fill="#2563EB" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="72" font-weight="800">LX</text>
    </g>
  </svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 92 })
    .toFile(path.join(__dirname, '..', 'public', 'img', 'og-image.webp'));

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(path.join(__dirname, '..', 'public', 'img', 'og-image.jpg'));

  // Also create favicon
  const faviconSvg = `
  <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="16" fill="#14161B" />
    <text x="32" y="44" text-anchor="middle" fill="#FFFFFF" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="34" font-weight="800">L<tspan fill="#2563EB">.</tspan></text>
  </svg>`;

  fs.writeFileSync(path.join(__dirname, '..', 'public', 'icon.svg'), faviconSvg);

  await sharp(Buffer.from(faviconSvg))
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.png'));

  console.log('✓ Generated OG image and favicons');
}

createOgImage().catch(console.error);
