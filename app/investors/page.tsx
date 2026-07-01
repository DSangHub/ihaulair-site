import type { Metadata } from "next"
import { Download, TrendingUp, PieChart, Target } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section, SectionHeading, CtaBand } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { AnimatedCounter } from "@/components/animated-counter"

export const metadata: Metadata = {
  title: "Investor Relations",
  description:
    "I Haul Air™ investor relations — growth metrics, market opportunity, and resources for current and prospective investors.",
}

const metrics = [
  { value: 312, suffix: "%", label: "YoY revenue growth" },
  { value: 128, suffix: "M", label: "Clean miles hauled" },
  { value: 1.4, suffix: "B", decimals: 1, label: "Serviceable market ($)" },
  { value: 42, suffix: "", label: "Fleet partners" },
]

const highlights = [
  {
    icon: TrendingUp,
    title: "Category-defining growth",
    text: "Triple-digit revenue growth as diesel fleets accelerate their transition to electric.",
  },
  {
    icon: Target,
    title: "Massive addressable market",
    text: "Freight is a multi-trillion-dollar industry at the start of a decades-long electrification shift.",
  },
  {
    icon: PieChart,
    title: "Recurring, diversified revenue",
    text: "Fleet subscriptions, sponsorships, and merchandise create durable, compounding income.",
  },
]

const reports = [
  { title: "Q4 Shareholder Letter", meta: "PDF · 1.2 MB" },
  { title: "Annual Impact Report", meta: "PDF · 3.4 MB" },
  { title: "Investor Deck", meta: "PDF · 8.1 MB" },
  { title: "ESG Framework", meta: "PDF · 2.0 MB" },
]

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title="Investing in the cleanest miles in freight."
        description="I Haul Air™ sits at the intersection of a massive market and an unstoppable transition. Explore our growth, our thesis, and our reporting."
      />

      <Section>
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Reveal key={m.label}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <div className="text-4xl font-semibold tracking-tight text-primary">
                  <AnimatedCounter
                    value={m.value}
                    suffix={m.suffix}
                    decimals={m.decimals ?? 0}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{m.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow="The thesis"
          title="Why I Haul Air™ is built to lead."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-border bg-background p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <h.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-medium">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Resources"
          title="Reports & filings."
          description="Download the latest materials for current and prospective investors."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {reports.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <a
                href="#"
                className="group flex items-center justify-between rounded-xl border border-border bg-background p-6 transition-colors hover:border-primary"
              >
                <div>
                  <div className="font-medium">{r.title}</div>
                  <div className="text-sm text-muted-foreground">{r.meta}</div>
                </div>
                <Download className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Talk to our investor relations team."
        description="For inquiries, materials, or a conversation with leadership, reach out and we'll be in touch."
        primary={{ label: "Contact IR", href: "/contact" }}
      />
    </>
  )
}
