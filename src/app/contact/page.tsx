import type { Metadata } from 'next'
import { Mail, MessageSquare, Clock, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Get help or talk to sales',
  description: 'Reach out to the Invoxa team for support, sales, or anything else.',
}

const contactOptions = [
  {
    icon: MessageSquare,
    title: 'Live chat support',
    description: 'Chat with us in the app. Average first response: 3 minutes during business hours.',
    action: 'Open chat',
    href: '#',
    color: 'text-brand-600 bg-brand-50',
  },
  {
    icon: Mail,
    title: 'Email us',
    description: 'Send us your question and we will reply within one business day.',
    action: 'hello@invoxa.io',
    href: 'mailto:hello@invoxa.io',
    color: 'text-blue-600 bg-blue-50',
  },
  {
    icon: Clock,
    title: 'Support hours',
    description: 'Monday – Friday, 9am to 6pm UTC. Agency plan customers get priority response.',
    action: null,
    href: null,
    color: 'text-amber-600 bg-amber-50',
  },
  {
    icon: MapPin,
    title: 'Offices',
    description: 'Amsterdam, Netherlands · Toronto, Canada · Sydney, Australia',
    action: null,
    href: null,
    color: 'text-violet-600 bg-violet-50',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-12 bg-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 500px 300px at 100% 0%, rgba(22,163,74,0.06) 0%, transparent 70%)' }}
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-5">
            How can we{' '}
            <span className="text-brand-600">help you?</span>
          </h1>
          <p className="text-xl text-slate-500">
            Sales question, technical issue, or just curious — our team responds fast.
          </p>
        </div>
      </section>

      <section className="py-12 pb-32 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactOptions.map((option) => {
                const Icon = option.icon
                return (
                  <div key={option.title} className="p-5 rounded-xl bg-white border border-slate-100 shadow-card">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${option.color} mb-3`}>
                      <Icon size={17} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{option.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">{option.description}</p>
                    {option.action && option.href && (
                      <a href={option.href} className="text-xs font-semibold text-brand-600 hover:text-brand-700">
                        {option.action} →
                      </a>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-card">
                <h2 className="text-xl font-black text-slate-900 mb-6">Send a message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">First name</label>
                      <input type="text" placeholder="Mia" className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-300 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Last name</label>
                      <input type="text" placeholder="Laurent" className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-300 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email address</label>
                    <input type="email" placeholder="mia@studio.co" className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-300 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">What can we help with?</label>
                    <select className="w-full px-4 py-3 text-sm text-slate-700 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all appearance-none cursor-pointer">
                      <option value="">Select a topic</option>
                      <option value="support">Technical support</option>
                      <option value="billing">Billing question</option>
                      <option value="demo">Request a demo</option>
                      <option value="agency">Agency plan inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea rows={5} placeholder="Describe your question or situation..." className="w-full px-4 py-3 text-sm text-slate-900 placeholder-slate-300 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-400 focus:bg-white transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full py-3.5 text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 rounded-xl transition-colors shadow-brand-sm">
                    Send message
                  </button>
                  <p className="text-xs text-center text-slate-400">
                    By submitting, you agree to our{' '}
                    <a href="/privacy" className="text-brand-600 hover:text-brand-700">Privacy Policy</a>.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
