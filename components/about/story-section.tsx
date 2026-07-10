"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
}

export function StorySection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Why eat here */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...reveal}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Why Eat at MasterPeace Grill?
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                That&apos;s a simple question. We&apos;re super friendly and we make really
                good food.
              </p>
              <p>
                At MasterPeace Grill, our food is fresher than your average sandwich shop.
                Our cheeseburgers are made with fresh Certified Angus ground beef, never
                frozen. People love our Italian rolls, delivered fresh daily from
                Liscio&apos;s Bakery, and on many sandwiches, like our Southwest Turkey
                Burger, we use toasted brioche buns.
              </p>
              <p>
                Looking for an awesome sandwich? Try our Tiger Steak: 50% chicken, 50%
                beef, bacon, your choice of cheese, crafted with 100% love.
              </p>
              <p>
                What do we do at MasterPeace that&apos;s unique? We let you create your own
                MasterPeace sandwich, steak or wrap, and our fries and chips are fresh cut
                and sliced in house.
              </p>
            </div>
          </motion.div>
          <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl overflow-hidden border border-border bg-card aspect-[4/3] relative">
              <Image
                src="/images/about/mike_line.jpg"
                alt="Mike, owner of MasterPeace Grill, behind the line with a fresh row of hoagies"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover scale-110"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              Mike on the line with a fresh batch of hoagies.
            </p>
          </motion.div>
        </div>

        {/* Name origin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...reveal} className="order-2 lg:order-1 flex justify-center">
            <Image
              src="/images/about/stealface.jpg"
              alt="MasterPeace Grill skull emblem with a peace sign made of a knife, fork and spoon"
              width={300}
              height={283}
              className="rounded-2xl bg-white p-4 w-56 sm:w-64 h-auto"
            />
          </motion.div>
          <motion.div {...reveal} className="order-1 lg:order-2">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              Ever Wonder Where We Got Our Name?
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                Our name was inspired by &quot;When I Paint My Masterpiece,&quot; a song
                performed by the Grateful Dead. From that moment on, the idea was set: open
                a shop where customers build their own MasterPeace sandwiches.
              </p>
              <p>
                We wanted to be different than your average sandwich shop, so we came up
                with a simple concept. You choose the ingredients, and we&apos;ll build
                your MasterPeace sandwich.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Family business */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div {...reveal}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
              It&apos;s a Family Business
            </h2>
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                MasterPeace Grill is owner operated, plain and simple. Mike and his wife
                have run the shop on Fayette Street for over 11 years, and they&apos;re
                here every day slicing, grilling and building sandwiches themselves.
              </p>
              <p>
                When you call, you&apos;re talking to the people who actually make your
                food. When you walk in, you&apos;re greeted by the owners. That&apos;s the
                way we like it, and we think it&apos;s the reason our regulars keep coming
                back.
              </p>
            </div>
          </motion.div>
          <motion.div {...reveal} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="rounded-2xl overflow-hidden border border-border bg-white p-4">
              <Image
                src="/images/about/mike_and_jean.jpg"
                alt="Mike and his wife, the owners of MasterPeace Grill"
                width={764}
                height={573}
                className="w-full h-auto rounded-xl"
              />
            </div>
            <p className="text-sm text-muted-foreground text-center mt-3">
              The owners of MasterPeace Grill.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
