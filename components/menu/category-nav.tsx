"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export type MenuNavSection = {
  id: string
  label: string
}

/** Vertical px from viewport top where a section counts as "active". */
const ACTIVE_OFFSET = 180

/** JS behavior:"smooth" overrides the CSS reduced-motion fallback, so gate it here. */
function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
}

/**
 * Sticky in-page category nav. Sits just below the fixed site header,
 * highlights the section in view and smooth-scrolls on click. Anchor
 * targets handle the offset themselves via scroll-mt utilities.
 */
export function CategoryNav({ sections }: { sections: MenuNavSection[] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "")
  const listRef = useRef<HTMLDivElement>(null)
  const pillRefs = useRef(new Map<string, HTMLAnchorElement>())

  // Track which section is in view.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        let current = sections[0]?.id ?? ""
        for (const section of sections) {
          const el = document.getElementById(section.id)
          if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) {
            current = section.id
          }
        }
        setActiveId(current)
      })
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [sections])

  // Keep the active pill centered in the horizontal strip.
  useEffect(() => {
    const container = listRef.current
    const pill = pillRefs.current.get(activeId)
    if (!container || !pill) return
    container.scrollTo({
      left: pill.offsetLeft - container.clientWidth / 2 + pill.clientWidth / 2,
      behavior: scrollBehavior(),
    })
  }, [activeId])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    setActiveId(id)
    el.scrollIntoView({ behavior: scrollBehavior(), block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <nav
      aria-label="Menu categories"
      className="sticky top-16 sm:top-20 z-40 border-y border-border bg-background/95 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={listRef}
          className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              ref={(el) => {
                if (el) pillRefs.current.set(section.id, el)
                else pillRefs.current.delete(section.id)
              }}
              onClick={(event) => handleClick(event, section.id)}
              aria-current={activeId === section.id ? "true" : undefined}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                activeId === section.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
