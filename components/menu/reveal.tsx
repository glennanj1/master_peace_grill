"use client"

import { motion } from "framer-motion"

/**
 * Subtle scroll reveal. Only used for decorative blocks (photos); all
 * menu text stays in plain server-rendered markup for SEO.
 */
export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
