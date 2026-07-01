import type { Metadata } from "next"
import {
  BarChart3,
  Globe2,
  Megaphone,
  Sparkles,
  BatteryCharging,
  Handshake,
  Route,
  Eye,
  Radio,
  Newspaper,
  TrendingUp,
  Check,
} from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, FeatureGrid } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { AnimatedCounter } from "@/components/animated-counter"
import { SponsorEngagement } from "@/components/sponsor-engagement"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "Sponsorship",
  description:
    "Become a founding sponsor of I Haul Air™. Sponsorship tiers, EV manufacturer benefits, national fleet visibility, campaign reach, and media value — download the deck or schedule a sponsor meeting.",
}

const benefits = [
  {
    icon: Megaphone,
    title: "Brand on clean miles",
    text: "Your logo travels the cleanest routes in freight, seen across 48 states on the national tour.",
  },
  {
    icon: BarChart3,
    title: "Transparent impact",
    text: "Monthly reports quantify the emissions your sponsorship helped avoid — real numbers, not offsets.",
  },
  {
    icon: Globe2,
    title: "Authentic ESG story",
    text: "Real electric miles you can point to in your sustainability reporting and investor decks.",
  },
  {
    icon: Sparkles,
    title: "Co-marketing moments",
    text: "Launches, milestones, and content built to spotlight your commitment to cleaner air.",
  },
]

const manufacturerBenefits = [
  {
    icon: BatteryCharging,
    title: "Live product showcase",
    text: "Put your EV trucks in front of fleets on a rolling, coast-to-coast demonstration tour.",
  },
  {
    icon: Handshake,
    title: "Qualified fleet leads",
    text: "Connect directly with fleet operators actively planning their electrification roadmap.",
  },
  {
    icon: TrendingUp,
    title: "Proof at scale",
    text: "Real duty-cycle data and uptime stories that shorten the sales conversation.",
  },
]

const tiers = [
  {
    name: "Supporter",
    price: "$5K",
    period: "/ month",
    points: [
      "Logo on one truck wrap",
      "Quarterly impact report",
      "Social recognition",
    ],
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

const visibility = [
  {
    icon: Route,
    title: "National tour routes",
    text: "Wraps travel major interstates and metro corridors on planned 48-state routing.",
  },
  {
    icon: Eye,
    title: "High-dwell placements",
    text: "Trucks are seen at depots, truck stops, charging hubs, and live activation events.",
  },
  {
    icon: Radio,
    title: "Always-on content",
    text: "Every mile is documented for social, giving your brand a steady content stream.",
  },
]

const reach = [
  { value: 250, suffix: "M+", label: "Projected annual impressions" },
  { value: 48, suffix: "", label: "States on the tour route" },
  { value: 1.2, suffix: "M", decimals: 1, label: "Clean miles per year" },
  { value: 12, suffix: "M", prefix: "$", label: "Estimated media value" },
]

const mediaValue = [
  "Earned press across trade and mainstream outlets",
  "Branded social content from every campaign mile",
  "Co-branded launch events and ride-along activations",
  "Verified clean-air impact you can report to stakeholders",
]

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Become a founding sponsor of cleaner air."
        description="Sponsoring I Haul Air™ funds real electric miles and puts your brand at the center of a national zero-emission campaign. Download the deck, request the media kit, or schedule a sponsor meeting."
      />

      {/* Deck actions + inquiry forms */}
      <Section>
        <SectionHeading
          eyebrow="Get started"
          title="Everything you need to say yes."
          description="Grab the sponsorship deck, request the media kit, or start an inquiry below. A partner specialist follows up within one business day."
        />
        <div className="mt-14">
          <SponsorEngagement />
        </div>
      </Section>

      {/* Why sponsor */}
      <Section muted>
        <SectionHeading
          eyebrow="Why sponsor"
          title="Marketing that actually cleans the air."
        />
        <FeatureGrid features={benefits} />
      </Section>

      {/* Sponsorship tiers */}
      <Section>
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

      {/* EV manufacturer benefits */}
      <Section muted>
        <SectionHeading
          eyebrow="EV manufacturers"
          title="A rolling showroom for your electric trucks."
          description="Manufacturers get a live, national stage to prove their vehicles and reach fleets ready to buy."
        />
        <FeatureGrid features={manufacturerBenefits} />
      </Section>

      {/* Fleet visibility */}
      <Section>
        <SectionHeading
          eyebrow="Fleet visibility"
          title="Your brand, on the move — everywhere."
          description="Wrapped fleets turn every route into a moving billboard for the clean-air movement and its partners."
        />
        <FeatureGrid features={visibility} />
      </Section>

      {/* Campaign reach */}
      <Section muted>
        <SectionHeading
          eyebrow="Campaign reach"
          title="National scale, measurable numbers."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reach.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.08}>
              <div className="rounded-2xl border border-border bg-background p-8">
                <div className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  <AnimatedCounter
                    value={r.value}
                    prefix={r.prefix}
                    suffix={r.suffix}
                    decimals={r.decimals ?? 0}
                  />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{r.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Media value */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Media value"
              title="More than a logo — a story worth covering."
              description="The campaign generates earned media, original content, and live moments that keep your brand in the conversation long after the trucks roll through."
            />
          </div>
          <Reveal delay={0.1}>
            <ul className="grid gap-4">
              {mediaValue.map((m) => (
                <li
                  key={m}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-relaxed">{m}</span>
                </li>
              ))}
              <li className="flex items-center gap-3 rounded-xl border border-primary/30 bg-primary/5 p-5">
                <Newspaper className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">
                  Full media kit available on request.
                </span>
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <Newsletter />
    </>
  )
}
