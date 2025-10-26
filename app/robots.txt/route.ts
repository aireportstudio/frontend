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
Disallow: /blog/common-mistakes-avoid-final-year-project-report
Disallow: /blog/ultimate-guide-academic-writing-engineering-students
Disallow: /site.webmanifest
Disallow: /blog/citation-styles-explained-apa-mla-chicago-more
Disallow: /cdn-cgi/l/email-protection

# Allow access to important pages
Allow: /blog/
Allow: /blog/*
  `.trim();

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
