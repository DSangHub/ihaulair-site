import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Reveal } from "@/components/reveal"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with I Haul Air™ about sponsorships, fleet electrification, manufacturing partnerships, investment, or press.",
}

const details = [
  { icon: Mail, label: "Email", value: "hello@ihaulair.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 010-2026" },
  { icon: MapPin, label: "HQ", value: "Denver, Colorado" },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's move the mission forward."
        description="Whether you want to sponsor, electrify a fleet, partner, invest, or just say hello — we'd love to hear from you."
      />

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8 lg:py-28">
          <Reveal>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">
                Reach us directly
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                Prefer to talk? Use the details below or fill out the form and
                the right team will get back to you within one business day.
              </p>
              <div className="mt-8 space-y-5">
                {details.map((d) => (
                  <div key={d.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {d.label}
                      </div>
                      <div className="font-medium">{d.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
