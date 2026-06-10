import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — The story behind Invoxa',
  description: 'Learn how Invoxa was built, and our mission to help every freelancer get paid on time.',
}

const values = [
  {
    title: 'The freelancer first',
    description: 'Every feature we build starts with one question: does this make a freelancer\'s life easier? Not an enterprise CFO\'s. Yours.',
  },
  {
    title: 'Simplicity is a feature',
    description: 'Invoicing should not require a manual. If you cannot figure it out in 60 seconds, we failed.',
  },
  {
    title: 'Your money is your money',
    description: 'We never hold your payments or take a cut of your invoiced amount. What you bill is what you receive.',
  },
  {
    title: 'Radically transparent',
    description: 'No hidden fees, no surprise charges, no fine print. Our pricing page tells you everything.',
  },
]

const team = [
  { name: 'Mia Laurent', role: 'CEO & Co-founder', initial: 'M', color: '#16a34a' },
  { name: 'Daniel Ferreira', role: 'CTO & Co-founder', initial: 'D', color: '#3b82f6' },
  { name: 'Priya Mehta', role: 'Head of Product', initial: 'P', color: '#7c3aed' },
  { name: 'Tom Bergman', role: 'Head of Engineering', initial: 'T', color: '#ea580c' },
  { name: 'Aisha Nkemdirim', role: 'Head of Design', initial: 'A', color: '#0891b2' },
  { name: 'Lucas Oliveira', role: 'Head of Growth', initial: 'L', color: '#dc2626' },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 600px 400px at 100% 0%, rgba(22,163,74,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-6">
            <span className="text-xs text-brand-700 font-semibold">Our story</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            Built by a freelancer,
            <br />
            <span className="text-brand-600">for freelancers.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed">
            Invoxa started because our co-founder Mia was a freelance designer who lost
            $8,000 one year to late payments she forgot to follow up on. There had to be
            a better way.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-t border-b border-slate-100 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '50,000+', label: 'Active users' },
            { value: '$2.1B+', label: 'Invoiced total' },
            { value: '150+', label: 'Countries' },
            { value: '4.9', label: 'App Store rating' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-brand-600 mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12">What we stand for</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="p-7 rounded-2xl border border-slate-100 bg-white shadow-card">
                <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-black text-slate-900 mb-12">Meet the team</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {team.map((member) => (
              <div key={member.name} className="flex items-center gap-4 p-5 rounded-xl bg-white border border-slate-100 shadow-card">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold text-white flex-shrink-0"
                  style={{ background: member.color }}
                >
                  {member.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{member.name}</div>
                  <div className="text-xs text-slate-400">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Come work with us</h2>
          <p className="text-slate-500 mb-8">We are a fully remote team building something we genuinely use every day.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shadow-brand-sm">
            View open roles
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
