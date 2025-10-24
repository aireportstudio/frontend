export async function GET() {
  const content = `
User-agent: *
Allow: /

# Sitemap
Sitemap: https://www.aiprojectreport.com/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Allow all search engines to index the site
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block access to admin areas (if any)
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow access to important pages
Allow: /blog/
Allow: /blog/*
  `.trim();

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
