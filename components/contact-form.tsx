"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const topics = [
  "Sponsorship",
  "Fleet Program",
  "EV Manufacturing",
  "Investor Relations",
  "Press",
  "General",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-2xl border border-accent/40 bg-accent/10 p-12 text-center"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Message received.</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out. Our team will get back to you within one
          business day.
        </p>
      </motion.div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="rounded-2xl border border-border bg-background p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="name">
          <input
            id="name"
            required
            className="input-base"
            placeholder="Jane Driver"
          />
        </Field>
        <Field label="Email" id="email">
          <input
            id="email"
            type="email"
            required
            className="input-base"
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Company" id="company">
          <input
            id="company"
            className="input-base"
            placeholder="Acme Logistics"
          />
        </Field>
        <Field label="Topic" id="topic">
          <select id="topic" className="input-base" defaultValue="Sponsorship">
            {topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message" id="message">
          <textarea
            id="message"
            required
            rows={5}
            className="input-base resize-none"
            placeholder="Tell us how you'd like to move the mission forward..."
          />
        </Field>
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full rounded-full">
        Send message
      </Button>
    </form>
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
