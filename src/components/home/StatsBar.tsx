const stats = [
  { value: '50,000+', label: 'Freelancers & agencies' },
  { value: '$2.1B+', label: 'Invoiced through Invoxa' },
  { value: '3x', label: 'Faster payment on average' },
  { value: '98%', label: 'Customer satisfaction' },
]

export default function StatsBar() {
  return (
    <section className="border-t border-b border-slate-100 bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-slate-900 mb-1">{s.value}</div>
              <div className="text-sm text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
