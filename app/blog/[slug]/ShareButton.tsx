"use client"

import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"

export default function ShareButton() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url: window.location.href,
      })
    } else {
      alert("Sharing is not supported in this browser.")
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={share} className="btn-hover-effect">
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  )
}
