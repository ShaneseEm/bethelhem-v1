import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-[72px] flex items-center transition-colors duration-300"
      style={{ background: 'var(--ds-bg)' }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 lg:px-6 py-16
                      grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14 items-center">

        {/* ── Left: copy ── */}
        <div className="flex flex-col gap-6">

          {/* available status */}
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full shrink-0" style={{ background: '#4ade80' }} />
            <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: 'var(--ds-muted)' }}>
              Available for Work
            </span>
            <div className="h-px w-12" style={{ background: 'var(--ds-border)' }} />
          </div>

          {/* greeting + name */}
          <div className="flex flex-col gap-1">
            <p className="text-sm font-black uppercase tracking-[0.2em]" style={{ color: 'var(--gold)' }}>
              Hello, I&apos;m
            </p>
            <h1
              className="font-extrabold leading-[1.0]"
              style={{ fontSize: 'clamp(3.4rem, 7.5vw, 6rem)', color: 'var(--ds-text)' }}
            >
              Bethelhem<br />Alemayehu
            </h1>
          </div>

          {/* bio */}
          <p className="leading-relaxed max-w-[440px]"
            style={{ fontSize: '1.08rem', color: 'var(--ds-muted)' }}>
            Software Engineering & Management student building impactful,
            real-world products.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="/assets/Bethelhem-Alemayehu-Ejigu-FlowCV-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'var(--gold)', color: '#fff' }}
            >
              Download CV ↓
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm border
                         transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: 'var(--ds-border)', color: 'var(--ds-text)' }}
            >
              Contact Me →
            </a>
          </div>

          {/* social links */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[11px] font-black uppercase tracking-widest" style={{ color: 'var(--ds-muted)' }}>
              Follow
            </span>
            <div className="w-6 h-px" style={{ background: 'var(--ds-border)' }} />
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bethelhem-a-961322316/' },
              { label: 'GitHub',   href: 'https://github.com/ShaneseEm' },
              { label: '✉ Email', href: 'mailto:alemayehubethelhem12@gmail.com' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="hero-social-link text-sm font-bold px-4 py-2 rounded-full"
              >
                {label}
              </a>
            ))}
          </div>

        </div>

        {/* ── Right: photo ── */}
        <div className="flex justify-center lg:justify-end">
          <div className="group relative w-[260px] sm:w-[320px]">

            {/* amber offset block */}
            <div
              className="absolute -top-5 -left-5 right-5 bottom-5 rounded-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"
              style={{ background: 'var(--photo-bg)' }}
            />

            <Image
              src="/assets/photo_2026-02-26_18-46-47.jpg"
              alt="Bethelhem Alemayehu"
              width={320}
              height={440}
              priority
              className="relative z-10 w-full h-[420px] sm:h-[460px] object-cover object-top rounded-3xl
                         transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl"
            />

            {/* experience badge */}
            <div
              className="absolute -right-10 bottom-16 z-20 rounded-2xl shadow-xl px-5 py-4"
              style={{ background: 'var(--ds-bg)', border: '1px solid var(--ds-border)' }}
            >
              <span className="block font-black text-3xl leading-none" style={{ color: 'var(--gold)' }}>
                3+
              </span>
              <span className="block font-semibold text-xs leading-snug mt-1" style={{ color: 'var(--ds-muted)' }}>
                Years<br />Experience
              </span>
            </div>

            {/* gold dot accent */}
            <div
              className="absolute -top-2 -right-2 z-20 w-5 h-5 rounded-full shadow-md"
              style={{ background: 'var(--gold)' }}
            />

          </div>
        </div>

      </div>
    </section>
  )
}
