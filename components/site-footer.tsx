import Link from "next/link"
import Image from "next/image"
import { Clock, Facebook, MapPin, Phone, Star } from "lucide-react"
import { BUSINESS } from "@/lib/business"

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/mpgLogo.png"
                alt="MasterPeace Grill logo"
                width={200}
                height={60}
                className="h-16 sm:h-20 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Owner operated for over 11 years. Authentic Philly cheesesteaks, burgers, wraps,
              hoagies and catering in Conshohocken, PA.
            </p>
            <div className="flex gap-4">
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Facebook className="w-5 h-5" />
                <span className="sr-only">MasterPeace Grill on Facebook</span>
              </a>
              <a
                href={BUSINESS.yelp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
              >
                <Star className="w-5 h-5" />
                <span className="sr-only">MasterPeace Grill on Yelp</span>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Explore</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                {/* Plain anchor: /catering is a separate app served via rewrite. */}
                <a href={BUSINESS.cateringHref} className="hover:text-primary transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href={BUSINESS.onlineOrderUrl}
                  target="_blank"
                  rel="noopener"
                  className="text-primary hover:underline"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <a href={BUSINESS.phoneHref} className="text-foreground font-medium hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </a>
                  <p className="text-sm text-muted-foreground">Call ahead for pickup</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-medium">{BUSINESS.address}</p>
                  <p className="text-sm text-muted-foreground">{BUSINESS.cityState}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Hours</h3>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <ul className="text-muted-foreground space-y-1">
                {BUSINESS.hours.map((entry) => (
                  <li key={entry.day} className="flex justify-between gap-4">
                    <span>{entry.day.slice(0, 3)}</span>
                    <span>{entry.display}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MasterPeace Grill. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Owner Operated · Conshohocken, PA ·{" "}
              <a
                href="https://techbridge.dev"
                target="_blank"
                rel="noopener"
                className="hover:text-primary transition-colors"
              >
                Site by TechBridge
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
