"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const items = [
  {
    name: "Cheesesteaks",
    image: "/images/food/cheesesteaks.jpeg",
    alt: "Philly cheesesteaks on fresh rolls at MasterPeace Grill",
    description:
      "Our claim to fame. Philly Steak, Tiger Steak, Buffalo Chicken and Pizza Steak with Cooper Sharp, provolone or Wiz.",
  },
  {
    name: "Hoagies & Grinders",
    image: "/images/menu/hoagie.jpg",
    alt: "Italian hoagie stacked with meats and cheese",
    description:
      "Italian hoagies and hot grinders on fresh Liscio's rolls, stacked and cut to order.",
  },
  {
    name: "Wings",
    image: "/images/menu/wings.jpg",
    alt: "Crispy wings tossed in sauce",
    description: "Crispy wings tossed in your choice of sauce, by the 5, 10 or 20.",
  },
  {
    name: "Wraps",
    image: "/images/food/buffalo_chicken_wrap.jpg",
    alt: "Buffalo chicken wrap cut in half",
    description:
      "Cuban, Southwestern Turkey, Buffalo Tender, Turkey BLT and more, or build your own.",
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

export function SignatureItems() {
  return (
    <section id="signature" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center sm:mb-16"
        >
          <h2 className="mb-4 font-display text-4xl text-foreground sm:text-5xl lg:text-6xl">
            What We&apos;re Known For
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Everything comes off the grill made to order. These are the ones Conshohocken keeps
            coming back for.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div key={item.name} variants={itemVariants} className="group">
              <Link
                href="/menu"
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 font-display text-2xl tracking-wide text-foreground">
                    {item.name}
                  </h3>
                  <p className="flex-1 leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    See the menu
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
