'use client'
import { useState } from 'react'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/ShaneseEm',                      abbr: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bethelhem-a-961322316/', abbr: 'in' },
  { label: 'Email',    href: 'mailto:alemayehubethelhem12@gmail.com',              abbr: '@'  },
]

const EMPTY = { name: '', email: '', subject: '', message: '' }
const MAX_MSG = 500

function Field({ label, valid, children }) {
  return (
    <label className="flex flex-col gap-2 group">
      <span
        className="text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-200 group-focus-within:text-[color:var(--gold)]"
        style={{ color: 'var(--cream-muted)' }}
      >
        {label}
      </span>
      <div className="relative">
        {children}
        {valid && (
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 text-xs font-black pointer-events-none">
            ✓
          </span>
        )}
      </div>
    </label>
  )
}

function SuccessState({ onReset }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-6 text-center">
      <div className="w-20 h-20">
        <svg viewBox="0 0 80 80" className="w-full h-full">
          <circle cx="40" cy="40" r="34" fill="none" strokeWidth="2.5"
            stroke="var(--gold)" strokeDasharray="214" strokeDashoffset="214"
            style={{ animation: 'drawCircle 0.7s ease forwards' }} />
          <polyline points="23,40 35,52 57,26" fill="none" strokeWidth="3"
            stroke="var(--gold)" strokeLinecap="round" strokeLinejoin="round"
            strokeDasharray="50" strokeDashoffset="50"
            style={{ animation: 'drawCheck 0.4s ease 0.65s forwards' }} />
        </svg>
      </div>
      <div>
        <h3 className="font-extrabold text-2xl mb-2" style={{ color: 'var(--cream-text)' }}>
          Message Sent!
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--cream-muted)' }}>
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
      </div>
      <button
        onClick={onReset}
        className="px-7 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        style={{ background: 'var(--gold)', color: '#fff' }}
      >
        Send Another →
      </button>
    </div>
  )
}

export default function Contact() {
  const [form, setForm]     = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [touched, setTouch] = useState({})

  const set = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setTouch(prev => ({ ...prev, [field]: true }))
  }

  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const valid = {
    name:    touched.name    && form.name.trim().length > 1,
    email:   touched.email   && isValidEmail(form.email),
    subject: touched.subject && form.subject.trim().length > 2,
    message: touched.message && form.message.trim().length > 9,
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => { setStatus('sent'); setForm(EMPTY); setTouch({}) }, 1400)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-[72px] min-h-screen flex flex-col lg:flex-row transition-colors duration-300"
    >
      {/* ── LEFT — info ── */}
      <div
        className="lg:w-[42%] flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-20 lg:py-24 gap-10"
        style={{ background: 'var(--ds-bg)' }}
      >
        {/* eyebrow */}
        <span className="text-xs font-black uppercase tracking-[0.28em]" style={{ color: 'var(--gold)' }}>
          Get In Touch
        </span>

        {/* heading */}
        <div>
          <h2
            className="font-extrabold leading-[1.1] mb-5"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: 'var(--ds-text)' }}
          >
            Let&apos;s Build<br />
            <span style={{ color: 'var(--gold)' }}>Something<br />Amazing</span>
          </h2>
          <p className="text-base leading-relaxed max-w-[320px]" style={{ color: 'var(--ds-muted)' }}>
            Have a project in mind, want to collaborate, or just say hello? I&apos;d love to hear from you.
          </p>
        </div>

        {/* contact details */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span
              className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-base"
              style={{ background: 'rgba(197,133,42,0.15)', color: 'var(--gold)' }}
            >✉</span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: 'var(--gold)' }}>Email</p>
              <a
                href="mailto:alemayehubethelhem12@gmail.com"
                className="text-sm font-semibold break-all leading-snug transition-opacity hover:opacity-70"
                style={{ color: 'var(--ds-text)' }}
              >
                alemayehubethelhem12@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span
              className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-base"
              style={{ background: 'rgba(197,133,42,0.15)', color: 'var(--gold)' }}
            >📍</span>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest mb-0.5" style={{ color: 'var(--gold)' }}>Location</p>
              <span className="text-sm font-semibold" style={{ color: 'var(--ds-text)' }}>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px" style={{ background: 'var(--ds-border)' }} />

        {/* socials */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: 'var(--gold)' }}>Connect</p>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map(({ label, href, abbr }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="cta-social-pill"
              >
                <span className="text-[11px] font-black" style={{ color: 'var(--gold)' }}>{abbr}</span>
                <span className="text-xs font-bold">{label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* rotating badge */}
        <div className="relative w-[80px] h-[80px] hidden lg:block">
          <svg viewBox="0 0 120 120" className="badge-ring w-full h-full" aria-hidden="true" style={{ color: 'var(--gold)' }}>
            <path id="ctaCircle" d="M60,60 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0" fill="none" />
            <text fontSize="10.5" fill="currentColor" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
              <textPath href="#ctaCircle">let&apos;s talk • let&apos;s talk • let&apos;s talk • </textPath>
            </text>
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg" style={{ color: 'var(--ds-text)' }} aria-hidden="true">✉</span>
        </div>
      </div>

      {/* thin vertical divider (desktop only) */}
      <div className="hidden lg:block w-px" style={{ background: 'var(--ds-border)' }} />

      {/* ── RIGHT — form ── */}
      <div
        className="flex-1 flex flex-col justify-center px-8 sm:px-14 lg:px-16 xl:px-20 py-20 lg:py-24"
        style={{ background: 'var(--cream)' }}
      >
        {status === 'sent' ? (
          <SuccessState onReset={() => setStatus('idle')} />
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-lg">
            <div className="mb-2">
              <h3 className="font-extrabold text-2xl" style={{ color: 'var(--cream-text)' }}>
                Send Me a Message
              </h3>
              <p className="text-sm mt-1.5" style={{ color: 'var(--cream-muted)' }}>
                I typically respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Name" valid={valid.name}>
                <input
                  type="text" required value={form.name} onChange={set('name')}
                  placeholder="Your full name" className="contact-input px-4 h-12"
                  style={valid.name ? { borderColor: '#4ade80' } : {}}
                />
              </Field>
              <Field label="Email" valid={valid.email}>
                <input
                  type="email" required value={form.email} onChange={set('email')}
                  placeholder="your@email.com" className="contact-input px-4 h-12"
                  style={valid.email ? { borderColor: '#4ade80' } : {}}
                />
              </Field>
            </div>

            <Field label="Subject" valid={valid.subject}>
              <input
                type="text" required value={form.subject} onChange={set('subject')}
                placeholder="What's this about?" className="contact-input px-4 h-12"
                style={valid.subject ? { borderColor: '#4ade80' } : {}}
              />
            </Field>

            <label className="flex flex-col gap-2 group">
              <div className="flex items-center justify-between">
                <span
                  className="text-[11px] font-black uppercase tracking-[0.18em] transition-colors duration-200 group-focus-within:text-[color:var(--gold)]"
                  style={{ color: 'var(--cream-muted)' }}
                >
                  Message
                </span>
                <span
                  className="text-[11px] transition-colors duration-200"
                  style={{ color: form.message.length > MAX_MSG * 0.8 ? 'var(--gold)' : 'var(--cream-muted)' }}
                >
                  {form.message.length}/{MAX_MSG}
                </span>
              </div>
              <div className="relative">
                <textarea
                  required rows={7} value={form.message} onChange={set('message')}
                  placeholder="Tell me about your project or idea..."
                  className="contact-input px-4 py-3 resize-none w-full"
                  style={{ minHeight: '170px', ...(valid.message ? { borderColor: '#4ade80' } : {}) }}
                  maxLength={MAX_MSG}
                />
                {valid.message && (
                  <span className="absolute right-4 top-3.5 text-green-400 text-xs font-black pointer-events-none">✓</span>
                )}
              </div>
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="self-start flex items-center gap-2.5 px-9 py-3.5 rounded-full font-bold text-sm
                         transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
              style={{ background: 'var(--gold)', color: '#fff' }}
            >
              {status === 'sending' ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Sending…
                </>
              ) : 'Send Message →'}
            </button>
          </form>
        )}
      </div>

      <style>{`
        @keyframes drawCircle { to { stroke-dashoffset: 0; } }
        @keyframes drawCheck  { to { stroke-dashoffset: 0; } }
        .cta-social-pill {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 7px 14px; border-radius: 999px;
          border: 1.5px solid var(--ds-border);
          color: var(--ds-text);
          transition: border-color 200ms, background 200ms, transform 200ms;
          font-size: 0.75rem;
        }
        .cta-social-pill:hover {
          border-color: var(--gold);
          background: rgba(197,133,42,0.08);
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  )
}
