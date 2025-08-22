"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-100/40 rounded-full animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-200/30 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-cyan-200/20 rounded-full animate-float-slow"></div>

      {/* Small floating dots */}
      <div className="absolute top-32 left-1/4 w-3 h-3 bg-blue-400/50 rounded-full animate-float-medium animate-delay-1000"></div>
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-cyan-400/60 rounded-full animate-float-fast animate-delay-2000"></div>
      <div className="absolute bottom-60 left-1/3 w-4 h-4 bg-blue-300/40 rounded-full animate-float-slow animate-delay-1500"></div>
      <div className="absolute bottom-32 right-1/4 w-2 h-2 bg-cyan-300/50 rounded-full animate-float-medium animate-delay-500"></div>
    </div>
  )
}
