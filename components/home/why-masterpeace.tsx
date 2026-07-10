"use client"

import { motion } from "framer-motion"
import { Award, Flame, Heart, Utensils } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Owner Operated",
    description:
      "Owner operated and run every day for over 11 years. When you call, you're talking to the people who actually make your food.",
  },
  {
    icon: Utensils,
    title: "Fresh Liscio's Rolls",
    description:
      "Our Italian rolls are delivered fresh from Liscio's Bakery, the best in the region.",
  },
  {
    icon: Heart,
    title: "Real Cooper Sharp",
    description:
      "We slice real Cooper Sharp for that sharp, melty bite, not the generic stuff. It's what sets our cheesesteaks apart.",
  },
  {
    icon: Flame,
    title: "No Shortcuts",
    description:
      "Every sandwich is made to order on the grill. No fillers, no shortcuts, no heat lamps.",
  },
]

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

export function WhyMasterPeace() {
  return (
    <section className="bg-card/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Why MasterPeace Grill?
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Better than the tourist traps in downtown Philly. Real Philadelphia flavor from
            Conshohocken&apos;s favorite sandwich shop.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <motion.div key={feature.title} variants={itemVariants} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 sm:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 sm:mb-6">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
