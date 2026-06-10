'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center shadow-brand-sm group-hover:shadow-brand transition-shadow duration-300">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="2" rx="1" fill="white"/>
                  <rect x="2" y="7" width="8" height="2" rx="1" fill="white"/>
                  <rect x="2" y="11" width="10" height="2" rx="1" fill="white"/>
                </svg>
              </div>
              <span className="font-bold text-slate-900 text-[15px] tracking-tight">Invoxa</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 text-sm text-slate-500 hover:text-slate-900 transition-colors rounded-lg hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact" className="text-sm text-slate-500 hover:text-slate-900 transition-colors">
                Sign in
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors shadow-brand-sm"
              >
                Start for free
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 text-slate-400 hover:text-slate-700 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-white/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className="relative z-10 flex flex-col gap-1 pt-20 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3.5 text-base text-slate-600 border-b border-slate-100 hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-5 flex flex-col gap-3">
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-center py-3 text-sm text-slate-500 border border-slate-200 rounded-xl">
              Sign in
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-center py-3 text-sm font-semibold text-white bg-brand-600 rounded-xl">
              Start for free
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
