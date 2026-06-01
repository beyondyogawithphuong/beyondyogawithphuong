'use client'

import { useState, useEffect } from 'react'

type NavItem = { label: string; href: string; external?: boolean }

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const leftItems: NavItem[] = [
    { label: 'BẮT ĐẦU', href: '#entry-points' },
    { label: 'SẢN PHẨM', href: '#entry-points' },
  ]

  const rightItems: NavItem[] = [
    { label: 'VỀ PHƯƠNG', href: '#about' },
    { label: 'THƯ VIỆN', href: '#free-resources' },
    { label: 'BẢN TIN ↗', href: 'https://beyondyogawithphuong.substack.com/', external: true },
  ]

  const linkClass =
    'text-xs md:text-sm font-body font-semibold tracking-wider text-ink hover:text-sage transition-colors'

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-paper ${
        isScrolled
          ? 'border-b border-ink/10 shadow-[0_4px_20px_-12px_rgba(0,0,0,0.12)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-wide px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Left */}
          <div className="flex items-center gap-6 md:gap-8 flex-1">
            {leftItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`hidden sm:inline-block ${linkClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="/" className="flex justify-center shrink-0" aria-label="Beyond Yoga with Phuong, Trang chu">
            <div className="h-10 w-10 md:h-12 md:w-12 rounded-full overflow-hidden bg-sage-soft">
              <img src="/logo.png" alt="Beyond Yoga" className="h-full w-full object-cover" />
            </div>
          </a>

          {/* Right */}
          <div className="flex items-center justify-end gap-6 md:gap-8 flex-1">
            {rightItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className={`hidden sm:inline-block ${linkClass}`}
              >
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  )
}
