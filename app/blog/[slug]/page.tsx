
// export const runtime = "edge"
// import { Metadata } from "next"
// import { notFound } from "next/navigation"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Clock, User, Calendar, BookOpen } from "lucide-react"
// import BackButton from "../[slug]/BackButton"
// import ShareButton from "../[slug]/ShareButton"
// import Header from "./Header"
// import { fetchBlogBySlug, fetchAllPosts } from "@/lib/blogApi"

// // ---------- SEO Metadata ----------
// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//   const { slug } = await params
//   const post = await fetchBlogBySlug(slug)
//   if (!post) return {}

//   return {
//     title: `${post.title} | AI Report Studio`,
//     description: post.description,
//     keywords: post.tags?.join(", "),
//     authors: [{ name: post.author }],
//     openGraph: {
//       title: post.title,
//       description: post.description,
//       type: "article",
//       url: `https://www.aiprojectreport.com/blog/${post.slug}`,
//       images: post.image ? [{ url: post.image }] : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description,
//       images: post.image ? [post.image] : [],
//     },
//     alternates: { canonical: `https://www.aiprojectreport.com/blog/${post.slug}` },
//   }
// }

// // ---------- Main Page ----------
// export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
//   const { slug } = await params
//   const post = await fetchBlogBySlug(slug)
//   if (!post) notFound()

//   const allPosts = await fetchAllPosts()
//   const relatedPosts = allPosts
//     .filter((p) => p.category === post.category && p.slug !== post.slug)
//     .slice(0, 3)

//   const faqs = [
//     { question: "What is AI Report Studio?", answer: "AI Report Studio is a platform for AI-generated insights and blogs." },
//     { question: "Can I share this blog?", answer: "Yes, you can use the share button to share on social media." },
//   ]

//   const formatContent = (content: string) =>
//     content.split("\n").map((line, index) => {
//       if (line.startsWith("# ")) return <h1 key={index} className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 mt-8">{line.substring(2)}</h1>
//       if (line.startsWith("## ")) return <h2 key={index} className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4 mt-8">{line.substring(3)}</h2>
//       if (line.startsWith("### ")) return <h3 key={index} className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-3 mt-6">{line.substring(4)}</h3>
//       if (line.startsWith("- ")) return <li key={index} className="text-gray-700 mb-2">{line.substring(2)}</li>
//       return <p key={index} className="text-gray-700 mb-4 leading-relaxed">{line}</p>
//     })

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
//       <Header />

//       {/* Breadcrumbs */}
//       <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 text-sm text-gray-600" aria-label="Breadcrumb">
//         <ol className="list-none p-0 inline-flex space-x-2">
//           <li><Link href="/" className="hover:underline">Home</Link></li>
//           <li>&gt;</li>
//           <li><Link href="/blog" className="hover:underline">Blog</Link></li>
//           <li>&gt;</li>
//           <li aria-current="page">{post.title}</li>
//         </ol>
//       </nav>

//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         <BackButton />
//       </div>

//       {/* Article */}
//       <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20" itemScope itemType="https://schema.org/BlogPosting">
//         <header className="mb-12">
//           <div className="flex items-center gap-2 mb-4">
//             <Badge variant="secondary">{post.category}</Badge>
//             {post.featured && <Badge className="bg-blue-500">Featured</Badge>}
//           </div>

//           <h1 itemProp="headline" className="hero-responsive font-bold font-serif text-gray-900 leading-tight mb-6">
//             {post.title}
//           </h1>
//           <p itemProp="description" className="text-xl text-gray-600 mb-8 leading-relaxed">{post.description}</p>

//           {post.image && (
//             <Image
//               src={post.image}
//               alt={post.title}
//               width={800}
//               height={450}
//               className="rounded-lg shadow mb-8"
//               priority
//               itemProp="image"
//             />
//           )}

//           <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
//             <div className="flex items-center gap-2"><User className="w-4 h-4" /><span itemProp="author">{post.author}</span></div>
//             <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /><time itemProp="datePublished">{post.publishedDate}</time></div>
//             <div className="flex items-center gap-2"><Clock className="w-4 h-4" /><span>{post.readTime} mins</span></div>
//             <ShareButton />
//           </div>
//         </header>

//         {/* <div className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm" itemProp="articleBody">
//           {formatContent(post.content)}
//         </div> */}

//         <div
//           className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm"
//           itemProp="articleBody"
//           dangerouslySetInnerHTML={{ __html: post.content }}
//         />

//         {/* FAQ Section */}
//         <section className="mt-16">
//           <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//           <dl className="space-y-6">
//             {faqs.map((faq, i) => (
//               <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
//                 <dt className="font-semibold text-gray-900">{faq.question}</dt>
//                 <dd className="text-gray-700 mt-2">{faq.answer}</dd>
//               </div>
//             ))}
//           </dl>
//         </section>

//         <footer className="mt-12 pt-8 border-t border-gray-200">
//           <p className="text-sm text-gray-600">
//             Written by <span itemProp="author" className="font-medium">{post.author}</span>
//           </p>
//         </footer>
//       </article>

//       {/* Related Posts */}
//       {relatedPosts.length > 0 && (
//         <section className="py-20 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {relatedPosts.map((relatedPost) => (
//                 <article key={relatedPost.slug} className="bg-white rounded-lg p-6 shadow-sm" itemScope itemType="https://schema.org/BlogPosting">
//                   <Badge variant="secondary" className="mb-3">{relatedPost.category}</Badge>
//                   <h3 className="text-lg font-bold mb-3" itemProp="headline">{relatedPost.title}</h3>
//                   <p className="text-gray-600 mb-4" itemProp="description">{relatedPost.description}</p>
//                   <Link href={`/blog/${relatedPost.slug}`}>
//                     <Button variant="outline" size="sm">
//                       <BookOpen className="w-4 h-4 mr-2" /> Read full article
//                     </Button>
//                   </Link>
//                 </article>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* ---------- JSON-LD scripts remain unchanged ---------- */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BlogPosting",
//             headline: post.title,
//             description: post.description,
//             image: post.image ? { "@type": "ImageObject", url: post.image, width: 800, height: 450 } : undefined,
//             author: { "@type": "Person", name: post.author },
//             publisher: { "@type": "Organization", name: "AI Report Studio" },
//             keywords: post.tags?.join(", "),
//             url: `https://www.aiprojectreport.com/blog/${post.slug}`,
//             datePublished: post.publishedDate,
//           }),
//         }}
//       />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "FAQPage",
//             mainEntity: faqs.map((faq) => ({
//               "@type": "Question",
//               name: faq.question,
//               acceptedAnswer: { "@type": "Answer", text: faq.answer },
//             })),
//           }),
//         }}
//       />

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aiprojectreport.com/" },
//               { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aiprojectreport.com/blog" },
//               { "@type": "ListItem", position: 3, name: post.title, item: `https://www.aiprojectreport.com/blog/${post.slug}` },
//             ],
//           }),
//         }}
//       />
//       {/* ---------- Breadcrumb JSON-LD ---------- */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             itemListElement: [
//               {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: "https://www.aiprojectreport.com/",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Blog",
//                 item: "https://www.aiprojectreport.com/blog",
//               },
//               {
//                 "@type": "ListItem",
//                 position: 3,
//                 name: post.title,
//                 item: `https://www.aiprojectreport.com/blog/${post.slug}`,
//               },
//             ],
//           }),
//         }}
//       />
//     </div>
//   )
// }


export const runtime = "edge"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, User, Calendar, BookOpen } from "lucide-react"
import BackButton from "../[slug]/BackButton"
import ShareButton from "../[slug]/ShareButton"
import Header from "./Header"
import { fetchBlogBySlug, fetchAllPosts } from "@/lib/blogApi"

// ---------- SEO Metadata ----------
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchBlogBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | AI Report Studio`,
    description: post.description,
    keywords: post.tags?.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `https://www.aiprojectreport.com/blog/${post.slug}`,
      images: post.image ? [{ url: post.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: { canonical: `https://www.aiprojectreport.com/blog/${post.slug}` },
  }
}

// ---------- Main Page ----------
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await fetchBlogBySlug(slug)
  if (!post) notFound()

  const allPosts = await fetchAllPosts()
  const relatedPosts = allPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  const faqs = [
    {
      question: "What is AI Report Studio?",
      answer: "AI Report Studio is a platform for AI-generated insights and blogs.",
    },
    { question: "Can I share this blog?", answer: "Yes, you can use the share button to share on social media." },
  ]

  const formatContent = (content: string) =>
    content.split("\n").map((line, index) => {
      if (line.startsWith("# "))
        return (
          <h1 key={index} className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 mt-8">
            {line.substring(2)}
          </h1>
        )
      if (line.startsWith("## "))
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4 mt-8">
            {line.substring(3)}
          </h2>
        )
      if (line.startsWith("### "))
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-3 mt-6">
            {line.substring(4)}
          </h3>
        )
      if (line.startsWith("- "))
        return (
          <li key={index} className="text-gray-700 mb-2">
            {line.substring(2)}
          </li>
        )
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {line}
        </p>
      )
    })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <Header />

      {/* Breadcrumbs */}
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 text-sm text-gray-600" aria-label="Breadcrumb">
        <ol className="list-none p-0 inline-flex space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>&gt;</li>
          <li>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
          </li>
          <li>&gt;</li>
          <li aria-current="page">{post.title}</li>
        </ol>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <BackButton />
      </div>

      {/* Article */}
      <article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            {post.featured && <Badge className="bg-blue-500">Featured</Badge>}
          </div>

          <h1 itemProp="headline" className="hero-responsive font-bold font-serif text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p itemProp="description" className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.description}
          </p>

          {post.image && (
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={450}
              className="rounded-lg shadow mb-8"
              priority
              itemProp="image"
            />
          )}

          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span itemProp="author">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time itemProp="datePublished">{post.publishedDate}</time>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} mins</span>
            </div>
            <ShareButton />
          </div>
        </header>

        <div
          className="prose prose-lg max-w-none bg-white rounded-lg p-8 shadow-sm prose-content"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FAQ Section */}
        {/* <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <dl className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <dt className="font-semibold text-gray-900">{faq.question}</dt>
                <dd className="text-gray-700 mt-2">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section> */}

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Written by{" "}
            <span itemProp="author" className="font-medium">
              {post.author}
            </span>
          </p>
        </footer>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <article
                  key={relatedPost.slug}
                  className="bg-white rounded-lg p-6 shadow-sm"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <Badge variant="secondary" className="mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-3" itemProp="headline">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 mb-4" itemProp="description">
                    {relatedPost.description}
                  </p>
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <Button variant="outline" size="sm">
                      <BookOpen className="w-4 h-4 mr-2" /> Read full article
                    </Button>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- JSON-LD scripts remain unchanged ---------- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            image: post.image ? { "@type": "ImageObject", url: post.image, width: 800, height: 450 } : undefined,
            author: { "@type": "Person", name: post.author },
            publisher: { "@type": "Organization", name: "AI Report Studio" },
            keywords: post.tags?.join(", "),
            url: `https://www.aiprojectreport.com/blog/${post.slug}`,
            datePublished: post.publishedDate,
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.aiprojectreport.com/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.aiprojectreport.com/blog" },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
                item: `https://www.aiprojectreport.com/blog/${post.slug}`,
              },
            ],
          }),
        }}
      />
    </div>
  )
}
