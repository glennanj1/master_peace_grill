"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { ExternalLink, Menu, Phone, X } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { cn } from "@/lib/utils"

const pillLink =
  "inline-flex items-center justify-center gap-1.5 rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center" onClick={closeMobileMenu}>
              <Image
                src="/images/mpglogo2.png"
                alt="MasterPeace Grill logo"
                width={180}
                height={50}
                className="h-9 sm:h-11 w-auto"
                priority
              />
              <span className="sr-only">MasterPeace Grill home</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                href="/menu"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Menu
              </Link>
              {/* Plain anchor: /catering is a separate app served via rewrite. */}
              <a
                href={BUSINESS.cateringHref}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Catering
              </a>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                About
              </Link>
              <a
                href={BUSINESS.onlineOrderUrl}
                target="_blank"
                rel="noopener"
                className={cn(
                  pillLink,
                  "border-2 border-primary bg-primary/10 px-4 py-1.5 text-sm text-primary hover:bg-primary hover:text-primary-foreground"
                )}
              >
                Order Online
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>

            {/* CTA */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <a
                href={BUSINESS.phoneHref}
                className={cn(
                  pillLink,
                  "hidden sm:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 text-sm"
                )}
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phone}
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                className="md:hidden -mr-1.5 p-2.5 text-foreground rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-nav-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-background border-b border-border"
            >
              <nav className="flex flex-col px-4 py-4 space-y-4">
                <Link
                  href="/menu"
                  onClick={closeMobileMenu}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Menu
                </Link>
                <a
                  href={BUSINESS.cateringHref}
                  onClick={closeMobileMenu}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Catering
                </a>
                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  About
                </Link>
                <a
                  href={BUSINESS.onlineOrderUrl}
                  target="_blank"
                  rel="noopener"
                  onClick={closeMobileMenu}
                  className={cn(
                    pillLink,
                    "border-2 border-primary bg-primary/10 px-4 py-2.5 text-base text-primary hover:bg-primary hover:text-primary-foreground"
                  )}
                >
                  Order Online
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS.phoneHref}
                  onClick={closeMobileMenu}
                  className={cn(
                    pillLink,
                    "w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-3 text-base"
                  )}
                >
                  <Phone className="w-4 h-4" />
                  Call to Order
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Floating Call Button (Mobile) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-6 z-50 sm:hidden"
      >
        <a
          href={BUSINESS.phoneHref}
          className={cn(
            pillLink,
            "w-16 h-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl animate-pulse-glow"
          )}
        >
          <Phone className="w-6 h-6" />
          <span className="sr-only">Call to order</span>
        </a>
      </motion.div>
    </>
  )
}
