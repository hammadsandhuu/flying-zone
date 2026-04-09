const fs = require('fs');
const path = require('path');

const dataFile = 'src/data/dubaiExcursionData.js';
let content = fs.readFileSync(dataFile, 'utf8');

const excursionsDir = 'public/assets/images/dubai-local-excursions';
const folders = fs.readdirSync(excursionsDir).filter(f => fs.statSync(path.join(excursionsDir, f)).isDirectory());

// Helper to normalize strings for comparison: remove all non-alphanumeric, convert to lower case
function normalize(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}

// Map of normalized title to files
const imgMap = {};
for (const f of folders) {
  const norm = normalize(f);
  const folderPath = path.join(excursionsDir, f);
  const files = fs.readdirSync(folderPath).filter(file => /\.(png|jpg|jpeg|webp)$/i.test(file));
  imgMap[norm] = files.map(file => `/assets/images/dubai-local-excursions/${f}/${file}`);
}

// Convert the objects by regex, replacing entire objects one by one
// To avoid offset issues, we can just split by "  {" and rejoin or process backwards.
// Let's use a regex that matches the whole object and replaces inside it.

const objectsRegex = /\{[^}]*title:\s*"([^"]+)"[^}]*itinerary:\s*\[[\s\S]*?\]\s*\}/g;

let updatedContent = content.replace(/(\{\s*id:[\s\S]*?title:\s*"([^"]+)"[\s\S]*?itinerary:\s*\[[\s\S]*?\]\s*\})/g, (match, objectContent, originalTitle) => {
  const normTitle = normalize(originalTitle);
  const webPaths = imgMap[normTitle];
  if (webPaths && webPaths.length > 0) {
    let replaced = objectContent;
    replaced = replaced.replace(/images:\s*\[[\s\S]*?\],/, `images: [\n      "${webPaths.join('",\n      "')}"\n    ],`);
    replaced = replaced.replace(/gallery:\s*\[[\s\S]*?\],/, `gallery: [\n      "${webPaths.join('",\n      "')}"\n    ],`);
    replaced = replaced.replace(/img:\s*"[^"]*",/, `img: "${webPaths[0]}",`);
    return replaced;
  }
  return match;
});

// Write to file
fs.writeFileSync(dataFile, updatedContent, 'utf8');
console.log("Updated data file safely.");
