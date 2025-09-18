"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action Buttons */}
      <div
        className={cn(
          "flex flex-col space-y-3 mb-3 transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white shadow-lg rounded-full h-14 w-14 p-0"
        >
          <a href="tel:7139097968" title="Call Houston">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg rounded-full h-14 w-14 p-0"
        >
          <a href="tel:5126484510" title="Call Austin">
            <Phone className="h-6 w-6" />
          </a>
        </Button>
      </div>

      {/* Main FAB */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={cn(
          "bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg rounded-full h-16 w-16 p-0 transition-transform duration-300",
          isOpen && "rotate-45",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}
