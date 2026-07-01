import type { ReactNode } from "react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Section({
  children,
  className,
  muted,
}: {
  children: ReactNode
  className?: string
  muted?: boolean
}) {
  return (
    <section
      className={cn(
        "border-b border-border",
        muted && "bg-card",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {children}
      </div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <Reveal>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  )
}

export type Feature = {
  icon: LucideIcon
  title: string
  text: string
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((f, i) => (
        <Reveal key={f.title} delay={i * 0.08}>
          <div className="h-full rounded-2xl border border-border bg-background p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {f.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function CtaBand({
  title,
  description,
  primary,
  secondary,
}: {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-64 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[120px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <Link href={primary.href}>{primary.label}</Link>
            </Button>
            {secondary && (
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href={secondary.href}>{secondary.label}</Link>
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
