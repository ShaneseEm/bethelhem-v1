const SERVICES = [
  {
    num: '01',
    icon: '⚙️',
    title: 'Backend Development',
    desc: 'Scalable APIs, server-side logic, and database architecture for rock-solid web applications.',
    features: ['RESTful APIs', 'Database design'],
  },
  {
    num: '02',
    icon: '🤖',
    title: 'Machine Learning',
    desc: 'AI-powered models for prediction, classification, and real-world decision-making.',
    features: ['Model training', 'AI integration'],
  },
  {
    num: '03',
    icon: '🌐',
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications from pixel-perfect frontends to fully deployed backends.',
    features: ['MERN stack', 'Full deployment'],
  },
  {
    num: '04',
    icon: '🎨',
    title: 'Frontend Development',
    desc: 'Clean, responsive, and accessible interfaces using the latest web standards.',
    features: ['React & Next.js', 'Responsive design'],
  },
  {
    num: '05',
    icon: '✏️',
    title: 'UI Design',
    desc: 'Intuitive, visually compelling interfaces designed for real users and real impact.',
    features: ['Figma', 'Design systems'],
  },
  {
    num: '06',
    icon: '📱',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile experiences that feel native and work seamlessly on any device.',
    features: ['React Native', 'Cross-platform'],
  },
]

function ServiceCard({ service }) {
  return (
    <article className="service-card group relative flex flex-col gap-4 p-7 rounded-2xl border overflow-hidden cursor-pointer"
      style={{ background: 'var(--cream)', borderColor: 'var(--cream-border)' }}
    >
      {/* gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl"
        style={{ background: 'var(--gold)' }}
      />

      {/* icon */}
      <span className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ background: 'rgba(197,133,42,0.1)' }}
      >
        {service.icon}
      </span>

      {/* title */}
      <h3 className="font-extrabold text-[1.15rem] leading-snug transition-colors duration-300 group-hover:text-[color:var(--gold)]"
        style={{ color: 'var(--cream-text)' }}
      >
        {service.title}
      </h3>

      {/* description */}
      <p className="text-[0.9rem] leading-relaxed flex-1" style={{ color: 'var(--cream-muted)' }}>
        {service.desc}
      </p>

      {/* feature pills */}
      <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: '1px solid var(--cream-border)' }}>
        {service.features.map((f) => (
          <span key={f}
            className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold)]"
            style={{ borderColor: 'var(--cream-border)', color: 'var(--cream-muted)' }}
          >
            {f}
          </span>
        ))}
      </div>
    </article>
  )
}

export default function Services() {
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col justify-start scroll-mt-[72px] pt-8 pb-20 transition-colors duration-300 overflow-hidden relative"
      style={{ background: 'var(--ds-bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-6 w-full relative z-10">

        {/* header */}
        <div className="mb-12">
          <span className="block text-xs font-black uppercase tracking-[0.25em] mb-3" style={{ color: 'var(--gold)' }}>
            What I Offer
          </span>
          <h2
            className="font-extrabold leading-[1.0]"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', color: 'var(--ds-text)' }}
          >
            My Services
          </h2>
          <p className="mt-3 text-base max-w-md" style={{ color: 'var(--ds-muted)' }}>
            Clean, scalable, and responsive solutions — from idea to deployment.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  )
}
