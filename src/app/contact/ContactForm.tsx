'use client'

export default function ContactForm() {
  return (
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
  )
}
