"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => pathname === path

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Slogan */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="/logo.jpg" alt="Swawlambi Foundation Logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Swawlambi Foundation</h1>
              <p className="text-sm text-emerald-300 hidden sm:block">Caring for minds, bodies, and Earth we share</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                isActive("/") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection("campaigns")}
              className="text-gray-200 hover:text-emerald-400 font-medium transition-colors"
            >
              Our Work
            </button>
            <Link
              href="/gallery"
              className={`font-medium transition-colors ${
                isActive("/gallery") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
              }`}
            >
              Gallery
            </Link>
            <button
              onClick={() => scrollToSection("future-plans")}
              className="text-gray-200 hover:text-emerald-400 font-medium transition-colors"
            >
              Future Plans
            </button>
            <Link
              href="/about"
              className={`font-medium transition-colors ${
                isActive("/about") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`font-medium transition-colors ${
                isActive("/contact") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className={`font-medium text-left transition-colors ${
                  isActive("/") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection("campaigns")}
                className="text-gray-200 hover:text-emerald-400 font-medium text-left transition-colors"
              >
                Our Work
              </button>
              <Link
                href="/gallery"
                className={`font-medium text-left transition-colors ${
                  isActive("/gallery") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <button
                onClick={() => scrollToSection("future-plans")}
                className="text-gray-200 hover:text-emerald-400 font-medium text-left transition-colors"
              >
                Future Plans
              </button>
              <Link
                href="/about"
                className={`font-medium text-left transition-colors ${
                  isActive("/about") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`font-medium text-left transition-colors ${
                  isActive("/contact") ? "text-emerald-400" : "text-gray-200 hover:text-emerald-400"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
