"use client"

import { motion } from "framer-motion"
import { ExternalLink, Star } from "lucide-react"
import { BUSINESS } from "@/lib/business"
import { REVIEWS } from "@/lib/reviews"

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

/** "2022-11-23" -> "Nov 2022" without Date parsing (avoids timezone drift). */
function formatDate(isoDate: string): string {
  const [year, month] = isoDate.split("-")
  const monthName = MONTHS[Number(month) - 1] ?? ""
  return `${monthName} ${year}`.trim()
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function ReviewsSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            What Customers Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Real reviews from real customers on Yelp.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
        >
          {REVIEWS.map((review) => (
            <motion.figure
              key={review.author}
              variants={itemVariants}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30 sm:p-8"
            >
              <div className="mb-4 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="flex-1 leading-relaxed text-foreground">
                &quot;{review.text}&quot;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <div className="font-semibold text-foreground">{review.author}</div>
                  <div className="text-sm text-muted-foreground">{formatDate(review.date)}</div>
                </div>
                <a
                  href={review.url}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Read on Yelp
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href={BUSINESS.yelp}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-6 py-2.5 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            See More Reviews on Yelp
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
