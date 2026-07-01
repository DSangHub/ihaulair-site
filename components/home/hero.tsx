"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <Image
        src="/hero-truck.png"
        alt="Electric pickup truck driving on an open highway at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm font-semibold uppercase tracking-[0.25em] text-primary"
        >
          Zero Emissions. Zero Compromise.
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-tight text-glow-primary sm:text-6xl lg:text-7xl"
        >
          The Cleanest Load You&apos;ll Ever Carry.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          We&apos;re electrifying freight across the country — one clean mile at
          a time. Join the movement replacing diesel with pure electric power.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group rounded-full">
            <Link href="/sponsorship">
              Become a Sponsor
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="rounded-full"
          >
            <Link href="/movement">Join the Movement</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link href="/shop">Shop</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-hidden
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </motion.div>
    </section>
  )
}
