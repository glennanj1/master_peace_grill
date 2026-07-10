"use client"

import { motion } from "framer-motion"

import { BUSINESS } from "@/lib/business"

export function AboutHero() {
  return (
    <section className="pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold uppercase tracking-widest text-sm mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl sm:text-6xl text-foreground mb-6">
            About MasterPeace Grill
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Owner operated for over 11 years at {BUSINESS.address} in {BUSINESS.city},{" "}
            {BUSINESS.state}. Really good food made fresh every day, served by the people
            who own the place.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
