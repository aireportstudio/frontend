"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-xl font-bold font-serif gradient-text">
          AI Report Studio
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/#about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/#features" className="text-gray-700 hover:text-blue-600">Features</Link>
          <Link href="/blog" className="text-blue-600">Blog</Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="px-4 py-4 space-y-4 flex flex-col">
            <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/#features" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)} className="text-blue-600">
              Blog
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
