import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Invoxa collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Introduction</h2>
            <p>
              Invoxa, Inc. (&ldquo;Invoxa&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you use the Invoxa platform and related services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3"><strong className="text-slate-800">Account information:</strong> Name, email address, company name, and password when you register.</p>
            <p className="mb-3"><strong className="text-slate-800">Business data:</strong> Invoices, client details, time entries, and payment records you create in the platform.</p>
            <p className="mb-3"><strong className="text-slate-800">Payment information:</strong> Billing information is processed by Stripe. We do not store full card numbers.</p>
            <p><strong className="text-slate-800">Usage data:</strong> How you interact with the platform, features used, browser type, and IP address.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Provide and operate the Invoxa platform</li>
              <li>Process payments and send invoicing-related emails on your behalf</li>
              <li>Send transactional notifications (payment confirmations, reminders)</li>
              <li>Improve the platform based on usage patterns</li>
              <li>Send product updates and marketing communications (opt-out anytime)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Sharing Your Information</h2>
            <p className="mb-3">We do not sell your personal data. We share information only with:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-slate-800">Stripe:</strong> For payment processing</li>
              <li><strong className="text-slate-800">Cloud providers:</strong> AWS for infrastructure (data encrypted at rest)</li>
              <li><strong className="text-slate-800">Legal authorities:</strong> When required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Data Security</h2>
            <p>
              All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Invoxa is SOC 2 Type II
              certified. We conduct regular penetration testing and security audits.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Your Rights (GDPR / CCPA)</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Access the personal data we hold about you</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
            <p className="mt-3">To exercise these rights, contact us at privacy@invoxa.io.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Cookies</h2>
            <p>
              We use essential cookies to operate the platform and analytics cookies to improve
              the user experience. You can control non-essential cookies via your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Data Retention</h2>
            <p>
              We retain your data as long as your account is active. After deletion, personal
              data is removed within 30 days. Certain financial records may be retained for
              7 years to comply with accounting regulations.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We will notify you by email of any material changes to this Privacy Policy at
              least 14 days before they take effect.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">10. Contact</h2>
            <p>
              Invoxa, Inc. &bull; privacy@invoxa.io<br />
              Keizersgracht 555, Amsterdam, Netherlands
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
