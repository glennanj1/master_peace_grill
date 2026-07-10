// Server component: one orderable menu item with dotted price leaders.
//
// Handles every item shape in lib/menu.json:
// - plain price string rows (Wings, Drinks, General, most Appetizers)
// - price + description objects (Salads, Wraps, CheeseSteaks, ...)
// - variant items with no top-level price (Chicken Tenders 3pc/5pc,
//   Catering salads Small/Large)
// - per-item addons whose names embed the variant (Catering salads:
//   "Add Grilled Chicken (Small)"), listed under the item like the CRA did
// - items with a null price fall back to the category base price

import { formatPrice, type MenuItem } from '@/lib/menu'

function PriceLine({
  name,
  price,
  emphasize = true,
}: {
  name: string
  price: string | null
  emphasize?: boolean
}) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className={
          emphasize ? 'text-lg font-semibold text-foreground' : 'font-medium text-foreground/90'
        }
      >
        {name}
      </span>
      {price && (
        <>
          <span aria-hidden="true" className="flex-1 border-b border-dotted border-muted-foreground/40" />
          <span
            className={
              emphasize
                ? 'whitespace-nowrap text-lg font-semibold text-primary'
                : 'whitespace-nowrap font-semibold text-primary'
            }
          >
            {formatPrice(price)}
          </span>
        </>
      )}
    </div>
  )
}

export function MenuItemRow({
  item,
  categoryBasePrice,
}: {
  item: MenuItem
  categoryBasePrice: string | null
}) {
  const hasVariants = item.variants.length > 0
  const resolvedPrice = item.price ?? (hasVariants ? null : categoryBasePrice)

  return (
    <li className="py-4">
      <PriceLine name={item.name} price={resolvedPrice} />

      {item.description && (
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
      )}

      {hasVariants && (
        <div className="mt-2 space-y-1.5 pl-4">
          {item.variants.map((variant) => (
            <PriceLine key={variant.name} name={variant.name} price={variant.price} emphasize={false} />
          ))}
        </div>
      )}

      {item.addons.length > 0 && (
        <ul className="mt-2 space-y-1 pl-4">
          {item.addons.map((addon) => (
            <li key={addon.name} className="text-sm text-muted-foreground">
              {addon.name}{' '}
              <span className="font-semibold text-primary">+{formatPrice(addon.price)}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  )
}
