// import type { Metadata } from "next"
// import { blogPosts, getAllCategories } from "@/lib/blog-data"
// import Script from "next/script"
// import BlogList from "./BlogList"

// // ✅ SEO Metadata for Blog Index
// export const metadata: Metadata = {
//   title: "AI Report Studio Blog | Academic Writing Insights",
//   description:
//     "Expert insights, tips, and strategies to help you excel in academic writing. Covering research methods, citation styles, study hacks, and more.",
//   alternates: {
//     canonical: "https://yourdomain.com/blog", // ✅ replace with your domain
//   },
//   openGraph: {
//     title: "AI Report Studio Blog",
//     description:
//       "Latest expert tips and insights on academic writing, research strategies, and study success.",
//     url: "https://yourdomain.com/blog",
//     siteName: "AI Report Studio",
//     images: [
//       {
//         url: "https://yourdomain.com/og-image.jpg", // ✅ replace with your OG image
//         width: 1200,
//         height: 630,
//         alt: "AI Report Studio Blog",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// }

// export default function BlogPage() {
//   const categories = ["All", ...getAllCategories()]

//   // ✅ JSON-LD Structured Data for Blog List
//   const schema = {
//     "@context": "https://schema.org",
//     "@type": "Blog",
//     name: "AI Report Studio Blog",
//     description:
//       "Expert insights, tips, and strategies to help you excel in academic writing.",
//     url: "https://yourdomain.com/blog",
//     blogPost: blogPosts.map((post) => ({
//       "@type": "BlogPosting",
//       headline: post.title,
//       description: post.description,
//       author: { "@type": "Person", name: post.author },
//       datePublished: post.publishedDate,
//       url: `https://yourdomain.com/blog/${post.slug}`,
//     })),
//     mainEntityOfPage: {
//       "@type": "ItemList",
//       itemListElement: blogPosts.map((post, index) => ({
//         "@type": "ListItem",
//         position: index + 1,
//         url: `https://yourdomain.com/blog/${post.slug}`,
//         name: post.title,
//       })),
//     },
//   }

//   return (
//     <>
//       {/* ✅ Structured Data */}
//       <Script
//         id="blog-schema"
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />

//       {/* ✅ Client Component */}
//       <BlogList posts={blogPosts} categories={categories} />
//     </>
//   )
// }
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
import type { Metadata } from "next"
import Script from "next/script"
import BlogList from "./BlogList"
import { BlogPost, fetchAllPosts, fetchAllCategories } from "@/lib/blogApi"

export const metadata: Metadata = {
  title: "AI Report Studio | AI Project Report Generator",
  description:
    "Expert insights, tips, and strategies to help you excel in academic writing. Covering research methods, citation styles, study hacks, and more.",
  alternates: { canonical: "https://www.aiprojectreport.com/blog" },
  openGraph: {
    title: "AI Report Studio | AI Project Report Generator",
    description:
      "Latest expert tips and insights on academic writing, research strategies, and study success.",
    url: "https://www.aiprojectreport.com/blog",
    siteName: "AI Report Studio",
    images: [
      { url: "https://www.api.aiprojectreport.com/website/logo.webp", width: 1200, height: 630, alt: "AI Report Studio | AI Project Report Generator" },
    ],
    locale: "en_IN",
    type: "website",
  },
}

export default async function BlogPage() {
  // ✅ Fetch posts and categories from API
  const [posts, categoriesFromApi] = await Promise.all([
    fetchAllPosts(),
    fetchAllCategories(),
  ])

  const categories = ["All", ...categoriesFromApi]

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI Report Studio | AI Project Report Generator",
    description: "Expert insights, tips, and strategies to help you excel in academic writing.",
    url: "https://www.aiprojectreport.com/blog",
    blogPost: posts.map((post: BlogPost) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      author: { "@type": "Person", name: post.author },
      datePublished: post.publishedDate,
      url: `https://www.aiprojectreport.com/blog/${post.slug}`,
    })),
    mainEntityOfPage: {
      "@type": "ItemList",
      itemListElement: posts.map((post: BlogPost, index: number) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.aiprojectreport.com/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <>
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogList posts={posts} categories={categories} />
    </>
  )
}
