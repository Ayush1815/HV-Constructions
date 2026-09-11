import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

async function generateFavicons() {
  const logoPath = "public/brand/hv-logo.png";
  
  // The HV monogram bounding box inside 1024x512 logo:
  // left: 368, top: 165, width: 288, height: 122
  const hvLetters = await sharp(logoPath)
    .extract({ left: 365, top: 164, width: 295, height: 124 })
    .toBuffer();

  // Create a 512x512 master square icon
  // Dimensions for HV inside 512x512:
  // Width: 400px, Height: ~168px (proportional)
  const resizedLetters = await sharp(hvLetters)
    .resize({ width: 410, height: 172, fit: 'contain' })
    .toBuffer();

  const masterSquare = await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
  .composite([
    { input: resizedLetters, gravity: 'center' }
  ])
  .png()
  .toBuffer();

  // 1. Save master high-res favicon
  await fs.writeFile("public/favicon-512x512.png", masterSquare);
  console.log("Created public/favicon-512x512.png");

  // 2. 192x192 for Android / PWA
  const icon192 = await sharp(masterSquare).resize(192, 192).png().toBuffer();
  await fs.writeFile("public/favicon-192x192.png", icon192);
  console.log("Created public/favicon-192x192.png");

  // 3. 180x180 for Apple Touch Icon
  const iconApple = await sharp(masterSquare).resize(180, 180).png().toBuffer();
  await fs.writeFile("public/apple-touch-icon.png", iconApple);
  console.log("Created public/apple-touch-icon.png");

  // 4. 48x48
  const icon48 = await sharp(masterSquare).resize(48, 48).png().toBuffer();
  await fs.writeFile("public/favicon-48x48.png", icon48);
  console.log("Created public/favicon-48x48.png");

  // 5. 32x32 standard browser favicon
  const icon32 = await sharp(masterSquare).resize(32, 32).png().toBuffer();
  await fs.writeFile("public/favicon-32x32.png", icon32);
  await fs.writeFile("public/favicon.png", icon32);
  await fs.writeFile("public/favicon.ico", icon32); // Modern browsers handle PNG-encoded .ico
  console.log("Created public/favicon-32x32.png, favicon.png, favicon.ico");

  // 6. Also create SVG favicon for infinite resolution scaling
  const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="#000000" rx="8" />
  <g fill="none" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="square" stroke-linejoin="miter">
    <!-- H -->
    <line x1="12" y1="18" x2="12" y2="46" />
    <line x1="12" y1="32" x2="28" y2="32" />
    <line x1="28" y1="18" x2="28" y2="46" />
    <!-- V connected to H -->
    <line x1="28" y1="18" x2="39" y2="46" />
    <line x1="39" y1="46" x2="52" y2="18" />
  </g>
</svg>`;

  await fs.writeFile("public/favicon.svg", svgFavicon.trim());
  console.log("Created public/favicon.svg");

  console.log("All favicons generated successfully!");
}

generateFavicons().catch(console.error);
