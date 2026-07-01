import type { Metadata } from "next"
import { Users, Route, Wind, Building2 } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, FeatureGrid, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "The Movement",
  description:
    "Join a growing community of drivers, fleets, sponsors, and cities committed to zero-emission freight with I Haul Air™.",
}

const ways = [
  {
    icon: Users,
    title: "Drivers & owner-operators",
    text: "Get behind the wheel of electric trucks and haul the cleanest miles in the industry.",
  },
  {
    icon: Building2,
    title: "Fleets & carriers",
    text: "Electrify routes with turnkey support, charging, and transparent impact reporting.",
  },
  {
    icon: Wind,
    title: "Clean-air advocates",
    text: "Lend your voice, share the mission, and help make zero-emission freight the norm.",
  },
  {
    icon: Route,
    title: "Cities & communities",
    text: "Partner on clean-freight corridors that reduce noise and pollution where people live.",
  },
]

const steps = [
  {
    step: "01",
    title: "Pledge",
    text: "Commit to cleaner miles. Tell us how you want to move the mission.",
  },
  {
    step: "02",
    title: "Plug in",
    text: "We match you with fleets, routes, or sponsorships that fit your goals.",
  },
  {
    step: "03",
    title: "Power forward",
    text: "Track your impact in real time and scale it across your operation.",
  },
]

export default function MovementPage() {
  return (
    <>
      <PageHero
        eyebrow="The Movement"
        title="A movement measured in clean miles, not slogans."
        description="I Haul Air™ is more than a fleet — it's a coalition of everyone who believes freight should stop poisoning the air. Here's how you plug in."
      />

      <Section>
        <SectionHeading
          eyebrow="Find your lane"
          title="There's a way for everyone to move this forward."
        />
        <FeatureGrid features={ways} />
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="How it works"
          title="From pledge to clean miles in three steps."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="rounded-2xl border border-border bg-background p-8">
                <div className="font-mono text-sm font-semibold text-primary">
                  {s.step}
                </div>
                <h3 className="mt-4 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Newsletter />

      <CtaBand
        title="Ready to haul air with us?"
        description="Add your name to the movement electrifying freight across the country."
        primary={{ label: "Become a Sponsor", href: "/sponsorship" }}
        secondary={{ label: "Explore the Fleet Program", href: "/fleet" }}
      />
    </>
  )
}
