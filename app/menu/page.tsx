import type { Metadata } from 'next'
import { ExternalLink, Phone } from 'lucide-react'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { formatPrice, getAllCategories, type MenuCategory } from '@/lib/menu'
import { CategoryNav } from '@/components/menu/category-nav'
import { MenuSection } from '@/components/menu/menu-section'
import { isBuildYourOwnItem, isNumericPrice, slugify } from '@/components/menu/menu-config'

export const metadata: Metadata = {
  // Absolute title: the layout template would append a second "| MasterPeace
  // Grill" and push the string past Google's ~60 char truncation point.
  title: { absolute: 'Menu | MasterPeace Grill Cheesesteaks, Conshohocken PA' },
  description:
    'The full MasterPeace Grill menu: Philly cheesesteaks, wings, burgers, wraps, hoagies, salads, grilled cheese and catering trays in Conshohocken, PA. Order online or call (484) 344-5250.',
  alternates: { canonical: '/menu' },
  // Page-level openGraph replaces the layout's entirely (shallow merge), so
  // siteName / type / locale / images must be restated here.
  openGraph: {
    title: 'Menu | MasterPeace Grill Cheesesteaks, Conshohocken PA',
    description:
      'Philly cheesesteaks, wings, burgers, wraps, hoagies, salads and catering trays, made fresh in Conshohocken, PA.',
    url: `${SITE_URL}/menu`,
    siteName: 'MasterPeace Grill',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/mpg_meta.jpg',
        width: 952,
        height: 679,
        alt: 'MasterPeace Grill cheesesteaks in Conshohocken, PA',
      },
    ],
  },
}

// The "General" category holds delivery fees, not food. It renders as an
// info strip under the hero instead of a full section (the CRA skipped it
// entirely; here every menu.json entry stays visible).
const INFO_CATEGORY = 'General'

/** schema.org Menu JSON-LD: one MenuSection per food category. */
function buildMenuJsonLd(categories: MenuCategory[]) {
  const sections = categories
    .filter((category) => category.name !== INFO_CATEGORY)
    .map((category) => ({
      '@type': 'MenuSection',
      name: category.name,
      ...(category.note ? { description: category.note } : {}),
      hasMenuItem: category.items.flatMap((item) => {
        // Prose-only "Build Your Own Instructions" entries are not orderable
        // items; the priced Grilled Cheese "Build Your Own" (9.49) is.
        if (isBuildYourOwnItem(item)) {
          if (!item.price || !isNumericPrice(item.price)) return []
          return [
            {
              '@type': 'MenuItem',
              name: `${item.name} ${category.name}`,
              offers: { '@type': 'Offer', price: item.price, priceCurrency: 'USD' },
            },
          ]
        }
        if (item.variants.length > 0) {
          return item.variants.map((variant) => ({
            '@type': 'MenuItem',
            name: `${item.name} (${variant.name})`,
            ...(item.description ? { description: item.description } : {}),
            offers: { '@type': 'Offer', price: variant.price, priceCurrency: 'USD' },
          }))
        }
        const price = item.price && isNumericPrice(item.price) ? item.price : category.basePrice
        return [
          {
            '@type': 'MenuItem',
            name: item.name,
            ...(item.description ? { description: item.description } : {}),
            ...(price ? { offers: { '@type': 'Offer', price, priceCurrency: 'USD' } } : {}),
          },
        ]
      }),
    }))

  return {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: `${BUSINESS.name} Menu`,
    url: `${SITE_URL}/menu`,
    inLanguage: 'en-US',
    hasMenuSection: sections,
  }
}

export default function MenuPage() {
  const categories = getAllCategories()
  const infoCategory = categories.find((category) => category.name === INFO_CATEGORY)
  const foodCategories = categories.filter((category) => category.name !== INFO_CATEGORY)
  const navSections = foodCategories.map((category) => ({
    id: slugify(category.name),
    label: category.name,
  }))
  const jsonLd = buildMenuJsonLd(categories)

  return (
    <>
      {/* Hero */}
      <section className="px-4 pb-10 pt-32 sm:px-6 sm:pb-12 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            {BUSINESS.name}, {BUSINESS.city}
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-foreground sm:text-6xl">
            Cheesesteaks, Hoagies &amp; Wings Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Cheesesteaks, wings, burgers, wraps, hoagies, salads and more, made fresh at{' '}
            {BUSINESS.address} in {BUSINESS.city}. Order online for pickup or give us a call.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={BUSINESS.onlineOrderUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
            >
              Order Online
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>

          {/* "General" menu notes: delivery charge and minimum */}
          {infoCategory && infoCategory.items.length > 0 && (
            <ul id={slugify(INFO_CATEGORY)} className="mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
              {infoCategory.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground"
                >
                  {item.name}{' '}
                  {item.price && (
                    <span className="font-semibold text-foreground">{formatPrice(item.price)}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CategoryNav sections={navSections} />

      {foodCategories.map((category, index) => (
        <MenuSection key={category.name} category={category} index={index} />
      ))}

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl tracking-wide text-foreground sm:text-5xl">
            Hungry Yet?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Skip the line. Order ahead for pickup at {BUSINESS.address}, {BUSINESS.cityState}, or
            call {BUSINESS.phone} and we will have it hot and ready.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href={BUSINESS.onlineOrderUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
            >
              Order Online
              <ExternalLink className="h-4 w-4" />
            </a>
            {/* Plain anchor: /catering is a separate app served via rewrite. */}
            <a
              href={BUSINESS.cateringHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary bg-primary/10 px-8 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Order Catering
            </a>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </>
  )
}
