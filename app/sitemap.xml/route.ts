// export async function GET() {
//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//   <url>
//     <loc>https://www.aiprojectreport.com</loc>
//     <lastmod>2024-01-15T00:00:00.000Z</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>1.0</priority>
//   </url>
//   <url>
//     <loc>https://www.aiprojectreport.com/blog</loc>
//     <lastmod>2024-01-15T00:00:00.000Z</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.8</priority>
//   </url>
// </urlset>`;

//   return new Response(sitemap, {
//     headers: {
//       'Content-Type': 'application/xml',
//     },
//   });
// }

import { NextResponse } from "next/server";

export const runtime = "edge"; // optional for edge runtime

export async function GET() {
  // Fetch your blogs from API
  const res = await fetch("https://api.aiprojectreport.com/blogs");
  const blogs = await res.json();

  // Start building sitemap XML
  const urls = blogs.map((blog: any) => `
    <url>
      <loc>https://www.aiprojectreport.com/blog/${blog.slug}</loc>
      <lastmod>${new Date(blog.updatedAt).toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.7</priority>
    </url>
  `).join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.aiprojectreport.com</loc>
      <lastmod>2024-01-15T00:00:00.000Z</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.aiprojectreport.com/blog</loc>
      <lastmod>2024-01-15T00:00:00.000Z</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
    ${urls}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "text/xml" },
  });
}
