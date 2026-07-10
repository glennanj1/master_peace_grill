"use client"

import { motion } from "framer-motion"
import { Award, Flame, Heart, Sandwich, Star, UtensilsCrossed } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Owner Operated",
    description:
      "Owner operated and run every day for over 11 years. When you call, you're talking to the people who actually make your food.",
  },
  {
    icon: Flame,
    title: "Fresh, Never Frozen",
    description:
      "Our cheeseburgers are made with fresh Certified Angus ground beef. Never frozen, ever.",
  },
  {
    icon: UtensilsCrossed,
    title: "Liscio's Rolls Daily",
    description:
      "Our Italian rolls are delivered fresh every day from Liscio's Bakery, the best in the region.",
  },
  {
    icon: Heart,
    title: "Sliced Cooper Sharp",
    description:
      "We slice real Cooper Sharp for that sharp, melty bite, not the generic stuff. It's what sets our cheesesteaks apart.",
  },
  {
    icon: Sandwich,
    title: "Build Your MasterPeace",
    description:
      "Create your own MasterPeace sandwich, steak or wrap. You choose the ingredients, we build it.",
  },
  {
    icon: Star,
    title: "Cut and Sliced In House",
    description:
      "Our fries and chips are fresh cut and sliced in house. Small details make a big difference.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export function ValuesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            No shortcuts, no gimmicks. Just fresh ingredients, honest cooking and a shop
            run by its owners.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {values.map((value) => (
            <motion.div key={value.title} variants={itemVariants} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 sm:mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
