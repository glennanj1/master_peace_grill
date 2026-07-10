import type { Metadata } from "next"

import { AboutHero } from "@/components/about/about-hero"
import { StorySection } from "@/components/about/story-section"
import { ValuesSection } from "@/components/about/values-section"
import { VisitSection } from "@/components/about/visit-section"

export const metadata: Metadata = {
  title: { absolute: "About Us | MasterPeace Grill Conshohocken" },
  description:
    "The story behind MasterPeace Grill, owner operated for over 11 years in Conshohocken, PA. Fresh Liscio's rolls, Certified Angus beef and build your own cheesesteaks at 523 Fayette St.",
  alternates: {
    canonical: "/about",
  },
  // Page-level openGraph replaces the layout's entirely (shallow merge), so
  // siteName / type / locale / images must be restated here.
  openGraph: {
    title: "About Us | MasterPeace Grill Conshohocken",
    description:
      "The story behind MasterPeace Grill, owner operated for over 11 years in Conshohocken, PA.",
    url: "/about",
    siteName: "MasterPeace Grill",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/mpg_meta.jpg",
        width: 952,
        height: 679,
        alt: "MasterPeace Grill cheesesteaks in Conshohocken, PA",
      },
    ],
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <ValuesSection />
      <VisitSection />
    </>
  )
}
