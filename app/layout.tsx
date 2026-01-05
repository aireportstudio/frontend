import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast"
import Script from "next/script";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "AIReportStudio - AI Project Report Generator for Students",
  description:
    "AI-powered platform for final year students to create structured, plagiarism-free project reports with citations and templates.",
  keywords: [
    "AI report generator",
    "final year project",
    "academic writing",
    "student reports",
    "project reports",
    "academic integrity",
    "citation management",
    "thesis writing",
    "research paper generator",
    "academic templates",
    "plagiarism checker",
    "student tools",
    "university reports",
    "academic success",
    "report writing software",
  ],
  authors: [{ name: "AI Report Studio Team", url: "https://www.aiprojectreport.com/" }],
  creator: "AI Report Studio",
  publisher: "AI Report Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "AI Report Studio - AI Project Report Generator for Students",
    description:
      "Professional AI-Powered Project Report Generation Platform for Final Year Students. Generate well-structured academic reports with professional templates and citation management.",
    type: "website",
    locale: "en_US",
    url: "https://www.aiprojectreport.com/",
    siteName: "AI Report Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AI Report Studio - AI Project Report Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Report Studio - AI Project Report Generator",
    description:
      "Transform Ideas into Academic Excellence. Generate professional project reports with AI-powered tools.",
    images: ["/twitter-image.jpg"],
    creator: "@aiprojectreport",
  },
  alternates: {
    canonical: "https://www.aiprojectreport.com/",
  },
  category: "Education Technology",
  classification: "Academic Writing Tools",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.aiprojectreport.com/"),
  verification: {
    google: "O4eTXKmoqJd4oqhnBRj3lTTNYwBg8-I6Ulj-6XAWxsw"
  },
  generator: "aiprojectreport",
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "AI Report Studio",
  description: "AI-powered platform for generating professional academic project reports for final year students",
  url: "https://www.aiprojectreport.com/",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web Browser",
  offers: [
    {
      "@type": "Offer",
      name: "Free Plan",
      price: "0",
      priceCurrency: "USD",
      description: "1 report per month with basic templates",
    },
    {
      "@type": "Offer",
      name: "Student Plan",
      price: "49",
      priceCurrency: "USD",
      description: "10 reports per month with premium features",
    },
    {
      "@type": "Offer",
      name: "Pro Plan",
      price: "99",
      priceCurrency: "USD",
      description: "Unlimited reports with all features",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "10000",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "AI Report Studio",
    url: "https://www.aiprojectreport.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Report Studio",
    logo: {
      "@type": "ImageObject",
      url: "https://www.aiprojectreport.com/logo.webp",
    },
  },
  featureList: [
    "AI-powered content generation",
    "Professional templates",
    "Citation management",
    "Plagiarism detection",
    "Multiple export formats",
    "Real-time collaboration",
  ],
}

const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AI Report Studio",
  alternateName: "AIProjectReport",
  url: "https://www.aiprojectreport.com/",
  logo: {
    "@type": "ImageObject",
    url: "https://www.aiprojectreport.com/logo.webp",
    width: 512,
    height: 512,
  },
  description:
    "Leading AI-powered platform for academic report generation, helping students create professional project reports with ease.",
  foundingDate: "2019",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-REPORTS",
    contactType: "customer service",
    email: "info@aiprojectreport.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/reportgenpro",
    "https://facebook.com/reportgenpro",
    "https://linkedin.com/company/reportgenpro",
  ],
}

const websiteData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AI Report Studio",
  alternateName: "AIProjectReport",
  url: "https://www.aiprojectreport.com/",
  description: "AI-powered platform for final year students to create structured, plagiarism-free project reports",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.aiprojectreport.com/blog?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: "AI Report Studio",
    logo: {
      "@type": "ImageObject",
      url: "https://www.aiprojectreport.com/logo.webp",
    },
  },
}

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aiprojectreport.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.aiprojectreport.com/#about" },
    { "@type": "ListItem", position: 3, name: "Features", item: "https://www.aiprojectreport.com/#features" },
    { "@type": "ListItem", position: 4, name: "Testimonials", item: "https://www.aiprojectreport.com/#testimonials" },
    { "@type": "ListItem", position: 5, name: "Pricing", item: "https://www.aiprojectreport.com/#pricing" },
    { "@type": "ListItem", position: 6, name: "Blog", item: "https://www.aiprojectreport.com/blog" },
    { "@type": "ListItem", position: 7, name: "FAQ", item: "https://www.aiprojectreport.com/#faq" },
    { "@type": "ListItem", position: 8, name: "Contact", item: "https://www.aiprojectreport.com/#contact" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* ✅ JSON-LD for SEO */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
        {/* ================= EZOIC PRIVACY SCRIPTS (MUST BE FIRST) ================= */}
        <Script
          src="https://cmp.gatekeeperconsent.com/min.js"
          data-cfasync="false"
          strategy="beforeInteractive"
        />
        <Script
          src="https://the.gatekeeperconsent.com/cmp.min.js"
          data-cfasync="false"
          strategy="beforeInteractive"
        />

        {/* ================= EZOIC HEADER SCRIPT ================= */}
        <Script
          src="https://www.ezojs.com/ezoic/sa.min.js"
          strategy="afterInteractive"
        />
        <Script id="ezoic-init" strategy="afterInteractive">
          {`
            window.ezstandalone = window.ezstandalone || {};
            ezstandalone.cmd = ezstandalone.cmd || [];
          `}
        </Script>
        <meta
          name="ezoic-site-verification"
          content="J8UbsqdJB6Zz83KFIQgi5OyPAvXYHh"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}