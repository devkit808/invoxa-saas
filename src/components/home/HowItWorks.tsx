const steps = [
  {
    number: '01',
    title: 'Create your invoice',
    description:
      'Add your client, select a template, drop in your line items or import from your time tracker. Your invoice looks polished in under a minute.',
    detail: 'Works for fixed-price, hourly, and milestone billing.',
  },
  {
    number: '02',
    title: 'Send with one click',
    description:
      'Hit send and your client receives a branded email with a secure payment link — no login, no friction. You get notified the moment they open it.',
    detail: 'Supports email, link sharing, or WhatsApp.',
  },
  {
    number: '03',
    title: 'Get paid automatically',
    description:
      'Clients pay instantly by card or bank transfer. If they miss the deadline, Invoxa sends reminders on your behalf — automatically and professionally.',
    detail: 'Funds arrive in your bank within 1-2 business days.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-5">
            <span className="text-xs text-slate-600 font-semibold">How it works</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">
            From quote to payment
            <br />
            in <span className="text-brand-600">three steps</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No onboarding call needed. Most users send their first invoice within 4 minutes of signing up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%-0px)] w-full h-px bg-slate-200 z-0" style={{ width: '100%', left: '50%' }} />
              )}
              <div className="relative bg-white rounded-2xl p-8 border border-slate-100 shadow-card z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center mb-6">
                  <span className="text-xl font-black text-brand-600">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{step.description}</p>
                <div className="flex items-center gap-2 text-xs text-brand-600 font-medium">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
