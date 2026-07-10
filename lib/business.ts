// Single source of truth for business facts (NAP, hours, links).
// Do not hardcode these anywhere else. Do not invent history: the shop is
// owner operated for over 11 years.

export type DayHours = {
  day: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
  /** 24h "HH:MM" opening time, or null when closed. */
  opens: string | null
  /** 24h "HH:MM" closing time, or null when closed. */
  closes: string | null
  /** Human readable, e.g. "11am - 9pm" or "Closed". */
  display: string
}

export const BUSINESS = {
  name: 'MasterPeace Grill',
  phone: '(484) 344-5250',
  phoneHref: 'tel:+14843445250',
  address: '523 Fayette St',
  cityState: 'Conshohocken, PA 19428',
  city: 'Conshohocken',
  state: 'PA',
  zip: '19428',
  hours: [
    { day: 'Monday', opens: null, closes: null, display: 'Closed' },
    { day: 'Tuesday', opens: '11:00', closes: '15:00', display: '11am - 3pm' },
    { day: 'Wednesday', opens: '11:00', closes: '21:00', display: '11am - 9pm' },
    { day: 'Thursday', opens: '11:00', closes: '21:00', display: '11am - 9pm' },
    { day: 'Friday', opens: '11:00', closes: '21:00', display: '11am - 9pm' },
    { day: 'Saturday', opens: '11:00', closes: '21:00', display: '11am - 9pm' },
    { day: 'Sunday', opens: '11:00', closes: '16:00', display: '11am - 4pm' },
  ] satisfies DayHours[],
  /** SkyTab online ordering. Open in a new tab. */
  onlineOrderUrl: 'https://online.skytab.com/f117df8f79079535eaa7a295c5011345',
  facebook: 'https://www.facebook.com/pages/Masterpeace-Grill/844637945566646',
  yelp: 'https://www.yelp.com/biz/masterpeace-grill-conshohocken-2',
  /** Served by a separate app via rewrite. Always link with a plain <a>. */
  cateringHref: '/catering',
  /** Nearby towns we serve; use for the "proudly serving" section and copy. */
  serviceAreas: [
    'Conshohocken',
    'King of Prussia',
    'Norristown',
    'Plymouth Meeting',
    'Lafayette Hill',
  ],
} as const

export const SITE_URL = 'https://www.masterpeacegrill.com'
