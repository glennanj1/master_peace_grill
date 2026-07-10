// Server component: one full menu category section.
// Renders (in order): heading + base price, tagline, prose note (Wings sauce
// list, Salads dressings, Catering per-person line), the Catering CTA,
// build-your-own instructions, category add-ons, then the item list.

import Image from 'next/image'
import { formatPrice, type MenuCategory } from '@/lib/menu'
import { BUSINESS } from '@/lib/business'
import { cn } from '@/lib/utils'
import {
  SECTION_META,
  instructionsFor,
  isBuildYourOwnItem,
  orderableItems,
  parseInstructions,
  slugify,
} from './menu-config'
import { MenuItemRow } from './menu-item-row'
import { Reveal } from './reveal'

function BuildYourOwn({ category }: { category: MenuCategory }) {
  const byoItems = category.items.filter(isBuildYourOwnItem)
  if (byoItems.length === 0) return null

  return (
    <div className="mt-6 rounded-2xl border border-border bg-card p-6 sm:p-7">
      {byoItems.map((item) => {
        const instructions = instructionsFor(item)
        if (!instructions) return null
        // Grilled Cheese "Build Your Own" carries its own price (9.49);
        // the string-based "Build Your Own Instructions" entries do not.
        const price = item.name === 'Build Your Own' ? item.price : null
        return (
          <div key={item.name}>
            <div className="flex items-baseline gap-3">
              <h3 className="font-display text-2xl tracking-wide text-foreground sm:text-3xl">
                Build Your Own
              </h3>
              {price && (
                <span className="font-display text-2xl text-primary sm:text-3xl">
                  {formatPrice(price)}
                </span>
              )}
            </div>
            <ul className="mt-3 space-y-2">
              {parseInstructions(instructions).map((step, index) => (
                <li key={index} className="text-sm leading-relaxed sm:text-base">
                  {step.label ? (
                    <>
                      <span className="font-semibold text-foreground">{step.label}: </span>
                      <span className="text-muted-foreground">{step.text}</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground">{step.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

function CategoryAddons({ category }: { category: MenuCategory }) {
  if (category.addons.length === 0) return null
  return (
    <div className="mt-5">
      <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Add-Ons
      </h3>
      <ul className="mt-2 flex flex-wrap gap-2">
        {category.addons.map((addon) => (
          <li
            key={addon.name}
            className="rounded-full bg-muted px-3 py-1.5 text-sm text-muted-foreground"
          >
            {addon.name}{' '}
            <span className="font-semibold text-primary">+{formatPrice(addon.price)}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function MenuSection({ category, index }: { category: MenuCategory; index: number }) {
  const meta = SECTION_META[category.name] ?? { image: null, alt: '' }
  const id = slugify(category.name)
  const items = orderableItems(category)
  const hasBuildYourOwn = category.items.some(isBuildYourOwnItem)
  const isCatering = category.name === 'Catering'
  const band = index % 2 === 1

  const list = (
    <div className={meta.image ? 'lg:col-span-3' : 'mx-auto w-full max-w-3xl'}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h2
          id={`${id}-heading`}
          className="font-display text-4xl tracking-wide text-foreground sm:text-5xl"
        >
          {category.name}
        </h2>
        {category.basePrice && (
          <span className="font-display text-3xl text-primary sm:text-4xl">
            {formatPrice(category.basePrice)}
          </span>
        )}
      </div>

      {meta.tagline && <p className="mt-2 text-muted-foreground">{meta.tagline}</p>}

      {category.note && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {category.note}
        </p>
      )}

      {isCatering && (
        <div className="mt-6">
          {/* Plain anchor: /catering is a separate app served via rewrite. */}
          <a
            href={BUSINESS.cateringHref}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
          >
            Order Catering Online
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Build your tray, pick a date and send your order in minutes.
          </p>
        </div>
      )}

      <BuildYourOwn category={category} />
      <CategoryAddons category={category} />

      {items.length > 0 && (
        <>
          {hasBuildYourOwn && (
            <h3 className="mt-8 font-display text-2xl tracking-wide text-foreground sm:text-3xl">
              Best Sellers
            </h3>
          )}
          <ul className={cn('divide-y divide-border/60', hasBuildYourOwn ? 'mt-1' : 'mt-4')}>
            {items.map((item) => (
              <MenuItemRow key={item.name} item={item} categoryBasePrice={category.basePrice} />
            ))}
          </ul>
        </>
      )}
    </div>
  )

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn('scroll-mt-32 px-4 py-12 sm:scroll-mt-36 sm:px-6 sm:py-16 lg:px-8', band && 'bg-card/30')}
    >
      <div className="max-w-7xl mx-auto">
        {meta.image ? (
          <div className="grid items-start gap-8 lg:grid-cols-5 lg:gap-12">
            {list}
            <Reveal className={cn('lg:col-span-2 lg:sticky lg:top-40', index % 2 === 1 && 'lg:order-first')}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border lg:aspect-[3/4] lg:max-h-[560px]">
                <Image
                  src={meta.image}
                  alt={meta.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        ) : (
          list
        )}
      </div>
    </section>
  )
}
