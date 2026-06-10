import {
  FileText,
  Bell,
  Clock,
  BarChart3,
  Globe,
  CreditCard,
} from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'Professional invoices',
    description:
      'Create branded invoices in under 30 seconds. Pick a template, add your line items, and send — your client gets a clean, mobile-friendly payment page.',
    color: 'bg-brand-50 text-brand-600',
  },
  {
    icon: Bell,
    title: 'Automated reminders',
    description:
      'Set it once. Invoxa sends polite follow-up emails 3 days before, on the due date, and weekly after. Clients pay without you having to ask.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Clock,
    title: 'Time tracking',
    description:
      'Track billable hours directly inside Invoxa. One click turns a time entry into an invoice line item. No more spreadsheets, no more forgetting billable work.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Income reports',
    description:
      'See exactly what you earned, what is outstanding, and what is overdue. Export ready-to-file reports for tax season — no accountant translation needed.',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Globe,
    title: 'Multi-currency',
    description:
      'Work with international clients? Invoice in any of 150+ currencies. Invoxa handles conversion rates and formats amounts the way your clients expect.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: CreditCard,
    title: 'One-click payments',
    description:
      'Clients pay by card, bank transfer, or PayPal without creating an account. Stripe-powered, instant confirmation, automatic reconciliation.',
    color: 'bg-rose-50 text-rose-600',
  },
]

export default function Features() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-5">
            <span className="text-xs text-brand-700 font-semibold">What you get</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-5">
            Everything a{' '}
            <span className="text-brand-600">serious freelancer</span>
            <br />
            needs to run their business
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            No bloat, no accounting degree required. Just clean tools that keep
            your cash flow healthy and your clients happy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="p-7 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${f.color} mb-5`}>
                  <Icon size={21} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2.5">{f.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
