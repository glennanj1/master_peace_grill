import React from "react"
import type { Metadata, Viewport } from "next"
import { Bebas_Neue, Inter } from "next/font/google"

import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CateringPopup } from "@/components/catering-popup"
import { SITE_URL } from "@/lib/business"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "MasterPeace Grill | Cheesesteaks, Burgers & Hoagies in Conshohocken, PA",
    template: "%s | MasterPeace Grill",
  },
  description:
    "MasterPeace Grill in Conshohocken, PA. Authentic Philly cheesesteaks, burgers, wraps, hoagies and catering. Owner operated for over 11 years. Order online or call (484) 344-5250.",
  applicationName: "MasterPeace Grill",
  authors: [{ name: "MasterPeace Grill" }],
  creator: "MasterPeace Grill",
  publisher: "MasterPeace Grill",
  category: "Restaurant",
  openGraph: {
    siteName: "MasterPeace Grill",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    images: [
      {
        url: "/mpg_meta.jpg",
        width: 952,
        height: 679,
        alt: "MasterPeace Grill cheesesteaks in Conshohocken, PA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/mpg_meta.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#15151f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <CateringPopup />
      </body>
    </html>
  )
}
