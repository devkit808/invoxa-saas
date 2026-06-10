import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Subtle green glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(22,163,74,0.15) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-900/50 border border-brand-700/30 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-xs text-brand-400 font-semibold">Join 50,000+ freelancers</span>
        </div>

        <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          You did the work.
          <br />
          <span className="text-brand-400">Now get paid for it.</span>
        </h2>

        <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
          Stop writing invoice emails, stop following up manually, stop losing track of who owes what.
          Invoxa handles all of it.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white bg-brand-600 hover:bg-brand-500 rounded-xl transition-all duration-200 shadow-brand group"
          >
            Start invoicing free today
            <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-300 border border-slate-700 rounded-xl hover:border-slate-500 hover:text-white transition-all duration-200"
          >
            View pricing
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-600">
          {['Free plan available', 'No credit card required', 'Cancel anytime', 'GDPR compliant'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7L5.5 10L11.5 4" stroke="#4ade80" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
