'use client'
import { useEffect, useState, useCallback } from 'react'

const NAV = [
  { label: 'Home',       href: '#home'       },
  { label: 'About Me',   href: '#about'       },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Services',   href: '#services'    },
  { label: 'Education',  href: '#education'   },
  { label: 'Contact',    href: '#contact'     },
]

export default function Header() {
  const [active, setActive]   = useState('#home')
  const [theme, setTheme]     = useState('light')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'light'
    setTheme(saved)
    document.documentElement.dataset.theme = saved
  }, [])

  useEffect(() => {
    const ids = ['home', 'about', 'projects', 'skills', 'services', 'education', 'contact']
    const els = ids.map(id => document.getElementById(id)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) }),
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 },
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const toggleTheme = useCallback(() => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.dataset.theme = next
    localStorage.setItem('portfolio-theme', next)

    const layer = document.getElementById('bg-layer')
    if (layer) {
      layer.style.display = 'none'
      void layer.offsetHeight
      layer.style.display = ''
    }
  }, [theme])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 lg:px-16 h-[72px] border-b transition-colors duration-300 glass-header"
        style={{ borderColor: 'var(--ds-border)' }}
      >
        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 flex items-center gap-1.5 mr-6 transition-opacity hover:opacity-75"
          aria-label="Go to home"
        >
          <span style={{ fontSize: '1.6rem' }} aria-hidden="true">🦋</span>
          <span
            className="font-bold tracking-[0.18em] uppercase ml-1"
            style={{
              fontFamily: 'var(--font-cormorant, Georgia, serif)',
              fontSize: 'clamp(1.3rem, 4vw, 2rem)',
              color: 'var(--ds-text)',
            }}
          >
            Shanese
          </span>
        </a>

        {/* Desktop nav — pill container */}
        <nav
          className="flex-1 hidden lg:flex items-center justify-center"
          aria-label="Primary navigation"
        >
          <div
            className="flex items-center gap-0.5 rounded-full border px-1.5 py-1.5"
            style={{ borderColor: 'var(--ds-border)' }}
          >
            {NAV.map(({ label, href }) => {
              const isActive = active === href
              return (
                <a
                  key={href}
                  href={href}
                  className="px-6 py-2.5 rounded-full text-[17px] font-semibold whitespace-nowrap transition-all duration-200"
                  style={{
                    background: isActive ? 'var(--gold)' : 'transparent',
                    color:      isActive ? '#fff'        : 'var(--ds-muted)',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'var(--ds-pill)' }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}
                >
                  {label}
                </a>
              )
            })}
          </div>
        </nav>

        {/* Spacer on mobile */}
        <div className="flex-1 lg:hidden" />

        {/* Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-11 h-11 grid place-items-center rounded-full border text-xl transition-all duration-200 hover:scale-105"
            style={{ borderColor: 'var(--ds-border)', color: 'var(--ds-text)' }}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>

          {/* Download CV */}
          <a
            href="/assets/Bethelhem-Alemayehu-Ejigu-FlowCV-Resume.pdf"
            download
            className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'var(--gold)', color: '#fff' }}
          >
            ↓ Download CV
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            className="lg:hidden w-9 h-9 grid place-items-center rounded-full border transition-all duration-200"
            style={{ borderColor: 'var(--ds-border)', color: 'var(--ds-text)' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed top-[72px] left-0 right-0 z-40 flex flex-col gap-1 px-6 py-4 border-b lg:hidden glass-header"
          style={{ borderColor: 'var(--ds-border)' }}
        >
          {NAV.map(({ label, href }) => {
            const isActive = active === href
            return (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200"
                style={{
                  background: isActive ? 'var(--gold)' : 'var(--ds-pill)',
                  color:      isActive ? '#fff'        : 'var(--ds-muted)',
                }}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </>
  )
}
