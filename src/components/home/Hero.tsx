import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

function InvoiceMockup() {
  return (
    <div className="relative">
      {/* Soft green glow */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: 'radial-gradient(ellipse at 60% 40%, rgba(22,163,74,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'scale(1.15)',
        }}
      />

      {/* Invoice card */}
      <div
        className="relative bg-white rounded-2xl overflow-hidden"
        style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.07), 0 40px 80px rgba(0,0,0,0.08)' }}
      >
        {/* Invoice header */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="2" rx="1" fill="white"/>
                    <rect x="2" y="7" width="8" height="2" rx="1" fill="white"/>
                    <rect x="2" y="11" width="10" height="2" rx="1" fill="white"/>
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-white">Acme Studio</span>
              </div>
              <div className="text-[9px] text-slate-400">48 Market Street, San Francisco</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-bold text-white tracking-wider">INVOICE</div>
              <div className="text-[10px] text-brand-400 font-semibold">#INV-0089</div>
            </div>
          </div>
          <div className="flex items-center justify-between text-[9px] text-slate-400">
            <span>Bill to: <span className="text-white font-medium">Meridian Corp</span></span>
            <span>Due: <span className="text-amber-400 font-medium">Nov 15, 2025</span></span>
          </div>
        </div>

        {/* Line items */}
        <div className="px-6 py-4">
          <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mb-3 flex justify-between">
            <span>Description</span>
            <span>Amount</span>
          </div>
          <div className="space-y-2 mb-4">
            {[
              { item: 'Brand Identity System', qty: '1', price: '$4,500.00' },
              { item: 'UI/UX Design (12 screens)', qty: '1', price: '$5,200.00' },
              { item: 'Development support', qty: '8h', price: '$1,600.00' },
            ].map((row) => (
              <div key={row.item} className="flex items-center justify-between py-2 border-b border-slate-50">
                <div>
                  <div className="text-[10px] font-medium text-slate-700">{row.item}</div>
                  <div className="text-[8px] text-slate-400">Qty: {row.qty}</div>
                </div>
                <div className="text-[11px] font-semibold text-slate-800">{row.price}</div>
              </div>
            ))}
          </div>

          {/* Subtotals */}
          <div className="space-y-1 mb-3">
            <div className="flex justify-between text-[9px] text-slate-400">
              <span>Subtotal</span>
              <span>$11,300.00</span>
            </div>
            <div className="flex justify-between text-[9px] text-slate-400">
              <span>Tax (0%)</span>
              <span>$0.00</span>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center py-3 border-t-2 border-slate-100">
            <span className="text-[11px] font-bold text-slate-900">Total Due</span>
            <span className="text-lg font-black text-brand-600">$11,300.00</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <div className="text-[9px] text-slate-400">Payment via Bank Transfer or Stripe</div>
          <button className="px-4 py-1.5 text-[10px] font-semibold text-white bg-brand-600 rounded-lg">
            Pay now
          </button>
        </div>
      </div>

      {/* Floating: Payment received */}
      <div
        className="absolute -top-4 -right-6 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-card border border-brand-100"
        style={{ animation: 'float 5s ease-in-out infinite' }}
      >
        <div className="w-8 h-8 rounded-full bg-brand-50 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8L6.5 11.5L13 5" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-800">Payment received</div>
          <div className="text-[10px] font-bold text-brand-600">$11,300.00</div>
        </div>
      </div>

      {/* Floating: Invoice opened */}
      <div
        className="absolute -bottom-4 -left-6 bg-white rounded-xl px-4 py-3 flex items-center gap-3 shadow-card border border-blue-100"
        style={{ animation: 'float 7s ease-in-out infinite reverse' }}
      >
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="2.5" fill="#3b82f6"/>
            <path d="M1.5 8C1.5 8 4 3 8 3C12 3 14.5 8 14.5 8C14.5 8 12 13 8 13C4 13 1.5 8 1.5 8Z" stroke="#3b82f6" strokeWidth="1.4" fill="none"/>
          </svg>
        </div>
        <div>
          <div className="text-[11px] font-semibold text-slate-800">Invoice opened</div>
          <div className="text-[10px] text-slate-400">by client &bull; just now</div>
        </div>
      </div>
    </div>
  )
}

const perks = [
  'Free 14-day trial',
  'No credit card needed',
  'Cancel anytime',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 hero-bg" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200 mb-8 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
              <span className="text-xs text-brand-700 font-semibold">50,000+ freelancers trust Invoxa</span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl lg:text-6xl font-black leading-[1.06] tracking-tight mb-6 text-slate-900 animate-fade-up"
              style={{ animationDelay: '80ms' }}
            >
              Get paid faster.
              <br />
              <span className="text-brand-600">Stop chasing</span>
              <br />
              clients.
            </h1>

            {/* Sub */}
            <p
              className="text-lg text-slate-500 leading-relaxed max-w-lg mb-10 animate-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              Send beautiful invoices in seconds, automate payment reminders, and
              track every dollar owed — all from one clean dashboard. Your clients pay.
              You build.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up" style={{ animationDelay: '280ms' }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-all duration-200 shadow-brand-sm hover:shadow-brand group text-[15px]"
              >
                Start invoicing free
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 font-semibold text-slate-700 border border-slate-200 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 text-[15px]"
              >
                See how it works
              </Link>
            </div>

            {/* Perks */}
            <div className="flex flex-wrap gap-5 animate-fade-up" style={{ animationDelay: '360ms' }}>
              {perks.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-brand-500 flex-shrink-0" />
                  <span className="text-sm text-slate-500">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Invoice mockup */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '200ms' }}>
            <InvoiceMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
