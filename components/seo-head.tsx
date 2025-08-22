import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string[]
  canonical?: string
  ogImage?: string
  noindex?: boolean
}

export function SEOHead({
  title = "AI Report Studio - AI Project Report Generator",
  description = "Professional AI-Powered Project Report Generation Platform for Final Year Students",
  keywords = [],
  canonical,
  ogImage = "/og-image.jpg",
  noindex = false,
}: SEOHeadProps) {
  const fullTitle = title.includes("AI Report Studio") ? title : `${title} | AI Report Studio`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <meta name="author" content="AI Report Studio" />
      <meta name="publisher" content="AI Report Studio" />
      <meta name="copyright" content="© 2025 AI Report Studio. All rights reserved." />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
    </Head>
  )
}
