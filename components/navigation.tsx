"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const isHomepage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact Us" },
    { href: "/faq", label: "FAQ" },
  ]

  const getTextColor = () => {
    if (isScrolled) return "text-gray-900"
    return isHomepage ? "text-white" : "text-gray-900"
  }

  const getPhoneColor = () => {
    if (isScrolled) return "text-gray-700"
    return isHomepage ? "text-white/95" : "text-gray-700"
  }

  const getMobileButtonColor = () => {
    if (isScrolled) return "text-gray-900 hover:text-gray-700 hover:bg-gray-100"
    return isHomepage
      ? "text-white hover:text-white/80 hover:bg-white/10"
      : "text-gray-900 hover:text-gray-700 hover:bg-gray-100"
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 md:bg-transparent",
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="All Dogs Training Co Logo"
              width={120}
              height={60}
              className="h-12 w-auto lg:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn("hover:text-accent transition-colors duration-200 font-medium", getTextColor())}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone Numbers & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-sm space-y-1">
              <div className={cn("flex items-center space-x-1", getPhoneColor())}>
                <Phone className="h-4 w-4" />
                <span>Houston: (713) 909-7968</span>
              </div>
            </div>
            <Button asChild className="bg-accent hover:bg-accent/70 text-accent-foreground">
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={cn("lg:hidden", getMobileButtonColor())}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-gray-900 hover:text-accent transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>Austin: (512) 648-4510</span>
                </div>
                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>Houston: (713) 909-7968</span>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/70 text-white mt-4">
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
