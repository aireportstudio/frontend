"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Menu, X } from "lucide-react" // 👈 icons for mobile menu

interface BlogPost {
  id: number
  slug: string
  title: string
  description: string
  content: string
  category: string
  author: string
  publishedDate: string
  readTime: string
  tags: string[]
  featured?: boolean
  image?: string
}

interface BlogListProps {
  posts: BlogPost[]
  categories: string[]
}

export default function BlogList({ posts, categories }: BlogListProps) {
  
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // 👈 mobile menu state

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag: any) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Navigation Header */}
      <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold font-serif gradient-text">
                AI Report Studio
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
              <Link href="/#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Features</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Testimonials</Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Pricing</Link>
              <Link href="/blog" className="text-blue-600 font-medium">Blog</Link>
              <Link href="/#faq" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">FAQ</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            </nav>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/#about" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</Link>
              <Link href="/#features" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Features</Link>
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Testimonials</Link>
              <Link href="/#pricing" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Pricing</Link>
              <Link href="/blog" className="text-blue-600 font-medium" onClick={() => setMenuOpen(false)}>Blog</Link>
              <Link href="/#faq" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>FAQ</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`hero-responsive font-bold font-serif text-gray-900 leading-tight mb-4 md:mb-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
              Academic Writing <span className="gradient-text">Blog</span>
            </h1>
            <p className={`text-responsive text-gray-600 max-w-3xl mx-auto mb-8 ${isVisible ? "animate-fade-in-up animate-delay-100" : "opacity-0"}`}>
              Expert insights, tips, and strategies to help you excel in your academic writing journey. From research
              methods to citation styles, we cover everything you need to know.
            </p>
          </div>

          {/* Search & Filter */}
          <div className={`max-w-4xl mx-auto mb-12 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0"}`}>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="btn-hover-effect"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card
                  key={post.slug}
                  className={`card-hover ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${(index % 6) * 100 + 300}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="w-fit">{post.category}</Badge>
                      {post.featured && <Badge className="bg-blue-500">Featured</Badge>}
                    </div>
                    <CardTitle className="text-lg font-serif line-clamp-2">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{post.readTime} mins</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">
                      {new Date(post.publishedDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag: any) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" size="sm" className="w-full btn-hover-effect bg-transparent">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-responsive font-bold font-serif text-gray-900 mb-4">
            Stay Updated with Our Latest Articles
          </h2>
          <p className="text-responsive text-gray-600 mb-8">
            Get the latest academic writing tips, research insights, and study strategies delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-blue-600 hover:bg-blue-700 btn-hover-effect">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">No spam, unsubscribe at any time.</p>
        </div>
      </section>

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
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/#faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/#about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
