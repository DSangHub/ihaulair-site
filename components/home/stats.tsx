import { AnimatedCounter } from "@/components/animated-counter"
import { Reveal } from "@/components/reveal"

const stats = [
  {
    value: 128,
    suffix: "M",
    label: "Clean miles hauled",
    detail: "Emission-free freight delivered across North America.",
  },
  {
    value: 94,
    suffix: "K",
    decimals: 0,
    label: "Tons of CO₂ avoided",
    detail: "Equivalent to planting over 1.5 million trees.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Electric fleet",
    detail: "Every mile powered by clean, renewable energy.",
  },
  {
    value: 2.4,
    suffix: "M",
    decimals: 1,
    label: "Gallons of diesel displaced",
    detail: "Fuel that will never be burned into our air.",
  },
]

export function Stats() {
  return (
    <section className="relative border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            The impact, measured
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Clean air isn&apos;t a slogan. It&apos;s a number we&apos;re growing
            every day.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="border-t border-border pt-6">
                <div className="text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
                  <AnimatedCounter
                    value={s.value}
                    decimals={s.decimals ?? 0}
                    suffix={s.suffix}
                  />
                </div>
                <p className="mt-3 font-medium">{s.label}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
