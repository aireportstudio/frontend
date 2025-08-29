"use client"
import { Button } from "@/components/ui/button"
import { X, Menu, Home, Info, Star, DollarSign, BookOpen, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"

interface MobileNavProps {
  isOpen: boolean
  onToggle: () => void
}

export function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <Button variant="ghost" size="sm" className="md:hidden p-2" onClick={onToggle} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onToggle} />

          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-lg font-bold font-serif gradient-text">AI Report Studio</span>
              <Button variant="ghost" size="sm" onClick={onToggle}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="p-4 bg-white">
              <div className="space-y-1">
                <Link
                  href="/"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Home</span>
                </Link>

                <Link
                  href="/#about"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <Info className="h-5 w-5" />
                  <span className="font-medium">About</span>
                </Link>

                <Link
                  href="/#features"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <Star className="h-5 w-5" />
                  <span className="font-medium">Features</span>
                </Link>

                <Link
                  href="/#testimonials"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <Star className="h-5 w-5" />
                  <span className="font-medium">Testimonials</span>
                </Link>

                <Link
                  href="/#pricing"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <DollarSign className="h-5 w-5" />
                  <span className="font-medium">Pricing</span>
                </Link>

                <Link
                  href="/blog"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <BookOpen className="h-5 w-5" />
                  <span className="font-medium">Blog</span>
                </Link>

                <Link
                  href="/#faq"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <HelpCircle className="h-5 w-5" />
                  <span className="font-medium">FAQ</span>
                </Link>

                <Link
                  href="/#contact"
                  className="flex items-center space-x-3 px-3 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  onClick={onToggle}
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Contact</span>
                </Link>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="mt-8 space-y-3">
                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-base btn-hover-effect"
                  onClick={onToggle}
                >
                  Get Started Free
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-3 text-base btn-hover-effect bg-transparent"
                  onClick={onToggle}
                >
                  Watch Demo Video
                </Button>
              </div>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">Need help? We're here 24/7</p>
                <p className="text-sm font-medium text-blue-600 text-center mt-1">
                  <a href="mailto:support@aiprojectreport.com" className="hover:underline">
                    support@aiprojectreport.com
                  </a>
                </p>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
