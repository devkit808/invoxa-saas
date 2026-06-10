'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Solo',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'For freelancers just getting started with professional invoicing.',
    features: [
      'Up to 5 active invoices',
      'Unlimited clients',
      '2 invoice templates',
      'Basic payment reminders',
      'PDF export',
      'Email support',
    ],
    cta: 'Get started free',
    highlighted: false,
    free: true,
  },
  {
    name: 'Freelancer',
    monthlyPrice: 19,
    annualPrice: 14,
    description: 'Everything a full-time freelancer needs to look professional and get paid on time.',
    features: [
      'Unlimited invoices',
      'Unlimited clients',
      '10 invoice templates',
      'Automated reminders (3 levels)',
      'Time tracking',
      'Multi-currency support',
      'Online card payments',
      'Priority support',
    ],
    cta: 'Start free trial',
    highlighted: true,
    badge: 'Most popular',
  },
  {
    name: 'Agency',
    monthlyPrice: 49,
    annualPrice: 36,
    description: 'For agencies and studios billing multiple clients at scale.',
    features: [
      'Everything in Freelancer',
      'Up to 5 team members',
      'Client portal',
      'Branded payment pages',
      'Advanced reports & exports',
      'Stripe & PayPal integration',
      'Recurring invoices',
      'Dedicated account manager',
    ],
    cta: 'Start free trial',
    highlighted: false,
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <span className="text-xs text-slate-600 font-semibold">Pricing</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Honest pricing.{' '}
            <span className="text-brand-600">No surprises.</span>
          </h2>
          <p className="text-lg text-slate-500 mb-8">
            Start free. Upgrade when your business grows.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-2 p-1 bg-white rounded-xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                !annual ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-slate-900 text-white' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Annual
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-brand-100 text-brand-700 font-bold">
                Save 26%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-slate-900 border-slate-900 shadow-[0_8px_32px_rgba(15,23,42,0.25)]'
                  : 'bg-white border-slate-100 shadow-card hover:shadow-card-hover'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-brand-600 text-white text-xs font-bold rounded-full shadow-brand-sm">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-5 ${plan.highlighted ? 'text-slate-400' : 'text-slate-500'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  {plan.free ? (
                    <span className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>Free</span>
                  ) : (
                    <>
                      <span className={`text-4xl font-black ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                        ${annual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className={`text-sm ${plan.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>/mo</span>
                      {annual && plan.monthlyPrice > 0 && (
                        <span className={`ml-1 text-xs line-through ${plan.highlighted ? 'text-slate-600' : 'text-slate-300'}`}>
                          ${plan.monthlyPrice}
                        </span>
                      )}
                    </>
                  )}
                </div>
                {annual && plan.annualPrice > 0 && (
                  <p className={`text-xs mt-1 ${plan.highlighted ? 'text-slate-400' : 'text-slate-400'}`}>
                    Billed ${plan.annualPrice * 12}/year
                  </p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={15} className={plan.highlighted ? 'text-brand-400' : 'text-brand-600'} />
                    <span className={`text-sm ${plan.highlighted ? 'text-slate-300' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-3 px-6 rounded-xl text-sm font-bold transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-brand-600 text-white hover:bg-brand-500 shadow-brand-sm'
                    : 'border-2 border-slate-200 text-slate-800 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-10">
          All paid plans include a 14-day free trial. No credit card required to start.
        </p>
      </div>
    </section>
  )
}
