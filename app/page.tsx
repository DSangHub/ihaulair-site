import { Hero } from "@/components/home/hero"
import { Partners } from "@/components/home/partners"
import { Stats } from "@/components/home/stats"
import { SponsorCta } from "@/components/home/sponsor-cta"
import { Testimonials } from "@/components/home/testimonials"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Stats />
      <SponsorCta />
      <Testimonials />
      <Newsletter />
    </>
  )
}
