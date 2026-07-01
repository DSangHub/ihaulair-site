"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-lines opacity-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[48rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Ride along with the movement.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Get clean-freight milestones, fleet launches, and sponsorship
          openings delivered to your inbox. No noise, just cleaner air.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-full border border-accent/40 bg-accent/10 px-6 py-4 text-accent"
          >
            <Check className="h-5 w-5" />
            <span className="font-medium">
              You&apos;re in. Welcome to the movement.
            </span>
          </motion.div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="h-12 flex-1 rounded-full border border-border bg-card px-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            <Button type="submit" size="lg" className="rounded-full">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </section>
  )
}
