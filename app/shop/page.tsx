import type { Metadata } from "next"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Merchandise",
  description:
    "Wear the movement. Shop I Haul Air™ apparel and gear — every purchase funds cleaner freight miles.",
}

const products = [
  { name: "Clean Miles Tee", price: "$34", image: "/merch-tee.png" },
  { name: "Movement Cap", price: "$28", image: "/merch-cap.png" },
  { name: "Zero-Emission Bottle", price: "$32", image: "/merch-bottle.png" },
  { name: "Haul Air Hoodie", price: "$68", image: "/merch-hoodie.png" },
]

export default function ShopPage() {
  return (
    <>
      <PageHero
        eyebrow="Merchandise"
        title="Wear the movement."
        description="Premium gear for people who believe freight should breathe clean. Every purchase helps fund more electric miles."
      />

      <Section>
        <SectionHeading
          eyebrow="Shop the collection"
          title="Built to last. Made to mean something."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
                <div className="relative aspect-square overflow-hidden bg-card">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.price}</p>
                  <Button
                    className="mt-4 w-full rounded-full"
                    variant="secondary"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Add to cart
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 rounded-xl border border-border bg-card p-5 text-center text-sm text-muted-foreground">
            Shopify-ready storefront. Connect your Shopify catalog to enable
            live checkout, inventory, and payments.
          </p>
        </Reveal>
      </Section>

      <CtaBand
        title="Every order fuels the transition."
        description="Proceeds from the shop go directly toward electrifying more freight miles. Gear up and give back."
        primary={{ label: "Join the Movement", href: "/movement" }}
        secondary={{ label: "Become a Sponsor", href: "/sponsorship" }}
      />
    </>
  )
}
