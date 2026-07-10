// Menu page config and pure helpers. Server-safe (no client APIs).
//
// Edge cases in lib/menu.json this file exists to handle:
// - "Build Your Own Instructions" is a plain-string entry, so lib/menu.ts
//   normalizes it into a MenuItem whose *price* holds the prose instructions.
// - Grilled Cheese "Build Your Own" is a real priced item (9.49) whose
//   *description* holds the pipe-separated instructions.
// - Instruction strings use " | " to separate steps and "Label (choices)"
//   within a step (the CRA parsed these the same way).

import type { MenuCategory, MenuItem } from '@/lib/menu'

/** "Hoagies & Grinders" -> "hoagies-and-grinders" for anchor ids. */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/** True for "14.99" style strings (mirrors lib/menu.ts, which does not export it). */
export function isNumericPrice(value: string): boolean {
  return /^\d+(\.\d{1,2})?$/.test(value.trim())
}

export type InstructionStep = {
  /** Bold lead-in like "Pick 1 Cheese", or null for plain lines. */
  label: string | null
  text: string
}

/**
 * Split pipe-separated build-your-own prose into steps, bolding
 * "Label (choices)" and "Label: choices" patterns like the CRA did.
 */
export function parseInstructions(instructions: string): InstructionStep[] {
  return instructions.split(' | ').map((line) => {
    const parens = line.match(/^(.+?)\s*\((.+)\)$/)
    if (parens) return { label: parens[1], text: parens[2] }
    const colon = line.match(/^([^:(]+):\s*(.+)$/)
    if (colon) return { label: colon[1], text: colon[2] }
    return { label: null, text: line }
  })
}

/** Items that are really build-your-own instructions, not orderable rows. */
export function isBuildYourOwnItem(item: MenuItem): boolean {
  if (item.name === 'Build Your Own Instructions') return true
  return item.name === 'Build Your Own' && Boolean(item.description?.includes(' | '))
}

/** The prose instructions for a build-your-own item (see edge cases above). */
export function instructionsFor(item: MenuItem): string | null {
  if (item.name === 'Build Your Own Instructions') return item.price
  return item.description
}

/** Orderable items (everything except build-your-own instruction entries). */
export function orderableItems(category: MenuCategory): MenuItem[] {
  return category.items.filter((item) => !isBuildYourOwnItem(item))
}

export type SectionMeta = {
  /** Path under public/, or null for compact sections without a photo. */
  image: string | null
  alt: string
  /** Extra header line ported from the CRA's hardcoded copy. */
  tagline?: string
}

export const SECTION_META: Record<string, SectionMeta> = {
  Appetizers: { image: '/images/menu/app.jpg', alt: 'Fried appetizers at MasterPeace Grill' },
  Wings: { image: '/images/menu/wings.jpg', alt: 'Sauced chicken wings' },
  Salads: { image: '/images/menu/salad.jpg', alt: 'Fresh garden salad' },
  Wraps: {
    image: '/images/menu/wrap.jpg',
    alt: 'Grilled wrap cut in half',
    tagline: 'Your choice of White, Wheat, Spinach or Tomato Wrap',
  },
  'Triple Decker Clubs': { image: '/images/menu/club1.jpg', alt: 'Triple decker club sandwich' },
  CheeseSteaks: { image: '/images/menu/steak.jpg', alt: 'Philly cheesesteak on a Liscio roll' },
  Burgers: { image: '/images/menu/burger.jpg', alt: 'Loaded burger on a brioche bun' },
  'Hoagies & Grinders': { image: '/images/menu/hoagie.jpg', alt: 'Italian hoagie with fresh toppings' },
  Sandwiches: { image: '/images/menu/sandwhich.jpg', alt: 'Stacked deli sandwich' },
  'Grilled Cheese': {
    image: '/images/food/grilled_cheese.jpg',
    alt: 'Golden grilled cheese sandwich',
    tagline: 'Your choice of White, Wheat or Rye',
  },
  Catering: { image: '/images/menu/catering.jpg', alt: 'Catering tray of sandwiches' },
  Drinks: { image: null, alt: '' },
}
