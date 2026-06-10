const testimonials = [
  {
    quote:
      "I used to spend 3 hours every week chasing payments. With Invoxa, the reminders go out automatically and I get paid before I even realize the invoice is overdue. Complete game changer.",
    name: 'Camille Dupont',
    title: 'Brand designer',
    location: 'Paris, France',
    initial: 'C',
    color: '#16a34a',
    metric: 'Saves 3h/week',
  },
  {
    quote:
      "Our agency bills 40+ clients per month. Before Invoxa we were using spreadsheets and losing track of who paid. Now everything is automated and our cash flow is the best it's ever been.",
    name: 'Nathan Brooks',
    title: 'Founder, Brooks & Co.',
    location: 'London, UK',
    initial: 'N',
    color: '#3b82f6',
    metric: '40+ clients managed',
  },
  {
    quote:
      "The multi-currency feature alone is worth every penny. I have clients in 8 countries and invoicing used to be a nightmare. Now it takes me two minutes per client.",
    name: 'Sofia Reyes',
    title: 'UX consultant',
    location: 'Mexico City',
    initial: 'S',
    color: '#7c3aed',
    metric: '8 countries, zero headaches',
  },
  {
    quote:
      "Switched from FreshBooks and never looked back. The interface is cleaner, the automations are smarter, and my clients actually compliment how professional my invoices look.",
    name: 'James Okafor',
    title: 'Fullstack developer',
    location: 'Lagos, Nigeria',
    initial: 'J',
    color: '#ea580c',
    metric: 'Clients love the design',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100 mb-5">
            <span className="text-xs text-brand-700 font-semibold">What they say</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Real people.{' '}
            <span className="text-brand-600">Real results.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-5"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="#f59e0b">
                    <path d="M6 1L7.5 4.5H11L8.5 6.5L9.5 10L6 8L2.5 10L3.5 6.5L1 4.5H4.5L6 1Z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Metric */}
              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-brand-50 border border-brand-100">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6L5 9L10 3" stroke="#16a34a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[11px] font-bold text-brand-700">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-400">{t.title} &bull; {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
