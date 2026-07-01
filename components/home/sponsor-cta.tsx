"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Megaphone, TrendingUp } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Leaf,
    title: "Wear the clean badge",
    text: "Put your brand on the cleanest miles in freight and show customers you mean it.",
  },
  {
    icon: Megaphone,
    title: "Reach a movement",
    text: "Tap into a fast-growing community of drivers, fleets, and clean-energy advocates.",
  },
  {
    icon: TrendingUp,
    title: "Measurable impact",
    text: "Get transparent reporting on the emissions your sponsorship helps avoid.",
  },
]

export function SponsorCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-32">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
            <Image
              src="/fleet.png"
              alt="A fleet of electric trucks charging at a modern depot"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Sponsorship
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Put your brand behind cleaner air.
            </h2>
            <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
              Sponsoring I Haul Air™ means fueling real electric miles. Your
              support directly funds the transition away from diesel — and
              you&apos;ll ride along for every clean mile of it.
            </p>
          </Reveal>

          <div className="mt-10 space-y-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.1}>
                <div className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {b.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Button asChild size="lg" className="group mt-10 rounded-full">
              <Link href="/sponsorship">
                Explore sponsorship
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
