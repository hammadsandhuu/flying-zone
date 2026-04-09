const fs = require('fs');
const path = require('path');

const mappings = [
  { file: 'src/app/about/page.js', image: 'about.png' },
  { file: 'src/app/contact/page.js', image: 'contact.png' },
  { file: 'src/app/services/flight-tickets/page.js', image: 'flight-tickets.png' },
  { file: 'src/app/visas/global/page.js', image: 'global-Visa.png' },
  { file: 'src/app/hajj-umrah/page.js', image: 'hajj-umrah.png' },
  { file: 'src/app/services/holidays-fly-dubai/page.js', image: 'holidays-by-flydubai.png' },
  { file: 'src/app/services/hotel-suits/page.js', image: 'hotel-reservations.png' },
  { file: 'src/app/services/tour-packages/page.js', image: 'tour-packages.png' },
  { file: 'src/app/services/travel-insurance/page.js', image: 'travel-insurance.png' },
  { file: 'src/app/visas/uae/page.js', image: 'visa.png' },
];

mappings.forEach(({ file, image }) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const bannerPath = `/assets/images/Banners/${image}`;
    
    // Better regex with [\s\S]*? to handle new lines
    content = content.replace(/(<Breadcrumb\s+pagename="[^"]+"[\s\S]*?pagetitle="[^"]+")([\s\S]*?)\/?>/g, (match, prefix, rest) => {
        if (rest.includes("bgImage=")) {
            return match.replace(/bgImage="[^"]+"/, `bgImage="${bannerPath}"`);
        }
        return `${prefix} bgImage="${bannerPath}" />`;
    });
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} with ${image}`);
  } else {
    console.log(`File missing: ${file}`);
  }
});
