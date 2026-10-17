const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ARTIFACTS_DIR = 'C:\\Users\\lucas\\.gemini\\antigravity-ide\\brain\\6b3ba530-2924-4b7a-8b11-fb948865e8e5';
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'img');

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function convertImage(inputPath, baseName, isPortrait = false) {
  console.log(`Processing ${baseName}...`);
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  const width1 = isPortrait ? 400 : 800;
  const width2 = isPortrait ? 800 : 1600;

  // 800w (or 400w)
  await sharp(inputPath)
    .resize({ width: Math.min(width1, metadata.width || width1), withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, `${baseName}-800w.webp`));

  // 1600w (or 800w)
  await sharp(inputPath)
    .resize({ width: Math.min(width2, metadata.width || width2), withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(path.join(OUTPUT_DIR, `${baseName}-1600w.webp`));

  // Default webp
  await sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(path.join(OUTPUT_DIR, `${baseName}.webp`));

  console.log(`✓ Generated ${baseName}.webp, ${baseName}-800w.webp, ${baseName}-1600w.webp`);
}

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download ${url}: ${res.statusText}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

async function main() {
  // 1. Process Gemini Generated Dental and Law Images
  const geminiMap = {
    'dent_reception': 'dent_reception_1792196962540.jpg',
    'dent_operatory': 'dent_operatory_1792196983065.jpg',
    'dent_smile': 'dent_smile_1792197004934.jpg',
    'dent_team1': 'dent_team1_1792197029868.jpg',
    'dent_team2': 'dent_team2_1792197056864.jpg',
    'dent_team3': 'dent_team3_1792197087632.jpg',
    'dent_team4': 'dent_team4_1792197120737.jpg',
    'law_hall': 'law_hall_1792197164690.jpg',
    'law_meeting': 'law_meeting_1792197204702.jpg',
    'law_library': 'law_library_1792197248320.jpg',
    'law_team1': 'law_team1_1792197297563.jpg',
    'law_team2': 'law_team2_1792197348328.jpg',
    'law_team3': 'law_team3_1792197403449.jpg',
    'law_team4': 'law_team4_1792197462001.jpg',
  };

  for (const [baseName, fileName] of Object.entries(geminiMap)) {
    const fullPath = path.join(ARTIFACTS_DIR, fileName);
    if (fs.existsSync(fullPath)) {
      const isPortrait = baseName.includes('team');
      await convertImage(fullPath, baseName, isPortrait);
    } else {
      console.warn(`File not found: ${fullPath}`);
    }
  }

  // 2. Automotive Detailing Images
  console.log('Downloading and processing automotive images...');
  
  // Workshop with LED lights
  const workshopBuf = await downloadBuffer('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1600&q=85');
  await convertImage(workshopBuf, 'car_workshop', false);

  // Machine Polishing close-up
  const polishBuf = await downloadBuffer('https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=1600&q=85');
  await convertImage(polishBuf, 'car_polishing', false);

  // For Car Before and After: The EXACT same car hood/paint photo!
  // 'car_after' is high-contrast, mirror gloss, pristine reflections
  // 'car_before' has dull oxidation, subtle micro-scratch overlay, reduced clarity
  const carBaseBuf = await downloadBuffer('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=90');
  
  // After: Glossy, deep shine
  const afterProcessed = await sharp(carBaseBuf)
    .modulate({ brightness: 1.05, saturation: 1.15 })
    .toBuffer();
  await convertImage(afterProcessed, 'car_after', false);

  // Before: Same car, but dull, matte, oxidized, slightly desaturated with haze
  const { width, height } = await sharp(carBaseBuf).metadata();
  // Create a scratch/haze noise overlay SVG
  const noiseSvg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <filter id="swirls">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="4" result="noise" />
        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.22 0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#swirls)" fill="#888" />
      <g stroke="#ffffff" stroke-width="1.2" opacity="0.35">
        <path d="M ${width*0.2} ${height*0.3} Q ${width*0.4} ${height*0.2} ${width*0.5} ${height*0.45}" fill="none"/>
        <path d="M ${width*0.45} ${height*0.4} Q ${width*0.6} ${height*0.55} ${width*0.7} ${height*0.35}" fill="none"/>
        <path d="M ${width*0.1} ${height*0.6} Q ${width*0.35} ${height*0.7} ${width*0.6} ${height*0.65}" fill="none"/>
      </g>
    </svg>`;
  
  const beforeProcessed = await sharp(carBaseBuf)
    .modulate({ brightness: 0.88, saturation: 0.75 })
    .blur(0.8)
    .composite([{ input: Buffer.from(noiseSvg), blend: 'over' }])
    .toBuffer();
  await convertImage(beforeProcessed, 'car_before', false);

  // 4 Team members for Auto Brilho
  // Thiago (Polimento)
  const team1Buf = await downloadBuffer('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&h=800&q=85');
  await convertImage(team1Buf, 'car_team1', true);

  // Diego (Vitrificação)
  const team2Buf = await downloadBuffer('https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&h=800&q=85');
  await convertImage(team2Buf, 'car_team2', true);

  // Rafa (Interna)
  const team3Buf = await downloadBuffer('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&h=800&q=85');
  await convertImage(team3Buf, 'car_team3', true);

  // Bruna (Atendimento)
  const team4Buf = await downloadBuffer('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&h=800&q=85');
  await convertImage(team4Buf, 'car_team4', true);

  console.log('All images processed and saved in public/img!');
}

main().catch(err => {
  console.error('Error in prepare-images:', err);
  process.exit(1);
});
