import type { Metadata } from "next"

import { BUSINESS, SITE_URL } from "@/lib/business"
import { HomeHero } from "@/components/home/home-hero"
import { SignatureItems } from "@/components/home/signature-items"
import { WhyMasterPeace } from "@/components/home/why-masterpeace"
import { ReviewsSection } from "@/components/home/reviews-section"
import { CateringBand } from "@/components/home/catering-band"
import { ProudlyServing } from "@/components/home/proudly-serving"
import { HoursLocation } from "@/components/home/hours-location"

// Absolute title: the layout's title.template does not apply to a page
// in the same route segment, so the brand suffix must be included here.
export const metadata: Metadata = {
  title: {
    absolute: "Best Cheesesteaks in Conshohocken, PA | MasterPeace Grill",
  },
  description:
    "Voted Best of Conshy for cheesesteaks. MasterPeace Grill serves authentic Philly cheesesteaks, hoagies, wings and burgers at 523 Fayette St in Conshohocken, PA. Owner operated for over 11 years. Order online or call (484) 344-5250.",
  alternates: {
    canonical: "/",
  },
}

// Restaurant JSON-LD: NAP, hours, hasMenu, sameAs. NO aggregateRating
// (Google policy: self-serving review markup is ignored and risks penalties).
const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: BUSINESS.name,
  url: SITE_URL,
  image: `${SITE_URL}/mpg_meta.jpg`,
  telephone: BUSINESS.phoneHref.replace("tel:", ""),
  priceRange: "$$",
  servesCuisine: ["Cheesesteaks", "Sandwiches", "American"],
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "US",
  },
  hasMenu: `${SITE_URL}/menu`,
  openingHoursSpecification: BUSINESS.hours
    .filter((entry) => entry.opens !== null && entry.closes !== null)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: entry.day,
      opens: entry.opens,
      closes: entry.closes,
    })),
  sameAs: [BUSINESS.facebook, BUSINESS.yelp],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomeHero />
      <SignatureItems />
      <WhyMasterPeace />
      <ReviewsSection />
      <CateringBand />
      <ProudlyServing />
      <HoursLocation />
    </>
  )
}
