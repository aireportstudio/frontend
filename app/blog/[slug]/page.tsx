"use client"
export const runtime = 'edge'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getBlogPost, blogPosts } from "@/lib/blog-data"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState, useEffect, use } from "react"
import { ArrowLeft, Clock, User, Calendar, Share2, BookOpen } from "lucide-react"

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = use(params)
  const [isVisible, setIsVisible] = useState(false)
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Convert markdown-style content to JSX
  const formatContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 mt-8">
            {line.substring(2)}
          </h1>
        )
      } else if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold font-serif text-gray-900 mb-4 mt-8">
            {line.substring(3)}
          </h2>
        )
      } else if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl md:text-2xl font-bold font-serif text-gray-900 mb-3 mt-6">
            {line.substring(4)}
          </h3>
        )
      } else if (line.startsWith("#### ")) {
        return (
          <h4 key={index} className="text-lg md:text-xl font-bold font-serif text-gray-900 mb-3 mt-4">
            {line.substring(5)}
          </h4>
        )
      } else if (line.startsWith("- ")) {
        return (
          <li key={index} className="text-gray-700 mb-2">
            {line.substring(2)}
          </li>
        )
      } else if (line.startsWith("**") && line.endsWith("**")) {
        return (
          <p key={index} className="font-bold text-gray-900 mb-4">
            {line.substring(2, line.length - 2)}
          </p>
        )
      } else if (line.trim() === "") {
        return <br key={index} />
      } else if (line.startsWith("```")) {
        return null // Skip code block markers for now
      } else {
        return (
          <p key={index} className="text-gray-700 mb-4 leading-relaxed">
            {line}
          </p>
        )
      }
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navigation Header */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold font-serif gradient-text">
                AI Report Studio
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Features
              </Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Testimonials
              </Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-blue-600 font-medium">
                Blog
              </Link>
              <Link href="/#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                FAQ
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center">
              <Button variant="ghost" className="md:hidden">
                Menu
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Back to Blog */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link href="/blog">
          <Button
            variant="ghost"
            className={`mb-6 btn-hover-effect ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <header className="mb-12">
          <div className={`mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            {post.featured && <Badge className="bg-blue-500 ml-2">Featured</Badge>}
          </div>

          <h1
            className={`hero-responsive font-bold font-serif text-gray-900 leading-tight mb-6 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}
          >
            {post.title}
          </h1>

          <p
            className={`text-xl text-gray-600 mb-8 leading-relaxed ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}
          >
            {post.description}
          </p>

          {/* Article Meta */}
          <div
            className={`flex flex-wrap items-center gap-6 text-gray-600 mb-8 ${isVisible ? "animate-fade-in-up animate-delay-300" : "opacity-0"}`}
          >
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.publishedDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <Button variant="ghost" size="sm" className="btn-hover-effect">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>

          <div
            className={`text-sm text-gray-600 mb-8 ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}
          >
            <span className="font-medium">{post.authorRole}</span>
          </div>

          {/* Tags */}
          <div
            className={`flex flex-wrap gap-2 mb-8 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}
          >
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        {/* Article Content */}
        <div
          className={`prose prose-lg max-w-none ${isVisible ? "animate-fade-in-up animate-delay-600" : "opacity-0"}`}
        >
          <div className="bg-white rounded-lg p-8 shadow-sm">{formatContent(post.content)}</div>
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-sm text-gray-600">
                Written by <span className="font-medium text-gray-900">{post.author}</span>
              </p>
              <p className="text-sm text-gray-500">{post.authorRole}</p>
            </div>
            <Button variant="outline" className="btn-hover-effect bg-transparent">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="heading-responsive font-bold font-serif text-gray-900 mb-4">Related Articles</h2>
              <p className="text-responsive text-gray-600">Continue reading with these related articles</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <div
                  key={relatedPost.slug}
                  className={`card-hover ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${index * 100 + 700}ms` }}
                >
                  <div className="bg-white rounded-lg p-6 shadow-sm h-full flex flex-col">
                    <Badge variant="secondary" className="w-fit mb-3">
                      {relatedPost.category}
                    </Badge>
                    <h3 className="text-lg font-bold font-serif text-gray-900 mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{relatedPost.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{relatedPost.author}</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button variant="outline" size="sm" className="w-full btn-hover-effect bg-transparent">
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read Article
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold text-blue-400 mb-4">AI Report Studio</div>
              <p className="text-gray-400 text-sm">
                Professional AI-Powered Project Report Generation Platform for Final Year Students
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>Built with v0</p>
          </div> */}
        </div>
      </footer>
    </div>
  )
}
