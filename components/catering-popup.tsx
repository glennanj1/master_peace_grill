"use client"

// Corner popup promoting online catering orders (/catering).
// Port of the CRA CateringPopup (src/config/cateringPopup.js +
// src/markup/Element/CateringPopup.js) restyled with Tailwind tokens.
// Behavior preserved: 1.5s slide-in delay, dismissal remembered for the
// browser session, plain anchor to /catering (separate app via rewrite).

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

const CATERING_POPUP = {
  enabled: true,
  badge: "NEW",
  title: "Order Catering Online",
  copy: "Build your tray in minutes. Cheesesteaks, hoagies, wraps, wings and more.",
  cta: {
    label: "Build Your Tray",
    href: "/catering",
  },
  delayMs: 1500,
  storageKey: "mpg-catering-popup-dismissed",
} as const

export function CateringPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!CATERING_POPUP.enabled) return

    try {
      if (window.sessionStorage.getItem(CATERING_POPUP.storageKey) === "1") return
    } catch {
      // Storage unavailable (private mode) - still show the popup.
    }

    const timer = window.setTimeout(() => setVisible(true), CATERING_POPUP.delayMs)
    return () => window.clearTimeout(timer)
  }, [])

  const dismiss = () => {
    setVisible(false)
    try {
      window.sessionStorage.setItem(CATERING_POPUP.storageKey, "1")
    } catch {
      // Ignore storage failures; the popup just reappears next page.
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          role="complementary"
          aria-label="Catering announcement"
          className="fixed bottom-5 left-5 z-40 w-[min(340px,calc(100vw-40px))] rounded-2xl border border-primary/35 bg-card p-5 shadow-2xl"
        >
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss"
            className="absolute top-2.5 right-3 flex h-7 w-7 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="mb-3 inline-flex items-center rounded-full border border-primary/50 bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            {CATERING_POPUP.badge}
          </div>
          <div className="mb-2 font-display text-2xl leading-tight text-foreground">
            {CATERING_POPUP.title}
          </div>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
            {CATERING_POPUP.copy}
          </p>
          {/* Plain anchor: /catering is served by the catering app via rewrite,
              not a route in this app. */}
          <a
            href={CATERING_POPUP.cta.href}
            className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {CATERING_POPUP.cta.label}
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
