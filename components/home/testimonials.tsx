import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    quote:
      "Switching our regional routes to I Haul Air™ cut our fuel bills and our carbon footprint in the same quarter. It just works.",
    name: "Dana Reyes",
    role: "Operations Director, Terra Logistics",
  },
  {
    quote:
      "The drivers love the trucks, our customers love the story, and the air is genuinely cleaner. This is the future of freight.",
    name: "Marcus Cole",
    role: "Founder, ClearGrid Freight",
  },
  {
    quote:
      "As a sponsor we get transparent impact reporting every month. We know exactly how many emissions we helped avoid.",
    name: "Priya Anand",
    role: "Head of Sustainability, Pulse Motors",
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Voices of the movement
          </p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            The people hauling us into a cleaner future.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col justify-between rounded-2xl border border-border bg-background p-8">
                <blockquote className="text-pretty text-lg leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
