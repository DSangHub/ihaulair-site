import type { Metadata } from "next"
import { ArrowUpRight, Cpu, Handshake, Layers } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, FeatureGrid, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "EV Manufacturers",
  description:
    "I Haul Air™ partners with the world's leading electric vehicle manufacturers to put the right zero-emission trucks on every route.",
}

const partners = [
  { name: "VoltHaul", focus: "Heavy-duty electric semis", range: "500 mi range" },
  { name: "Ampere Freight", focus: "Electric box trucks", range: "260 mi range" },
  { name: "Northwind EV", focus: "Electric pickups", range: "340 mi range" },
  { name: "Pulse Motors", focus: "Last-mile electric vans", range: "180 mi range" },
  { name: "Helios Fleet", focus: "Regional day cabs", range: "420 mi range" },
  { name: "Zeroline", focus: "Refrigerated electric trailers", range: "300 mi range" },
]

const why = [
  {
    icon: Handshake,
    title: "Preferred partner pricing",
    text: "Volume agreements that make electric competitive on day one.",
  },
  {
    icon: Layers,
    title: "Right truck, right route",
    text: "We match manufacturer strengths to real-world duty cycles.",
  },
  {
    icon: Cpu,
    title: "Integrated telematics",
    text: "Every vehicle reports into one unified impact and uptime platform.",
  },
]

export default function ManufacturersPage() {
  return (
    <>
      <PageHero
        eyebrow="EV Manufacturers"
        title="The best electric trucks, matched to every mile."
        description="We work hand in hand with leading EV manufacturers so fleets get the right zero-emission vehicle for the job — backed by service, financing, and data."
      />

      <Section>
        <SectionHeading
          eyebrow="Our partners"
          title="A curated lineup of electric vehicle makers."
          description="From heavy-duty semis to last-mile vans, our manufacturer network covers the full spectrum of freight."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-7 transition-colors hover:border-primary">
                <div className="flex items-start justify-between">
                  <span className="text-lg font-semibold tracking-tight">
                    {p.name}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">{p.focus}</p>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {p.range}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Why partner through us"
          title="More than a dealer — a clean-freight platform."
        />
        <FeatureGrid features={why} />
      </Section>

      <CtaBand
        title="Manufacture the future of freight with us."
        description="Are you an EV manufacturer ready to reach serious fleet buyers? Let's talk about joining the network."
        primary={{ label: "Partner with us", href: "/contact" }}
        secondary={{ label: "See the Fleet Program", href: "/fleet" }}
      />
    </>
  )
}
