const fs = require('fs');
const path = require('path');

const dataFile = 'src/data/dubaiExcursionData.js';
let content = fs.readFileSync(dataFile, 'utf8');

const excursionsDir = 'public/assets/images/dubai-local-excursions';
const folders = fs.readdirSync(excursionsDir).filter(f => fs.statSync(path.join(excursionsDir, f)).isDirectory());

function normalize(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

const objectsRegex = /(\{\s*id:[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?title:\s*"([^"]+)"[\s\S]*?itinerary:\s*\[[\s\S]*?\]\s*\})/g;

// Pass 1: Gather mapping of normalized title -> folder, and also map to slug
let mapping = [];
let match;
while ((match = objectsRegex.exec(content)) !== null) {
  const originalTitle = match[3];
  const slug = match[2];
  const normTitle = normalize(originalTitle);
  const matchingFolder = folders.find(f => normalize(f) === normTitle || normalize(f) === normalize(slug));
  
  if (matchingFolder) {
    mapping.push({ slug, normTitle, originalFolder: matchingFolder, matchStr: match[1] });
  }
}

let updatedContent = content;

// Pass 2: Process renames and update content
for (const item of mapping) {
  const oldFolderPath = path.join(excursionsDir, item.originalFolder);
  const newFolderPath = path.join(excursionsDir, item.slug);
  
  let currentFolderPath = oldFolderPath;

  // Rename folder if not already named as slug
  if (item.originalFolder !== item.slug) {
    if (fs.existsSync(oldFolderPath) && !fs.existsSync(newFolderPath)) {
      fs.renameSync(oldFolderPath, newFolderPath);
      console.log(`Renamed folder: ${item.originalFolder} -> ${item.slug}`);
      currentFolderPath = newFolderPath;
    } else if (fs.existsSync(newFolderPath)) {
      // already renamed perhaps
      currentFolderPath = newFolderPath;
    }
  }

  // Rename files inside the folder to slug-index.ext
  const files = fs.readdirSync(currentFolderPath).filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file));
  const sortedFiles = files.sort(); // Assuming they are like 1.png, 2.png
  
  let webPaths = [];
  files.forEach((file, index) => {
    const ext = path.extname(file);
    const newFileName = `${item.slug}-${index + 1}${ext}`;
    const oldFilePath = path.join(currentFolderPath, file);
    const newFilePath = path.join(currentFolderPath, newFileName);
    
    if (file !== newFileName && fs.existsSync(oldFilePath)) {
      fs.renameSync(oldFilePath, newFilePath);
    }
    
    webPaths.push(`/assets/images/dubai-local-excursions/${item.slug}/${newFileName}`);
  });
  
  // Replace references in the file
  if (webPaths.length > 0) {
    updatedContent = updatedContent.replace(item.matchStr, (objectContent) => {
      let replaced = objectContent;
      replaced = replaced.replace(/images:\s*\[[\s\S]*?\],/, `images: [\n      "${webPaths.join('",\n      "')}"\n    ],`);
      replaced = replaced.replace(/gallery:\s*\[[\s\S]*?\],/, `gallery: [\n      "${webPaths.join('",\n      "')}"\n    ],`);
      replaced = replaced.replace(/img:\s*"[^"]*",/, `img: "${webPaths[0]}",`);
      return replaced;
    });
  }
}

// Write the updated content back
fs.writeFileSync(dataFile, updatedContent, 'utf8');
console.log("Renamed folders, images, and updated data file correctly.");
