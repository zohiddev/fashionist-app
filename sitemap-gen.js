// generate sitemap and save it to public folder sitemap.xml
// run this script with node sitemap-gen.js
const { default: axios } = require("axios");
const fs = require("fs");

async function generateUrls() {
  return await axios
    .get("https://api.sdb.uz/dev/v1/product/list?per_page=1000")
    .then(res => {
      const urls = res.data.products.map(product => {
        return `
        <url>
          <loc>https://sdb.uz/product/${product.slug}</loc>
          <lastmod>${new Date()}</lastmod>
          <changefreq>daily</changefreq>
          <priority>0.7</priority>
        </url>;
        
        `;
      });
      return urls.join('');
    });
}

generateUrls().then(urls => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${urls}
  </urlset>
 `;
  fs.writeFileSync("./public/sitemap.xml", sitemap);
});
