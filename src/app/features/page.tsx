import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, FileText, Bell, Clock, BarChart3, Globe, CreditCard, Users, Shield, Repeat, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features — Professional invoicing built for freelancers',
  description:
    'Explore every Invoxa feature: automated invoicing, smart reminders, time tracking, multi-currency, client portal, and more.',
}

const featureGroups = [
  {
    category: 'Invoicing',
    icon: FileText,
    color: 'text-brand-600 bg-brand-50',
    features: [
      { title: 'Branded invoice templates', desc: 'Choose from 10+ professional templates. Add your logo, colors, and custom fields.' },
      { title: 'Line items & discounts', desc: 'Add multiple line items, apply per-item or invoice-level discounts, and add taxes automatically.' },
      { title: 'Deposit invoices', desc: "Request a 50% deposit before starting work. Clients pay the balance when you're done." },
      { title: 'Recurring invoices', desc: 'Set up monthly retainer invoices that send automatically on the first of each month.' },
    ],
  },
  {
    category: 'Payments',
    icon: CreditCard,
    color: 'text-blue-600 bg-blue-50',
    features: [
      { title: 'Online card payments', desc: 'Clients pay by card directly from the invoice email. Powered by Stripe — funds in 1-2 days.' },
      { title: 'Bank transfer support', desc: 'Display your bank details beautifully with one-tap copy for ACH and SEPA transfers.' },
      { title: 'PayPal integration', desc: 'Connect your PayPal account and add a PayPal button to every invoice in one click.' },
      { title: 'Late fees', desc: 'Set a flat or percentage late fee that applies automatically after the due date.' },
    ],
  },
  {
    category: 'Automation',
    icon: Bell,
    color: 'text-amber-600 bg-amber-50',
    features: [
      { title: 'Smart reminders', desc: 'Set automated reminder sequences: 3 days before, on due date, 1 week late, monthly.' },
      { title: 'Thank you emails', desc: 'Automatically send a personalized thank-you when payment is received.' },
      { title: 'Invoice scheduling', desc: 'Write the invoice now and schedule it to send on any future date.' },
      { title: 'Auto-numbering', desc: 'Sequential invoice numbering with custom prefixes (e.g. INV-2025-001).' },
    ],
  },
  {
    category: 'Time Tracking',
    icon: Clock,
    color: 'text-violet-600 bg-violet-50',
    features: [
      { title: 'Built-in timer', desc: 'One-click start/stop timer. Logs to a time sheet automatically.' },
      { title: 'Manual time entry', desc: 'Add time blocks manually for work tracked elsewhere.' },
      { title: 'Convert to invoice', desc: 'Select time entries and convert them to invoice line items in one click.' },
      { title: 'Team time tracking', desc: '(Agency plan) Track billable hours across your whole team and bill clients accurately.' },
    ],
  },
  {
    category: 'Reporting',
    icon: BarChart3,
    color: 'text-teal-600 bg-teal-50',
    features: [
      { title: 'Income overview', desc: 'Total paid, outstanding, and overdue at a glance. Filter by client, project, or date.' },
      { title: 'Tax reports', desc: 'Export tax-ready reports with totals by VAT rate, country, or category.' },
      { title: 'Client statements', desc: 'Generate an account statement for any client showing all invoices and payments.' },
      { title: 'CSV & PDF export', desc: 'Export any report to send to your accountant or import into your accounting software.' },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
    color: 'text-rose-600 bg-rose-50',
    features: [
      { title: 'Secure payment links', desc: 'Every payment link is unique, time-limited, and HTTPS-encrypted.' },
      { title: 'Two-factor authentication', desc: 'Protect your account with 2FA using an authenticator app or SMS.' },
      { title: 'SOC 2 Type II certified', desc: 'Independently audited security controls. Your data is safe.' },
      { title: 'GDPR compliance', desc: 'Full data portability and deletion on request. EU-hosted data available.' },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 100% 0%, rgba(22,163,74,0.07) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <span className="text-xs text-brand-700 font-semibold">All features</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Everything you need
            <br />
            <span className="text-brand-600">to run your business</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
            No accounting degree. No complicated setup. Just clean tools that help you
            invoice confidently and get paid on time.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shadow-brand-sm"
          >
            Start free trial
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-16 pb-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-20">
          {featureGroups.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color}`}>
                    <Icon size={20} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900">{group.category}</h2>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.features.map((f) => (
                    <div key={f.title} className="p-5 rounded-xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-200">
                      <h3 className="text-sm font-bold text-slate-900 mb-2">{f.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Start invoicing in minutes</h2>
          <p className="text-slate-500 mb-8">14-day free trial. No credit card required.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shadow-brand-sm">
            Get started free
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
