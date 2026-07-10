// Typed access to lib/menu.json, the verbatim copy of the CRA menu
// (src/data/menu.json). NEVER edit prices or names in the JSON; fix upstream.
//
// Raw shape notes:
// - Top level: { [categoryName]: { ...entries } }
// - Special category entries:
//   - "Base Price": either a numeric price string ("14.99") that applies to the
//     whole category, or a free-text note ("Dressings: ...").
//   - "addons": a { name: price } map of add-ons for the whole category.
// - Every other entry is an item: either a price string, or an object with
//   optional price, description, variants ({ name: price }) and addons.

import rawMenu from './menu.json'

export type PricedOption = { name: string; price: string }

export type MenuItem = {
  name: string
  /** Price string like "14.99". Null when the item only has variants or uses the category base price. */
  price: string | null
  description: string | null
  variants: PricedOption[]
  addons: PricedOption[]
}

export type MenuCategory = {
  name: string
  /** Category-wide base price, when "Base Price" is numeric (e.g. CheeseSteaks "14.99"). */
  basePrice: string | null
  /** Category-wide free-text note, when "Base Price" is prose (e.g. Wings sauce list). */
  note: string | null
  /** Category-wide add-ons (Extra Cheese, Bacon, Make Combo, ...). */
  addons: PricedOption[]
  items: MenuItem[]
}

type RawItemObject = {
  price?: string
  description?: string
  variants?: Record<string, string>
  addons?: Record<string, string>
}

type RawCategory = Record<string, string | RawItemObject>

const MENU = rawMenu as Record<string, RawCategory>

const RESERVED_KEYS = new Set(['Base Price', 'addons'])

function looksLikePrice(value: string): boolean {
  return /^\d+(\.\d{1,2})?$/.test(value.trim())
}

function toOptions(map: Record<string, string> | undefined): PricedOption[] {
  if (!map) return []
  return Object.entries(map).map(([name, price]) => ({ name, price }))
}

function toItem(name: string, raw: string | RawItemObject): MenuItem {
  if (typeof raw === 'string') {
    return { name, price: raw, description: null, variants: [], addons: [] }
  }
  return {
    name,
    price: raw.price ?? null,
    description: raw.description ?? null,
    variants: toOptions(raw.variants),
    addons: toOptions(raw.addons),
  }
}

/** All category names in menu order, e.g. "Appetizers", "CheeseSteaks", ... */
export function getCategoryNames(): string[] {
  return Object.keys(MENU)
}

/** One category with normalized items, or null if the name is unknown. */
export function getCategory(name: string): MenuCategory | null {
  const raw = MENU[name]
  if (!raw) return null

  const basePriceEntry = raw['Base Price']
  const basePriceText = typeof basePriceEntry === 'string' ? basePriceEntry : null
  const addonsEntry = raw['addons']

  const items = Object.entries(raw)
    .filter(([key]) => !RESERVED_KEYS.has(key))
    .map(([key, value]) => toItem(key, value))

  return {
    name,
    basePrice: basePriceText && looksLikePrice(basePriceText) ? basePriceText : null,
    note: basePriceText && !looksLikePrice(basePriceText) ? basePriceText : null,
    addons: typeof addonsEntry === 'object' && addonsEntry !== null ? toOptions(addonsEntry as Record<string, string>) : [],
    items,
  }
}

/** Every category, normalized, in menu order. */
export function getAllCategories(): MenuCategory[] {
  return getCategoryNames()
    .map((name) => getCategory(name))
    .filter((category): category is MenuCategory => category !== null)
}

/** "14.99" -> "$14.99". Passes non-price strings through unchanged. */
export function formatPrice(price: string): string {
  return looksLikePrice(price) ? `$${price.trim()}` : price
}
