import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Section } from "@/components/section"
import { Reveal } from "@/components/reveal"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "The latest from I Haul Air™ — fleet launches, clean-air milestones, partnerships, and stories from the movement.",
}

const featured = {
  category: "Milestone",
  title: "We just crossed 128 million clean miles hauled",
  excerpt:
    "A look back at the routes, drivers, and partners who got us here — and what it means for the air we all breathe.",
  date: "June 24, 2026",
  image: "/movement.png",
}

const posts = [
  {
    category: "Fleet",
    title: "Introducing our regional electric semi program",
    excerpt: "500-mile range meets zero emissions on long-haul corridors.",
    date: "June 12, 2026",
  },
  {
    category: "Partnership",
    title: "VoltHaul joins the manufacturer network",
    excerpt: "More heavy-duty electric trucks, matched to more routes.",
    date: "May 30, 2026",
  },
  {
    category: "Impact",
    title: "How we measure emissions avoided",
    excerpt: "A transparent look at the methodology behind our reporting.",
    date: "May 18, 2026",
  },
  {
    category: "Community",
    title: "Drivers on why they made the switch",
    excerpt: "Quieter cabs, cleaner air, and no more diesel fumes.",
    date: "May 4, 2026",
  },
  {
    category: "Sponsorship",
    title: "Pulse Motors becomes a founding partner",
    excerpt: "Backing real electric miles with a national commitment.",
    date: "April 21, 2026",
  },
  {
    category: "Policy",
    title: "What new clean-freight incentives mean for fleets",
    excerpt: "Breaking down the programs accelerating the transition.",
    date: "April 9, 2026",
  },
]

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News & Blog"
        title="Stories from the road to zero emissions."
        description="Milestones, launches, and voices from the movement electrifying freight."
      />

      <Section>
        <Reveal>
          <Link
            href="#"
            className="group grid gap-8 overflow-hidden rounded-2xl border border-border bg-background lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {featured.category}
              </span>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Read story
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                {featured.date}
              </p>
            </div>
          </Link>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Link
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-colors hover:border-primary"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg font-medium leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.excerpt}
                </p>
                <p className="mt-5 text-sm text-muted-foreground">{p.date}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Newsletter />
    </>
  )
}
