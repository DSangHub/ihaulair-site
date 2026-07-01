const partners = [
  "VOLTHAUL",
  "AMPERE FREIGHT",
  "NORTHWIND EV",
  "CLEARGRID",
  "PULSE MOTORS",
  "TERRA LOGISTICS",
  "ZEROLINE",
  "HELIOS FLEET",
]

export function Partners() {
  return (
    <section className="border-b border-border py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Trusted by the fleets driving the transition
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-16 pr-16">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap text-lg font-semibold tracking-tight text-muted-foreground/70"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
