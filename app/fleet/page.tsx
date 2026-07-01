import type { Metadata } from "next"
import Image from "next/image"
import { BatteryCharging, Gauge, LineChart, ShieldCheck, Truck, Wrench } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, FeatureGrid, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Fleet Program",
  description:
    "Electrify your fleet with I Haul Air™ — vehicles, charging, financing, and impact reporting in one turnkey program.",
}

const features = [
  {
    icon: Truck,
    title: "Vehicles that pull their weight",
    text: "Class-leading electric pickups and semis matched to your routes and payloads.",
  },
  {
    icon: BatteryCharging,
    title: "Charging, handled",
    text: "Depot and on-route charging designed, installed, and managed for you.",
  },
  {
    icon: LineChart,
    title: "Live impact reporting",
    text: "Track emissions avoided, cost savings, and uptime from a single dashboard.",
  },
  {
    icon: Wrench,
    title: "Full-service maintenance",
    text: "Predictive servicing keeps every truck on the road and out of the shop.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible financing",
    text: "Lease, subscribe, or buy — structures that protect your cash flow.",
  },
  {
    icon: Gauge,
    title: "Route optimization",
    text: "Smart planning maximizes range, minimizes downtime, and lowers cost per mile.",
  },
]

const tiers = [
  {
    name: "Pilot",
    desc: "Prove the model on a handful of routes.",
    points: ["Up to 5 vehicles", "Depot charging assessment", "Monthly impact report"],
  },
  {
    name: "Scale",
    desc: "Electrify a region with full support.",
    points: ["6–50 vehicles", "Managed charging network", "Dedicated success team"],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Transform your entire operation.",
    points: ["50+ vehicles", "Custom financing", "White-glove integration"],
  },
]

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Fleet Program"
        title="Everything you need to electrify your fleet."
        description="Vehicles, charging, financing, and reporting — bundled into one program engineered to make going electric the easy choice."
      />

      <Section>
        <div className="relative aspect-[16/7] overflow-hidden rounded-2xl border border-border">
          <Image
            src="/fleet.png"
            alt="A row of electric trucks charging at a modern depot"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="What's included"
          title="A complete electrification program, not just trucks."
        />
        <FeatureGrid features={features} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Program tiers"
          title="Start where you are. Scale when you're ready."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div
                className={`flex h-full flex-col rounded-2xl border p-8 ${
                  t.featured
                    ? "border-primary bg-primary/5"
                    : "border-border bg-background"
                }`}
              >
                {t.featured && (
                  <span className="mb-4 w-fit rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's map your route to zero emissions."
        description="Tell us about your routes and we'll build a fleet electrification plan tailored to your operation."
        primary={{ label: "Request a fleet consult", href: "/contact" }}
        secondary={{ label: "See EV manufacturers", href: "/manufacturers" }}
      />
    </>
  )
}
