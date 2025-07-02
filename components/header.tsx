"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { X, Download, ExternalLink, User, Briefcase, Code, Mail } from "lucide-react"

const navigationLinks = [
  { name: "About", href: "/#about", icon: User },
  { name: "Projects", href: "/#projects", icon: Briefcase },
  { name: "Skills", href: "/#skills", icon: Code },
  { name: "Contact", href: "/#contact", icon: Mail },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is mounted before rendering interactive elements
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false)
  }

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  // Close menu when clicking outside (for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isOpen && !target.closest(".mobile-menu") && !target.closest(".menu-trigger")) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("click", handleClickOutside)
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle escape key to close menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  if (!isMounted) {
    return (
      <header className="sticky top-0 z-50 bg-[#111418] border-b border-[#283039]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3 text-white">
              <div className="size-8">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_6_319)">
                    <path
                      d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_6_319">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Yessine Agrebi</h2>
            </div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111418]/95 backdrop-blur-md border-b border-[#283039]/50 shadow-lg"
            : "bg-[#111418] border-b border-[#283039]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-3 text-white group">
              <div className="relative">
                <div className="size-8 transition-transform duration-300 group-hover:scale-110">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_319)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                {/* Animated ring on hover */}
                <div className="absolute inset-0 rounded-full border-2 border-[#3d98f4] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] group-hover:text-[#3d98f4] transition-colors duration-300">
                  Yessine Agrebi
                </h2>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-white text-sm font-medium leading-normal hover:text-[#3d98f4] transition-colors duration-300 group"
                >
                  {link.name}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3d98f4] to-[#2563eb] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                asChild
                variant="outline"
                className="bg-[#283039] border-[#3b4754] text-white hover:bg-[#3a4651] hover:border-[#3d98f4] transition-all duration-300"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-lg">
                  <Download className="w-4 h-4" />
                  Resume
                </a>
              </Button>

              <div className="relative group">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#3b4754] group-hover:border-[#3d98f4] transition-colors duration-300">
                  <Image
                    src="/profile.jpg"
                    alt="Profile"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#10b981] border-2 border-[#111418] rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="menu-trigger relative w-10 h-10 flex items-center justify-center text-white hover:bg-[#283039] hover:text-[#3d98f4] rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#3d98f4] focus:ring-offset-2 focus:ring-offset-[#111418]"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="relative w-6 h-6">
                  {/* Hamburger Icon */}
                  <span
                    className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-4 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                      isOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Bar (Tablet) */}
        <div className="hidden md:block lg:hidden border-t border-[#283039] bg-[#111418]/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4">
            <nav className="flex items-center justify-center space-x-8 py-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-xs font-medium hover:text-[#3d98f4] transition-colors duration-300 px-3 py-2 rounded-md hover:bg-[#1b2127]"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`mobile-menu fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-[#111418] border-l border-[#283039] shadow-2xl transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#283039]">
              <div className="flex items-center gap-3">
                <div className="size-6">
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_6_319)">
                      <path
                        d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"
                        fill="currentColor"
                        className="text-[#3d98f4]"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_319">
                        <rect width="48" height="48" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <span className="text-white font-bold text-lg">Portfolio</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-white hover:bg-[#283039] hover:text-[#3d98f4] rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#3d98f4]"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col p-6 space-y-2">
              {navigationLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center gap-4 p-4 text-white hover:bg-[#1b2127] hover:text-[#3d98f4] rounded-lg transition-all duration-300 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <IconComponent className="w-5 h-5 text-[#9cabba] group-hover:text-[#3d98f4] transition-colors duration-300" />
                    <span className="font-medium">{link.name}</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                )
              })}
            </nav>

            {/* Mobile Actions */}
            <div className="p-6 space-y-4 border-t border-[#283039] mt-auto">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#3d98f4] to-[#2563eb] hover:from-[#2d7bd4] hover:to-[#1d4ed8] text-white font-medium"
                onClick={handleLinkClick}
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </Button>

              {/* Profile Section */}
              <div className="flex items-center gap-3 p-4 bg-[#1b2127] rounded-lg">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#3b4754]">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      alt="Profile"
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#10b981] border-2 border-[#1b2127] rounded-full"></div>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Sarah Chen</p>
                  <p className="text-[#9cabba] text-xs">Full-Stack Developer</p>
                  <div className="flex items-center gap-1 mt-1">
                    <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                    <span className="text-[#10b981] text-xs">Available for work</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4 pt-4">
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-[#283039] border-[#3b4754] text-white hover:bg-[#3a4651] hover:border-[#3d98f4]"
                  onClick={handleLinkClick}
                >
                  <a href="https://linkedin.com/in/sarahchen" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="bg-[#283039] border-[#3b4754] text-white hover:bg-[#3a4651] hover:border-[#3d98f4]"
                  onClick={handleLinkClick}
                >
                  <a href="https://github.com/sarahchen" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
