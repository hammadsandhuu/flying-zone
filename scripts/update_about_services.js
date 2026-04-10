/**
 * About page service slide images: src/data/about.json → activities.tabs[].slideImage
 * Legacy path replacements if old strings appear in about.json.
 */
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../src/data/about.json");
let content = fs.readFileSync(file, "utf8");

const replacements = [
  ["assets/img/home2/zip-lining-01.jpg", "/assets/images/about/services/hajj-umrah.png"],
  ["assets/img/home2/zip-lining-02.jpg", "/assets/images/about/services/hajj-umrah.png"],
  ["assets/img/home2/bungee-jump-01.jpg", "/assets/images/about/services/flight-tickets.png"],
  ["assets/img/home2/bungee-jump-02.jpg", "/assets/images/about/services/flight-tickets.png"],
  ["assets/img/home2/rafting-01.jpg", "/assets/images/about/services/visit-visa.png"],
  ["assets/img/home2/rafting-02.jpg", "/assets/images/about/services/visit-visa.png"],
  ["assets/img/home2/paragliding-01.jpg", "/assets/images/about/services/tour-packages.png"],
  ["assets/img/home2/paragliding-02.jpg", "/assets/images/about/services/tour-packages.png"],
  ["assets/img/home2/ski-touring-01.jpg", "/assets/images/about/services/local-excursions.png"],
  ["assets/img/home2/ski-touring-02.jpg", "/assets/images/about/services/local-excursions.png"],
  ["/assets/images/about-us/Our Special Services (About US)/Hajj and Umrah.png", "/assets/images/about/services/hajj-umrah.png"],
  ["/assets/images/about-us/Our Special Services (About US)/Flight Tickets.png", "/assets/images/about/services/flight-tickets.png"],
  ["/assets/images/about-us/Our Special Services (About US)/Visit Visa.png", "/assets/images/about/services/visit-visa.png"],
  ["/assets/images/about-us/Our Special Services (About US)/Tour Packages.png", "/assets/images/about/services/tour-packages.png"],
  ["/assets/images/about-us/Our Special Services (About US)/Local Excursions.png", "/assets/images/about/services/local-excursions.png"],
];

let changed = false;
for (const [from, to] of replacements) {
  if (content.includes(from)) {
    content = content.split(from).join(to);
    changed = true;
  }
}

if (changed) {
  fs.writeFileSync(file, content, "utf8");
  console.log("Updated slide image paths in about.json.");
} else {
  console.log("No legacy paths found in about.json (already migrated).");
}
