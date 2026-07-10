import { Clock, ExternalLink, MapPin, Phone } from "lucide-react"
import { BUSINESS } from "@/lib/business"

const FULL_ADDRESS = `${BUSINESS.name}, ${BUSINESS.address}, ${BUSINESS.cityState}`

// Keyless Google Maps embed for the shop. The CRA embed required a Maps API
// key we do not ship here; this output=embed form needs none.
const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(FULL_ADDRESS)}&z=16&output=embed`

const DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`

export function HoursLocation() {
  return (
    <section id="hours" className="bg-card/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center sm:mb-16">
          <h2 className="mb-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Hours and Location
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Find us on Fayette Street in downtown Conshohocken.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Hours card */}
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-3xl tracking-wide text-foreground">
                Hours of Operation
              </h3>
            </div>
            <ul className="divide-y divide-border">
              {BUSINESS.hours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between py-3">
                  <span className="font-medium text-foreground">{entry.day}</span>
                  <span
                    className={
                      entry.opens === null
                        ? "font-semibold text-primary"
                        : "text-muted-foreground"
                    }
                  >
                    {entry.display}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Phone className="h-4 w-4" />
                {BUSINESS.phone}
              </a>
              <a
                href={BUSINESS.onlineOrderUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Order Online
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Map + address card */}
          <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="min-h-72 flex-1">
              <iframe
                title={`Map of ${BUSINESS.name} at ${BUSINESS.address}, ${BUSINESS.cityState}`}
                src={MAP_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "18rem" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:p-8">
              <address className="flex items-center gap-3 not-italic">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">
                  {BUSINESS.address}, {BUSINESS.cityState}
                </span>
              </address>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Get Directions
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
