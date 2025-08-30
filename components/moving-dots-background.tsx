"use client"

import { useEffect, useRef } from "react"

interface Dot {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export default function MovingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const dotsRef = useRef<Dot[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect()
      if (rect) {
        canvas.width = rect.width
        canvas.height = rect.height
      }
    }

    const createDots = () => {
      const dots: Dot[] = []
      const numDots = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000))
      for (let i = 0; i < numDots; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }

      dotsRef.current = dots
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      dotsRef.current.forEach((dot) => {
        // Update position
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x <= 0 || dot.x >= canvas.width) dot.vx *= -1
        if (dot.y <= 0 || dot.y >= canvas.height) dot.vy *= -1

        // Keep dots in bounds
        dot.x = Math.max(0, Math.min(canvas.width, dot.x))
        dot.y = Math.max(0, Math.min(canvas.height, dot.y))

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(59, 130, 246, ${dot.opacity})`
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createDots()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createDots()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
