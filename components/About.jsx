function RotatingBadge() {
  return (
    <div className="relative w-[200px] h-[200px] shrink-0">
      <svg
        viewBox="0 0 120 120"
        className="badge-ring w-full h-full"
        aria-hidden="true"
        style={{ color: 'var(--gold)' }}
      >
        <path
          id="aboutCircle"
          d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"
          fill="none"
        />
        <text fontSize="10.5" fill="currentColor" fontFamily="var(--font-jakarta), sans-serif" fontWeight="700" letterSpacing="2">
          <textPath href="#aboutCircle">Hire Me • Hire Me • Hire Me • </textPath>
        </text>
      </svg>
      <a
        href="mailto:alemayehubethelhem12@gmail.com"
        aria-label="Send email"
        className="absolute inset-0 grid place-items-center transition-opacity hover:opacity-70"
        style={{ color: 'var(--ds-text)' }}
      >
        <span style={{ fontSize: '2.4rem' }}>✉</span>
      </a>
    </div>
  )
}

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-start scroll-mt-[72px] pt-[1.1rem] pb-[32px] transition-colors duration-300"
      style={{ background: 'var(--ds-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* section header */}
        <div className="flex flex-col items-center mb-16">
          {/* icon row */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-11 h-11 rounded-full grid place-items-center border-2"
              style={{ background: 'rgba(197,133,42,0.12)', borderColor: 'rgba(197,133,42,0.35)' }}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>menu_book</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-px" style={{ background: 'var(--ds-border)' }} />
              <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>✦</span>
              <div className="w-10 h-px" style={{ background: 'var(--ds-border)' }} />
            </div>
            <div
              className="w-11 h-11 rounded-full grid place-items-center border-2"
              style={{ background: 'rgba(197,133,42,0.12)', borderColor: 'rgba(197,133,42,0.35)' }}
            >
              <span className="material-symbols-outlined" style={{ color: 'var(--gold)', fontSize: '1rem' }}>menu_book</span>
            </div>
          </div>

          {/* heading */}
          <h2
            className="font-bold"
            style={{
              fontFamily: 'var(--font-cormorant, Georgia, serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
              color: 'var(--ds-text)',
              letterSpacing: '0.01em',
            }}
          >
            About Me
          </h2>

          {/* underline accent */}
          <div
            className="mt-3 rounded-full"
            style={{ width: '56px', height: '3px', background: 'var(--gold)', opacity: 0.7 }}
          />
        </div>

        {/* main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-start">

          {/* ── Left: text ── */}
          <div className="flex flex-col gap-10">

            <h2
              className="font-bold leading-[1.1]"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--ds-muted)' }}
            >
              Passionate about building the future{' '}
              <span style={{ color: 'var(--gold)' }}>with code.</span>
            </h2>

            <p className="leading-[1.9]" style={{ fontSize: '1.15rem', color: 'var(--ds-text)' }}>
              I&apos;m a Software Engineering student at ALU and a Management student at Unity University,
              with a strong passion for machine learning, backend development, and practical problem-solving.
              I explore AI and LLMs through hands-on projects while building full-stack web apps.
              I care deeply about empowering women through tech and inspiring more girls to see
              technology as a space where they belong.
            </p>

            {/* trait pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: 'handshake',      text: 'Team Work'       },
                { icon: 'auto_stories',   text: 'Active Learning'  },
                { icon: 'tips_and_updates', text: 'Problem Solver' },
              ].map(({ icon, text }) => (
                <span
                  key={text}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border"
                  style={{
                    borderColor: 'var(--ds-border)',
                    color: 'var(--ds-text)',
                    background: 'rgba(255,255,255,0.06)',
                  }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '1.1rem', color: 'var(--gold)' }}>{icon}</span>
                  {text}
                </span>
              ))}
            </div>

          </div>

          {/* ── Right: badge + quote ── */}
          <div className="flex flex-col items-center gap-10 lg:-mt-[0.7rem]">

            <RotatingBadge />

            {/* quote card */}
            <div
              className="w-full p-7 rounded-3xl border relative overflow-hidden"
              style={{ borderColor: 'var(--ds-border)', background: 'rgba(255,244,230,0.04)' }}
            >
              <span
                className="block font-black leading-none mb-4 select-none"
                style={{ fontSize: '4rem', color: 'var(--gold)', lineHeight: 0.8 }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="leading-relaxed font-medium" style={{ fontSize: '1rem', color: 'var(--ds-text)' }}>
                Technology is not just a tool — it&apos;s a language that changes the world.
              </p>
              <div
                className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-3xl"
                style={{ background: 'rgba(197,133,42,0.08)' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
