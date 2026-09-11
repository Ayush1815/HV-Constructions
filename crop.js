import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

async function run() {
  const sourceDir = "C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\043b4536-6c11-43e1-9c36-16918a82ec66";
  const destDir = "d:\\Placement\\HV-Construction\\public\\media\\carousel";
  
  await fs.mkdir(destDir, { recursive: true });

  const files = await fs.readdir(sourceDir);
  const imagesToProcess = files.filter(f => f.startsWith("carousel_") && f.endsWith(".jpg"));

  for (const file of imagesToProcess) {
    const inputPath = path.join(sourceDir, file);
    // Name them cleanly, e.g., carousel_govt_infrastructure.jpg
    // The generated files end with _178...jpg so we strip the timestamp for the final name
    const match = file.match(/^(carousel_.*?)_\d+\.jpg$/);
    const outName = match ? `${match[1]}.webp` : file.replace(".jpg", ".webp");
    const outputPath = path.join(destDir, outName);

    console.log(`Processing ${file} -> ${outName}`);

    const metadata = await sharp(inputPath).metadata();
    
    // We want a 5:2 aspect ratio. 
    // Usually 16:9 is something like 1536x864 or 1920x1080
    const targetWidth = metadata.width;
    const targetHeight = Math.round(targetWidth / 2.5);

    await sharp(inputPath)
      .resize({
        width: targetWidth,
        height: targetHeight,
        fit: 'cover',
        position: 'center'
      })
      .webp({ quality: 85 })
      .toFile(outputPath);
  }
  
  console.log("Done cropping all images to exactly 5:2 ratio!");
}

run().catch(console.error);
