const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

const SKILLS = [
  { name: 'JavaScript',   icon: 'javascript/javascript-original.svg' },
  { name: 'Next.js',      icon: 'nextjs/nextjs-original.svg'         },
  { name: 'Figma',        icon: 'figma/figma-original.svg'           },
  { name: 'Node.js',      icon: 'nodejs/nodejs-original.svg'         },
  { name: 'React',        icon: 'react/react-original.svg'           },
  { name: 'Python',       icon: 'python/python-original.svg'         },
  { name: 'TensorFlow',   icon: 'tensorflow/tensorflow-original.svg' },
  { name: 'MongoDB',      icon: 'mongodb/mongodb-original.svg'       },
  { name: 'PostgreSQL',   icon: 'postgresql/postgresql-original.svg' },
  { name: 'Git',          icon: 'git/git-original.svg'               },
  { name: 'C++',          icon: 'cplusplus/cplusplus-original.svg'   },
  { name: 'Java',         icon: 'java/java-original.svg'             },
  { name: 'Tailwind CSS', icon: 'tailwindcss/tailwindcss-original.svg'  },
  { name: 'VS Code',      icon: 'vscode/vscode-original.svg'         },
]

function SkillCard({ name, icon, emoji }) {
  return (
    <div
      className="skill-card flex flex-col items-center justify-center gap-3
                 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
      style={{
        aspectRatio: '1 / 1',
        padding: '20px 12px',
        background: 'var(--ds-pill)',
        border: '1px solid var(--ds-border)',
      }}
    >
      {icon ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`${CDN}${icon}`} alt={name} width={48} height={48} loading="lazy"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
      ) : (
        <span className="text-3xl sm:text-4xl leading-none">{emoji}</span>
      )}
      <span
        className="text-[10px] sm:text-[11px] font-bold text-center leading-tight"
        style={{ color: 'var(--ds-text)' }}
      >
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-dark py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* ── Centered header ── */}
        <div className="flex flex-col items-center text-center gap-3 mb-14">
          <span
            className="text-[11px] font-black uppercase tracking-[0.22em] flex items-center gap-2"
            style={{ color: 'var(--gold)' }}
          >
            ✦ Technical Expertise ✦
          </span>
          <h2
            className="italic leading-none"
            style={{
              fontFamily: 'var(--font-cormorant, Georgia, serif)',
              fontSize: 'clamp(3rem, 6vw, 4.5rem)',
              fontWeight: 700,
              color: 'var(--gold)',
            }}
          >
            Skills
          </h2>
          <div className="w-14 h-[2px] rounded-full" style={{ background: 'var(--gold)', opacity: 0.6 }} />
          <p className="text-sm mt-1" style={{ color: 'var(--ds-muted)' }}>
            Technologies I work with regularly
          </p>
        </div>

        {/* ── Icon grid ── */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4">
          {SKILLS.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>

        {/* ── Footer tagline + divider ── */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <p className="text-sm font-bold" style={{ color: 'var(--ds-text)' }}>
            Always exploring new technologies
          </p>
          <div className="flex items-center gap-3" aria-hidden="true">
            <div className="w-20 h-px" style={{ background: 'var(--ds-border)' }} />
            <span className="text-sm font-mono" style={{ color: 'var(--ds-muted)' }}>{'⟨ ⟩'}</span>
            <div className="w-20 h-px" style={{ background: 'var(--ds-border)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
