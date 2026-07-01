import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] })
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ihaulair.com"),
  title: {
    default: "I Haul Air™ — The Cleanest Load You'll Ever Carry",
    template: "%s — I Haul Air™",
  },
  description:
    "I Haul Air™ is the movement electrifying freight. Zero-emission fleets, EV manufacturer partnerships, and sponsorships driving the cleanest miles in transportation.",
  keywords: [
    "electric trucking",
    "EV fleet",
    "clean freight",
    "zero emission hauling",
    "sustainable logistics",
    "I Haul Air",
  ],
  generator: "v0.app",
  openGraph: {
    title: "I Haul Air™ — The Cleanest Load You'll Ever Carry",
    description:
      "Electrifying freight for a cleaner planet. Join the movement.",
    url: "https://ihaulair.com",
    siteName: "I Haul Air™",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Haul Air™",
    description: "The Cleanest Load You'll Ever Carry.",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0a0e1a",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
