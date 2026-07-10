import { MapPin } from "lucide-react"
import { BUSINESS } from "@/lib/business"

export function ProudlyServing() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center gap-2">
            <MapPin className="h-6 w-6 shrink-0 text-primary" />
            <h2 className="font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
              Proudly Serving Conshohocken and Beyond
            </h2>
          </div>
          <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
            Our shop sits at {BUSINESS.address} in the heart of {BUSINESS.city}, but the grill
            feeds a lot more than one zip code. We&apos;re a quick drive off the Blue Route and
            the Schuylkill Expressway, so cheesesteaks and takeout from MasterPeace are an easy
            call for lunch breaks in
            King of Prussia, job sites in Norristown, and family dinners in Plymouth Meeting and
            Lafayette Hill.
          </p>
          <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
            Order online for pickup, or call ahead and it&apos;ll be hot and wrapped when you walk
            in.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {BUSINESS.serviceAreas.map((town) => (
              <li
                key={town}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
              >
                {town}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
