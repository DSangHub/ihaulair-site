import type { Metadata } from "next"
import Image from "next/image"
import { Compass, HeartHandshake, Recycle, Rocket } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import {
  Section,
  SectionHeading,
  FeatureGrid,
  CtaBand,
} from "@/components/section"
import { Reveal } from "@/components/reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export const metadata: Metadata = {
  title: "About",
  description:
    "The story behind I Haul Air™ — why we exist, what we believe, and the team electrifying freight for a cleaner planet.",
}

const values = [
  {
    icon: Compass,
    title: "Purpose over profit",
    text: "Every decision is measured against one question: does it clean the air?",
  },
  {
    icon: Recycle,
    title: "Zero compromise",
    text: "Clean freight should be faster, quieter, and better — never a downgrade.",
  },
  {
    icon: HeartHandshake,
    title: "Built with partners",
    text: "Fleets, manufacturers, and sponsors move this mission forward together.",
  },
  {
    icon: Rocket,
    title: "Relentlessly forward",
    text: "We ship, learn, and scale the transition as fast as the grid allows.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We started I Haul Air™ to make freight breathe easier."
        description="Freight moves the world — and for a century it has moved on diesel. We're rewriting that story with pure electric power and a community that refuses to settle for dirty air."
      />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/movement.png"
                alt="Aerial view of an electric truck on a clean highway through green forest"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              Our story
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                It began with a simple observation: the trucks hauling our
                goods were also hauling tons of emissions into the air we
                breathe. We knew the technology to change that already existed —
                it just needed a movement behind it.
              </p>
              <p>
                So we built one. I Haul Air™ brings together electric fleets,
                forward-thinking manufacturers, and sponsors who want their
                brand on the right side of history. Together we&apos;re proving
                that the cleanest load is also the smartest business.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="What we believe"
          title="Values that keep our wheels pointed forward."
        />
        <FeatureGrid features={values} />
      </Section>

      <Section>
        <div className="grid gap-8 text-center sm:grid-cols-3">
          {[
            { value: 2019, label: "Year founded", decimals: 0, suffix: "" },
            { value: 340, label: "Team members", suffix: "+" },
            { value: 27, label: "States served", suffix: "" },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="This mission needs more hands on the wheel."
        description="Whether you drive, build, invest, or sponsor — there's a place for you in the movement."
        primary={{ label: "Join the Movement", href: "/movement" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  )
}
