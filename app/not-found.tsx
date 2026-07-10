import type { Metadata } from "next"
import Link from "next/link"
import { BUSINESS } from "@/lib/business"

export const metadata: Metadata = {
  title: "Page Not Found",
}

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6 lg:px-8">
      <p className="font-display text-7xl text-primary sm:text-8xl">404</p>
      <h1 className="mt-4 font-display text-4xl text-foreground sm:text-5xl">
        This Page Got Eaten
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        We could not find that page. The cheesesteaks are still right where you left them.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Back to Home
        </Link>
        <Link
          href="/menu"
          className="inline-flex items-center justify-center rounded-full border-2 border-primary bg-primary/10 px-6 py-3 font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          See the Menu
        </Link>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        Or call us at{" "}
        <a href={BUSINESS.phoneHref} className="text-primary hover:underline">
          {BUSINESS.phone}
        </a>
      </p>
    </section>
  )
}
