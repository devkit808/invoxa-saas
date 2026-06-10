import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Features from '@/components/home/Features'
import HowItWorks from '@/components/home/HowItWorks'
import Testimonials from '@/components/home/Testimonials'
import Pricing from '@/components/home/Pricing'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
