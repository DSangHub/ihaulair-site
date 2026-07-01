"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check, Download, FileText, Star, CalendarClock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { buildSponsorshipDeckPdf } from "@/lib/generate-deck"

type TabId = "sponsor" | "fleet" | "media"

const tabs: { id: TabId; label: string; blurb: string }[] = [
  {
    id: "sponsor",
    label: "Sponsor Inquiry",
    blurb: "Put your brand on the cleanest miles in freight.",
  },
  {
    id: "fleet",
    label: "Fleet Program",
    blurb: "Electrify your fleet and join the national tour.",
  },
  {
    id: "media",
    label: "Media Contact",
    blurb: "Press, interviews, assets, and the media kit.",
  },
]

export function SponsorEngagement() {
  const [tab, setTab] = useState<TabId>("sponsor")
  const [downloaded, setDownloaded] = useState(false)
  const formsRef = useRef<HTMLDivElement>(null)

  const focusTab = (id: TabId) => {
    setTab(id)
    formsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const downloadDeck = () => {
    const blob = buildSponsorshipDeckPdf()
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "I-Haul-Air-Sponsorship-Deck.pdf"
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 3000)
  }

  return (
    <div>
      {/* Deck / media kit / founding sponsor actions */}
      <div className="flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
        <Button size="lg" className="group rounded-full" onClick={downloadDeck}>
          <Download className="transition-transform group-hover:translate-y-0.5" />
          {downloaded ? "Deck downloaded" : "Download Sponsorship Deck"}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full"
          onClick={() => focusTab("media")}
        >
          <FileText />
          Request Media Kit
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="rounded-full"
          onClick={() => focusTab("sponsor")}
        >
          <Star />
          Become a Founding Sponsor
        </Button>
      </div>

      {/* Tabbed forms */}
      <div ref={formsRef} className="mt-16 scroll-mt-28">
        <div className="mx-auto flex max-w-md flex-wrap items-center justify-center gap-2 rounded-full border border-border bg-card p-1.5">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={`relative flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                tab === t.id
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === t.id && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <p className="mb-6 text-center text-muted-foreground">
                {tabs.find((t) => t.id === tab)?.blurb}
              </p>
              {tab === "sponsor" && <SponsorForm />}
              {tab === "fleet" && <FleetForm />}
              {tab === "media" && <MediaForm />}
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <CalendarClock className="h-4 w-4 text-accent" />
          Prefer to talk? We&apos;ll schedule a sponsor meeting within one
          business day.
        </p>
      </div>
    </div>
  )
}

/* ---------------------------------- Forms --------------------------------- */

function useSubmit() {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }
  return { submitted, onSubmit }
}

function Success({ title, text }: { title: string; text: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 p-12 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
        <Check className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{text}</p>
    </motion.div>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}

function FormShell({
  children,
  onSubmit,
  cta,
}: {
  children: React.ReactNode
  onSubmit: (e: React.FormEvent) => void
  cta: string
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      {children}
      <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
        {cta}
      </Button>
    </form>
  )
}

function SponsorForm() {
  const { submitted, onSubmit } = useSubmit()
  if (submitted)
    return (
      <Success
        title="Sponsor inquiry received."
        text="Our partnerships team will reach out within one business day to schedule your sponsor meeting."
      />
    )
  return (
    <FormShell onSubmit={onSubmit} cta="Submit sponsor inquiry">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="s-name">
          <input id="s-name" required className="input-base" placeholder="Jane Rivera" />
        </Field>
        <Field label="Work email" id="s-email">
          <input id="s-email" type="email" required className="input-base" placeholder="you@brand.com" />
        </Field>
        <Field label="Company / brand" id="s-company">
          <input id="s-company" required className="input-base" placeholder="Acme Energy" />
        </Field>
        <Field label="Interested tier" id="s-tier">
          <select id="s-tier" className="input-base" defaultValue="Champion">
            <option>Supporter</option>
            <option>Champion</option>
            <option>Founding Partner</option>
            <option>Not sure yet</option>
          </select>
        </Field>
        <Field label="Estimated budget" id="s-budget">
          <select id="s-budget" className="input-base" defaultValue="$20K–$50K / mo">
            <option>Under $5K / mo</option>
            <option>$5K–$20K / mo</option>
            <option>$20K–$50K / mo</option>
            <option>$50K+ / mo</option>
          </select>
        </Field>
        <Field label="Phone (optional)" id="s-phone">
          <input id="s-phone" type="tel" className="input-base" placeholder="(555) 000-0000" />
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Goals" id="s-goals">
          <textarea
            id="s-goals"
            rows={4}
            className="input-base resize-none"
            placeholder="What would a successful sponsorship look like for your brand?"
          />
        </Field>
      </div>
    </FormShell>
  )
}

function FleetForm() {
  const { submitted, onSubmit } = useSubmit()
  if (submitted)
    return (
      <Success
        title="Fleet application received."
        text="We'll review your fleet details and follow up with electrification options and next steps."
      />
    )
  return (
    <FormShell onSubmit={onSubmit} cta="Apply to the fleet program">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Fleet / company name" id="f-company">
          <input id="f-company" required className="input-base" placeholder="Summit Logistics" />
        </Field>
        <Field label="Contact email" id="f-email">
          <input id="f-email" type="email" required className="input-base" placeholder="ops@company.com" />
        </Field>
        <Field label="Fleet size" id="f-size">
          <select id="f-size" className="input-base" defaultValue="11–50 vehicles">
            <option>1–10 vehicles</option>
            <option>11–50 vehicles</option>
            <option>51–250 vehicles</option>
            <option>250+ vehicles</option>
          </select>
        </Field>
        <Field label="Primary vehicle type" id="f-type">
          <select id="f-type" className="input-base" defaultValue="Pickups / vans">
            <option>Pickups / vans</option>
            <option>Box trucks</option>
            <option>Semi / long-haul</option>
            <option>Mixed fleet</option>
          </select>
        </Field>
        <Field label="Home base (city, state)" id="f-location">
          <input id="f-location" className="input-base" placeholder="Denver, CO" />
        </Field>
        <Field label="Target timeline" id="f-timeline">
          <select id="f-timeline" className="input-base" defaultValue="3–6 months">
            <option>Immediately</option>
            <option>3–6 months</option>
            <option>6–12 months</option>
            <option>Just exploring</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Notes" id="f-notes">
          <textarea
            id="f-notes"
            rows={4}
            className="input-base resize-none"
            placeholder="Tell us about your routes, depots, and charging situation."
          />
        </Field>
      </div>
    </FormShell>
  )
}

function MediaForm() {
  const { submitted, onSubmit } = useSubmit()
  if (submitted)
    return (
      <Success
        title="Media request received."
        text="Our comms team will send the media kit and follow up on your request shortly."
      />
    )
  return (
    <FormShell onSubmit={onSubmit} cta="Request media kit">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" id="m-name">
          <input id="m-name" required className="input-base" placeholder="Alex Chen" />
        </Field>
        <Field label="Email" id="m-email">
          <input id="m-email" type="email" required className="input-base" placeholder="you@outlet.com" />
        </Field>
        <Field label="Outlet / publication" id="m-outlet">
          <input id="m-outlet" className="input-base" placeholder="The Daily Charge" />
        </Field>
        <Field label="Request type" id="m-type">
          <select id="m-type" className="input-base" defaultValue="Media kit">
            <option>Media kit</option>
            <option>Interview request</option>
            <option>Brand assets / logos</option>
            <option>Event coverage</option>
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Details" id="m-details">
          <textarea
            id="m-details"
            rows={4}
            className="input-base resize-none"
            placeholder="Deadline, story angle, and what you need from us."
          />
        </Field>
      </div>
    </FormShell>
  )
}
