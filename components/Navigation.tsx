'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'MAIN PAGE', href: '/' },
    { label: 'BẢN TIN', href: 'https://beyondyogawithphuong.substack.com/', external: true },
    { label: 'DỊCH VỤ', href: '#services' },
    { label: 'CONTACT INFO', href: '#contact' },
    { label: 'VỀ PHƯƠNG', href: '#about' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    }`}>
      <div className="container-wide mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Left Nav Items */}
          <div className="flex items-center gap-8">
            {navItems.slice(0, 2).map((item: any) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="text-sm font-body font-semibold text-brand-text hover:text-brand-highlight transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden flex items-center justify-center bg-brand-overlay/10">
              <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Right Nav Items */}
          <div className="flex items-center gap-8">
            {navItems.slice(2).map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-body font-semibold text-brand-text hover:text-brand-highlight transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-brand-overlay/20"></div>
    </nav>
  )
}
