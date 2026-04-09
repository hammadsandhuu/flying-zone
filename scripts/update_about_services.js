const fs = require('fs');

const file = 'src/components/activities/Home2Activities.jsx';
let content = fs.readFileSync(file, 'utf8');

// Replace the image paths
content = content.replace(/assets\/img\/home2\/zip-lining-01\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Hajj and Umrah.png');
content = content.replace(/assets\/img\/home2\/zip-lining-02\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Hajj and Umrah.png');

content = content.replace(/assets\/img\/home2\/bungee-jump-01\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Flight Tickets.png');
content = content.replace(/assets\/img\/home2\/bungee-jump-02\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Flight Tickets.png');

content = content.replace(/assets\/img\/home2\/rafting-01\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Visit Visa.png');
content = content.replace(/assets\/img\/home2\/rafting-02\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Visit Visa.png');

content = content.replace(/assets\/img\/home2\/paragliding-01\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Tour Packages.png');
content = content.replace(/assets\/img\/home2\/paragliding-02\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Tour Packages.png');

content = content.replace(/assets\/img\/home2\/ski-touring-01\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Local Excursions.png');
content = content.replace(/assets\/img\/home2\/ski-touring-02\.jpg/g, '/assets/images/about-us/Our Special Services (About US)/Local Excursions.png');

fs.writeFileSync(file, content, 'utf8');
console.log("Updated services images.");
