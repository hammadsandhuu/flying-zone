const fs = require('fs');

const updates = [
  {
    file: 'src/app/visas/[slug]/page.js',
    search: '<Breadcrumb pagename="Visa Details" pagetitle={displayVisa.title || "Visa Details"} />',
    replace: '<Breadcrumb pagename="Visa Details" pagetitle={displayVisa.title || "Visa Details"} bgImage={displayVisa.img || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/services/tour-packages/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Package Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Package Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/services/hotel-suits/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Hotel Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Hotel Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/services/flight-tickets/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Flight Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Flight Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/services/holidays-fly-dubai/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Holiday Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Holiday Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/services/dubai-excursions/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Excursion Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Excursion Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/hajj-umrah/[slug]/page.js',
    search: '<Breadcrumb pagename={packageItem.title} pagetitle="Package Details" />',
    replace: '<Breadcrumb pagename={packageItem.title} pagetitle="Package Details" bgImage={packageItem.img || packageItem.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  },
  {
    file: 'src/app/destination/[slug]/page.js',
    search: '<Breadcrumb pagename={destination.name} pagetitle="Destination Details" />',
    replace: '<Breadcrumb pagename={destination.name} pagetitle="Destination Details" bgImage={destination.img || destination.images?.[0] || "/assets/img/innerpage/inner-banner-bg.png"} />'
  }
];

updates.forEach(update => {
  if (fs.existsSync(update.file)) {
    let content = fs.readFileSync(update.file, 'utf8');
    if (content.includes(update.search)) {
      content = content.replace(update.search, update.replace);
      fs.writeFileSync(update.file, content, 'utf8');
      console.log(`Updated ${update.file}`);
    } else {
      console.log(`String not found in ${update.file}`);
    }
  } else {
    console.log(`File missing: ${update.file}`);
  }
});
