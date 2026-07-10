"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, MapPin, Phone, Star, UtensilsCrossed } from "lucide-react"
import { BUSINESS } from "@/lib/business"

const pill =
  "inline-flex w-full items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3.5 text-base sm:text-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto"

export function HomeHero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Background photo with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/cheesesteaks.jpg"
          alt="Fresh Philly cheesesteaks on the grill at MasterPeace Grill in Conshohocken, PA"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/45 to-background" />
      </div>

      {/* Soft red glows */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-20 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center px-4 pb-12 pt-24 text-center sm:px-6 sm:pt-28 lg:px-8">
        {/* Top cluster: award + owner-operated badges.
            CSS-only reveals (motion-safe) keep the SSR HTML free of inline
            opacity:0, so text stays visible to non-JS crawlers and users. */}
        <div className="flex flex-col items-center gap-3">
          <div
            className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/40 bg-card/80 px-4 py-2 backdrop-blur-sm motion-safe:animate-fade-in-up"
            style={{ animationFillMode: "both" }}
          >
            <Star className="h-4 w-4 shrink-0 fill-primary text-primary" />
            <span className="text-balance text-xs font-semibold text-foreground sm:text-sm">
              Voted Best of Conshy, Best CheeseSteaks 2017 to 2025
            </span>
          </div>

          <div
            className="inline-flex max-w-full items-center rounded-full border border-border bg-background/85 px-4 py-2 backdrop-blur-sm motion-safe:animate-fade-in-up"
            style={{ animationDelay: "0.05s", animationFillMode: "both" }}
          >
            <span className="text-balance text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Owner Operated and Run Every Day for Over 11 Years
            </span>
          </div>
        </div>

        {/* Spacer lets the food photo breathe */}
        <div className="flex-1" />

        {/* Bottom cluster: H1 + CTAs */}
        <div className="flex w-full flex-col items-center">
          <h1
            className="mb-4 break-words font-display text-5xl tracking-tight text-foreground sm:text-7xl lg:text-8xl motion-safe:animate-fade-in-up"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            <span className="text-balance">Conshohocken&apos;s Best</span>
            <br />
            <span className="text-primary">Cheesesteaks</span>
          </h1>

          <p
            className="mb-8 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl motion-safe:animate-fade-in-up"
            style={{ animationDelay: "0.18s", animationFillMode: "both" }}
          >
            Authentic Philly cheesesteaks, hoagies, wings and burgers made to order on Fayette
            Street. Owner operated for over 11 years.
          </p>

          <div
            className="flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center motion-safe:animate-fade-in-up"
            style={{ animationDelay: "0.26s", animationFillMode: "both" }}
          >
            <a
              href={BUSINESS.onlineOrderUrl}
              target="_blank"
              rel="noopener"
              className={`${pill} group animate-pulse-glow bg-primary text-primary-foreground hover:bg-primary/90`}
            >
              Order Online
              <ArrowRight className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
            </a>
            <Link
              href="/menu"
              className={`${pill} border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground`}
            >
              See the Menu
            </Link>
            {/* Plain anchor: /catering is a separate app served via rewrite. */}
            <a
              href={BUSINESS.cateringHref}
              className={`${pill} border-2 border-foreground/20 bg-transparent text-foreground hover:border-primary hover:text-primary`}
            >
              <UtensilsCrossed className="h-5 w-5 shrink-0" />
              Catering
            </a>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 text-muted-foreground motion-safe:animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "both" }}
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">
                {BUSINESS.address}, {BUSINESS.cityState}
              </span>
            </span>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm">{BUSINESS.phone}</span>
            </a>
          </div>

          <motion.a
            href="#signature"
            aria-label="Scroll to signature items"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 8, 0] }}
            transition={{
              opacity: { delay: 0.8, duration: 0.5 },
              y: { duration: 1.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="mt-6 text-muted-foreground transition-colors hover:text-primary"
          >
            <ChevronDown className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
