import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms and conditions governing your use of Invoxa.',
}

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-black text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-sm text-slate-400 mb-12">Last updated: January 1, 2025</p>

        <div className="space-y-10 text-sm text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">1. Acceptance</h2>
            <p>By using Invoxa, Inc. (&ldquo;Invoxa&rdquo;) services, you agree to these Terms. If using on behalf of an organization, you represent you have the authority to bind that organization.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">2. Service Description</h2>
            <p>Invoxa provides online invoicing, payment collection, time tracking, and financial reporting tools for freelancers and small businesses. We may update or discontinue features with reasonable notice.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">3. Account Responsibilities</h2>
            <p className="mb-3">You must:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Be at least 16 years old</li>
              <li>Provide accurate registration information</li>
              <li>Keep your credentials secure</li>
              <li>Notify us of any unauthorized account access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You may not use Invoxa to:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Invoice for illegal goods or services</li>
              <li>Process fraudulent payments</li>
              <li>Scrape or copy the platform content</li>
              <li>Attempt to breach the security of any system</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">5. Billing & Cancellation</h2>
            <p className="mb-3">
              Paid plans are billed monthly or annually in advance. You may cancel at any time.
              Cancellation takes effect at the end of the current billing period.
            </p>
            <p>
              Annual subscribers who cancel within 30 days of renewal receive a pro-rated refund
              for unused months. We reserve the right to change pricing with 30 days notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">6. Your Data</h2>
            <p>
              You own your data. Invoxa does not claim ownership over your invoices, clients, or
              financial information. We use your data solely to provide the service. You can
              export or delete your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">7. Payments & Fees</h2>
            <p>
              Invoxa does not take a percentage of your invoiced amounts. Payment processing fees
              are charged by Stripe (typically 1.4% + 20p for EU cards, 2.9% + 30c for US cards).
              These are Stripe&apos;s fees, not Invoxa&apos;s. We have no control over them.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">8. Intellectual Property</h2>
            <p>
              The Invoxa platform, design, and software are owned by Invoxa, Inc. These Terms
              do not grant you any rights beyond the license to use the service as described.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">9. Disclaimer & Limitation of Liability</h2>
            <p className="mb-3">
              THE SERVICE IS PROVIDED &ldquo;AS IS.&rdquo; INVOXA DISCLAIMS ALL WARRANTIES TO THE EXTENT PERMITTED BY LAW.
            </p>
            <p>
              INVOXA&apos;S TOTAL LIABILITY TO YOU FOR ANY CLAIM SHALL NOT EXCEED THE GREATER OF
              (A) AMOUNTS PAID IN THE PRIOR 12 MONTHS OR (B) $100.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">10. Governing Law</h2>
            <p>These Terms are governed by the laws of the Netherlands. Disputes shall be resolved in the courts of Amsterdam.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 mb-3">11. Contact</h2>
            <p>
              Invoxa, Inc. &bull; legal@invoxa.io<br />
              Keizersgracht 555, Amsterdam, Netherlands
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
