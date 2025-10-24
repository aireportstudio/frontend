import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { Toaster } from "react-hot-toast";

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
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
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
      url: "logo.webp",
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
  url: "https://www.aiprojectreport.com/",
  logo: "/logo.webp",
  description:
    "Leading AI-powered platform for academic report generation, helping students create professional project reports with ease.",
  foundingDate: "2019",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-555-REPORTS",
    contactType: "customer service",
    email: "support@aiprojectreport.com",
    availableLanguage: "English",
  },
  sameAs: [
    "https://twitter.com/reportgenpro",
    "https://facebook.com/reportgenpro",
    "https://linkedin.com/company/reportgenpro",
  ],
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

const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI Report Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI Report Studio is an AI-powered platform that helps students generate professional and plagiarism-free academic project reports with templates and citation support.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI Report Studio free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, AI Report Studio offers a free plan that allows students to generate 1 report per month. Paid plans are available for more features and unlimited usage.",
      },
    },
    {
      "@type": "Question",
      name: "Can I export my report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can export reports in multiple formats including PDF, DOCX, and LaTeX for easy submission.",
      },
    },
    {
      "@type": "Question",
      name: "Does AI Report Studio check for plagiarism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the platform has built-in plagiarism detection to ensure originality and academic integrity.",
      },
    },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

        {/* ✅ Preload fonts for faster LCP */}
        <link
          rel="preload"
          as="font"
          href="/_next/static/media/poppins-latin-700.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          as="font"
          href="/_next/static/media/inter-latin-400.woff2"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* ✅ Theme + PWA */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Report Studio" />

        {/* Icons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  )
}
