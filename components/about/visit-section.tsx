"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Phone } from "lucide-react"

import { BUSINESS } from "@/lib/business"

const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${BUSINESS.name} ${BUSINESS.address} ${BUSINESS.cityState}`
)}`

export function VisitSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            Visit Us in Conshohocken
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Stop by the shop, call ahead for pickup or order online. We&apos;re proud to
            serve {BUSINESS.serviceAreas.join(", ")} and the surrounding area.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Address + phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border flex flex-col gap-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Find Us</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.cityState}
                </p>
                <a
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-2 text-primary font-medium hover:underline"
                >
                  Get directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                <a
                  href={BUSINESS.phoneHref}
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  {BUSINESS.phone}
                </a>
                <p className="text-sm text-muted-foreground mt-1">
                  Call ahead and your order is ready when you arrive.
                </p>
              </div>
            </div>

            <div className="mt-auto flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.onlineOrderUrl}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 font-semibold transition-colors"
              >
                Order Online
              </a>
              {/* Plain anchor: /catering is a separate app served via rewrite. */}
              <a
                href={BUSINESS.cateringHref}
                className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 font-semibold transition-colors"
              >
                Explore Catering
              </a>
            </div>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 rounded-2xl bg-card border border-border"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground pt-2.5">Hours</h3>
            </div>
            <ul className="divide-y divide-border">
              {BUSINESS.hours.map((entry) => (
                <li key={entry.day} className="flex items-center justify-between py-3">
                  <span className="text-foreground font-medium">{entry.day}</span>
                  <span
                    className={
                      entry.opens === null
                        ? "text-primary font-medium"
                        : "text-muted-foreground"
                    }
                  >
                    {entry.display}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
