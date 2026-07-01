import type { Metadata } from "next"
import { BarChart3, Globe2, Megaphone, Sparkles } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, FeatureGrid, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Put your brand behind cleaner air. Explore I Haul Air™ sponsorship tiers and fund real electric freight miles.",
}

const benefits = [
  {
    icon: Megaphone,
    title: "Brand on clean miles",
    text: "Your logo travels the cleanest routes in freight, seen across the country.",
  },
  {
    icon: BarChart3,
    title: "Transparent impact",
    text: "Monthly reports quantify the emissions your sponsorship helped avoid.",
  },
  {
    icon: Globe2,
    title: "Authentic ESG story",
    text: "Real electric miles you can point to — not offsets or greenwashing.",
  },
  {
    icon: Sparkles,
    title: "Co-marketing moments",
    text: "Launches, milestones, and content built to spotlight your commitment.",
  },
]

const tiers = [
  {
    name: "Supporter",
    price: "$5K",
    period: "/ month",
    points: ["Logo on one truck wrap", "Quarterly impact report", "Social recognition"],
  },
  {
    name: "Champion",
    price: "$20K",
    period: "/ month",
    points: [
      "Logo on regional fleet",
      "Monthly impact report",
      "Co-branded content",
      "Event presence",
    ],
    featured: true,
  },
  {
    name: "Founding Partner",
    price: "Custom",
    period: "",
    points: [
      "National fleet presence",
      "Dedicated impact dashboard",
      "Joint press & campaigns",
      "Advisory seat",
    ],
  },
]

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Put your brand behind cleaner air."
        description="Sponsoring I Haul Air™ funds real electric miles and puts your brand on the right side of the freight transition. Choose the level that fits your goals."
      />

      <Section>
        <SectionHeading
          eyebrow="Why sponsor"
          title="Marketing that actually cleans the air."
        />
        <FeatureGrid features={benefits} />
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="Sponsorship tiers"
          title="Every level moves the mission forward."
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
                    Most impact
                  </span>
                )}
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight">
                    {t.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {t.period}
                  </span>
                </div>
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
        title="Let's build a cleaner brand story together."
        description="Tell us about your goals and we'll craft a sponsorship that delivers real, measurable clean-air impact."
        primary={{ label: "Become a Sponsor", href: "/contact" }}
        secondary={{ label: "See our impact", href: "/movement" }}
      />
    </>
  )
}
