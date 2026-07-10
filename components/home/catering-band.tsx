import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { BUSINESS } from "@/lib/business"

export function CateringBand() {
  return (
    <section className="bg-card/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-2">
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src="/images/food/cheesesteak_tray.jpg"
              alt="MasterPeace Grill catering tray filled with cheesesteaks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-card/60" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Feeding a Crowd?
            </p>
            <h2 className="mb-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Cheesesteak Catering
            </h2>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cheesesteak trays, hoagie trays, wraps and salads for parties, offices and game
              days. Built by the same crew, on the same grill, with the same fresh rolls.
            </p>
            <div>
              {/* Plain anchor: /catering is a separate app served via rewrite. */}
              <a
                href={BUSINESS.cateringHref}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:text-lg"
              >
                Explore Catering
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
