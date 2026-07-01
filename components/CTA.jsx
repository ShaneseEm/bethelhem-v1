'use client'
import { useState } from 'react'

const SOCIALS = [
  { label: 'GitHub',   href: 'https://github.com/ShaneseEm' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bethelhem-a-961322316/' },
  { label: 'Email',    href: 'mailto:alemayehubethelhem12@gmail.com' },
]

const EMPTY = { name: '', email: '', subject: '', message: '' }
const MAX_MSG = 500

export default function Contact() {
  const [form, setForm]     = useState(EMPTY)
  const [status, setStatus] = useState('idle')
  const [touched, setTouch] = useState({})

  const set = f => e => {
    setForm(p => ({ ...p, [f]: e.target.value }))
    setTouch(p => ({ ...p, [f]: true }))
  }

  const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  const valid = {
    name:    touched.name    && form.name.trim().length > 1,
    email:   touched.email   && isEmail(form.email),
    subject: touched.subject && form.subject.trim().length > 2,
    message: touched.message && form.message.trim().length > 9,
  }

  const canSubmit = Object.values(valid).every(Boolean)

  const handleSubmit = e => {
    e.preventDefault()
    if (!canSubmit) return
    setStatus('sending')
    setTimeout(() => { setStatus('sent'); setForm(EMPTY); setTouch({}) }, 1400)
  }

  return (
    <section id="contact" className="cz-root">
      {/* top accent */}
      <div className="cz-top-line" />

      <div className="cz-inner">

        {/* ── LEFT ── */}
        <div className="cz-left">
          <div className="cz-avail">
            <span className="cz-dot" />
            Open to opportunities
          </div>

          <div className="cz-headline">
            <p className="cz-eyebrow">Let's Connect</p>
            <h2 className="cz-h2">
              Have an idea?<br />
              <em>Let&apos;s talk.</em>
            </h2>
            <p className="cz-sub">
              Whether it&apos;s a project or a collaboration — my inbox is always open.
            </p>
          </div>

          <div className="cz-details">
            <a href="mailto:alemayehubethelhem12@gmail.com" className="cz-detail-link">
              <svg className="cz-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3"/>
                <path d="m2 7 10 7 10-7"/>
              </svg>
              <span>alemayehubethelhem12@gmail.com</span>
            </a>
            <a href="https://maps.google.com/?q=Addis+Ababa,+Ethiopia" target="_blank" rel="noreferrer" className="cz-detail-link">
              <svg className="cz-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              <span>Addis Ababa, Ethiopia</span>
            </a>
          </div>

          <div className="cz-socials">
            {SOCIALS.map(({ label, href }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="cz-social"
              >
                {label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.6 }}>
                  <path d="M7 17 17 7M7 7h10v10"/>
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="cz-right">
          {status === 'sent' ? (
            <div className="cz-sent">
              <div className="cz-sent-icon">
                <svg viewBox="0 0 80 80" width="44" height="44">
                  <circle cx="40" cy="40" r="30" fill="none" strokeWidth="2.5" stroke="#c5852a"
                    strokeDasharray="188" strokeDashoffset="188"
                    style={{ animation: 'czCircle .7s ease forwards' }} />
                  <polyline points="24,40 35,52 56,27" fill="none" strokeWidth="3" stroke="#c5852a"
                    strokeLinecap="round" strokeLinejoin="round"
                    strokeDasharray="50" strokeDashoffset="50"
                    style={{ animation: 'czCheck .4s ease .65s forwards' }} />
                </svg>
              </div>
              <h3 className="cz-sent-title">Message Sent!</h3>
              <p className="cz-sent-sub">I&apos;ll get back to you soon.</p>
              <button onClick={() => setStatus('idle')} className="cz-btn" style={{ marginTop: 8 }}>
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cz-form">
              <div className="cz-form-header">
                <h3 className="cz-form-title">Send a message</h3>
              </div>

              <div className="cz-grid">
                <div className="cz-field">
                  <label className="cz-label">Name</label>
                  <input type="text" required value={form.name} onChange={set('name')}
                    placeholder="Your full name"
                    className={`cz-input${valid.name ? ' cz-valid' : ''}`} />
                </div>
                <div className="cz-field">
                  <label className="cz-label">Email</label>
                  <input type="email" required value={form.email} onChange={set('email')}
                    placeholder="your@email.com"
                    className={`cz-input${valid.email ? ' cz-valid' : ''}`} />
                </div>
              </div>

              <div className="cz-field">
                <label className="cz-label">Subject</label>
                <input type="text" required value={form.subject} onChange={set('subject')}
                  placeholder="What's this about?"
                  className={`cz-input${valid.subject ? ' cz-valid' : ''}`} />
              </div>

              <div className="cz-field">
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <label className="cz-label">Message</label>
                  <span className="cz-counter"
                    style={{ color: form.message.length > MAX_MSG * 0.8 ? 'var(--gold)' : undefined }}>
                    {form.message.length}/{MAX_MSG}
                  </span>
                </div>
                <textarea required rows={5} value={form.message} onChange={set('message')}
                  placeholder="Tell me about your project…"
                  className={`cz-input${valid.message ? ' cz-valid' : ''}`}
                  style={{ minHeight: 138, resize: 'none', paddingTop: 15 }}
                  maxLength={MAX_MSG} />
              </div>

              <button type="submit" disabled={status === 'sending'} className="cz-btn"
                style={{ opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending'
                  ? <><span className="cz-spinner" /> Sending…</>
                  : 'Send Message →'}
              </button>
            </form>
          )}
        </div>
      </div>

    </section>
  )
}