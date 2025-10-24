"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <Link href="/blog">
      <Button
        variant="ghost"
        className={`mb-6 btn-hover-effect ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Button>
    </Link>
  )
}
