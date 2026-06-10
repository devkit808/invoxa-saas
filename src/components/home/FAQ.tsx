'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Can my clients pay without creating an account?',
    a: 'Yes. Your clients receive an email with a secure payment link. They pay directly — no signup, no login, no friction. This is the single biggest reason invoices get paid faster with Invoxa.',
  },
  {
    q: 'Which payment methods are accepted?',
    a: 'Clients can pay by credit/debit card (Visa, Mastercard, Amex), bank transfer (SEPA, ACH), and PayPal. We use Stripe to process card payments — funds land in your connected bank account within 1-2 business days.',
  },
  {
    q: 'Can I customize my invoices with my brand?',
    a: 'Absolutely. Upload your logo, set your brand colors, and choose from 10+ templates. Every invoice looks like it came from a professional studio — not a generic billing tool. Agency plan users also get a fully branded payment page at a custom URL.',
  },
  {
    q: 'What happens when a client does not pay on time?',
    a: 'Invoxa automatically sends payment reminders at intervals you configure: 3 days before due, on the due date, 7 days after, and every week until paid. The tone is always professional. You can also add late fees that are automatically calculated and applied.',
  },
  {
    q: 'Is my financial data secure?',
    a: 'Yes. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We do not store full card numbers — payments are tokenized by Stripe. Invoxa is SOC 2 Type II certified and GDPR compliant.',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes, anytime. No questions asked, no cancellation fees. If you cancel an annual plan, you keep access until the end of the billing period. You can export all your data at any time in CSV or PDF format.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-slate-500">
            Still have questions?{' '}
            <a href="/contact" className="text-brand-600 hover:text-brand-700 font-semibold underline underline-offset-2">
              Talk to our team.
            </a>
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                open === i
                  ? 'border-brand-200 bg-brand-50'
                  : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`text-sm font-semibold transition-colors ${open === i ? 'text-brand-800' : 'text-slate-800'}`}>
                  {faq.q}
                </span>
                <ChevronDown
                  size={16}
                  className={`flex-shrink-0 ml-4 transition-transform duration-300 ${open === i ? 'rotate-180 text-brand-600' : 'text-slate-400'}`}
                />
              </button>
              <div className={`transition-all duration-300 ease-in-out ${open === i ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <p className="px-6 pb-5 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
