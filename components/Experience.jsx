const EDUCATIONS = [
  {
    school: 'African Leadership University',
    short: 'ALU',
    degree: 'B.Sc. Software Engineering',
    period: '2023 – Present',
    location: 'Kigali, Rwanda',
    desc: 'Building strong foundations in algorithms, systems design, web development, machine learning, and practical problem-solving through project-based learning.',
    highlights: ['Software Engineering', 'Machine Learning', 'Systems Design', 'Web Development'],
  },
  {
    school: 'Unity University',
    short: 'UU',
    degree: 'BA Management',
    period: 'Ongoing',
    location: 'Addis Ababa, Ethiopia',
    desc: 'Coursework in Principles of Management, Organizational Behavior, Business Communication, Financial Accounting, Marketing Management, and Entrepreneurship.',
    highlights: ['Management', 'Entrepreneurship', 'Business Strategy', 'Financial Accounting'],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="pt-[72px] pb-[88px] lg:pt-[104px] lg:pb-[120px] transition-colors duration-300"
      style={{ background: 'var(--ds-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* header */}
        <div className="mb-14">
          <span className="block text-xs font-black uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--gold)' }}>
            Academic Background
          </span>
          <h2
            className="font-extrabold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--ds-text)' }}
          >
            My Education
          </h2>
        </div>

        {/* two education cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EDUCATIONS.map((edu, i) => (
            <div
              key={edu.school}
              className="education-card flex flex-col gap-6 p-8 rounded-2xl border"
              style={{ background: 'var(--cream)', borderColor: 'var(--cream-border)', animationDelay: `${i * 0.15}s` }}
            >
              {/* top row: logo badge + ongoing pill */}
              <div className="flex items-center justify-between">
                <div
                  className="edu-badge w-14 h-14 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: 'var(--ds-text)', color: 'var(--ds-bg)' }}
                >
                  {edu.short}
                </div>

                {/* ongoing badge */}
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold border"
                  style={{ borderColor: 'var(--gold)', color: 'var(--gold)', background: 'rgba(197,133,42,0.08)' }}
                >
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--gold)' }} />
                  Ongoing
                </span>
              </div>

              {/* degree + school */}
              <div className="flex flex-col gap-1">
                <h3 className="font-extrabold text-2xl leading-snug" style={{ color: 'var(--cream-text)' }}>
                  {edu.degree}
                </h3>
                <p className="font-semibold text-base" style={{ color: 'var(--gold)' }}>
                  {edu.school}
                </p>
              </div>

              {/* period + location */}
              <div className="flex items-center gap-4 text-sm font-semibold" style={{ color: 'var(--cream-muted)' }}>
                <span>📍 {edu.location}</span>
              </div>

              {/* description */}
              <p className="text-base leading-relaxed" style={{ color: 'var(--cream-muted)' }}>
                {edu.desc}
              </p>

              {/* highlights */}
              <div className="flex flex-wrap gap-2 pt-4" style={{ borderTop: '1px solid var(--cream-border)' }}>
                {edu.highlights.map((h) => (
                  <span
                    key={h}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold border"
                    style={{ borderColor: 'var(--cream-border)', color: 'var(--cream-muted)' }}
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
