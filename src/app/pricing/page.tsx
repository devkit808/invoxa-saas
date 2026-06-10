import type { Metadata } from 'next'
import Pricing from '@/components/home/Pricing'
import FAQ from '@/components/home/FAQ'
import CTA from '@/components/home/CTA'

export const metadata: Metadata = {
  title: 'Pricing — Free plan available, paid from $14/mo',
  description:
    'Invoxa starts free. Paid plans from $14/month (billed annually). All plans include a 14-day trial.',
}

export default function PricingPage() {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-6 text-center pt-16 pb-4 bg-white">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-5">
          Plans for every stage
          <br />
          <span className="text-brand-600">of your freelance journey</span>
        </h1>
        <p className="text-xl text-slate-500">
          Start with our free plan. Upgrade when you need more.
        </p>
      </div>
      <Pricing />
      <FAQ />
      <CTA />
    </div>
  )
}
