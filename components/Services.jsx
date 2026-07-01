const SERVICES = [
  {
    num: '01',
    icon: 'api',
    title: 'Backend Development',
    desc: 'Scalable APIs, server-side logic, and database architecture for rock-solid web applications.',
    features: ['RESTful APIs', 'Database design'],
  },
  {
    num: '02',
    icon: 'psychology',
    title: 'Machine Learning',
    desc: 'AI-powered models for prediction, classification, and real-world decision-making.',
    features: ['Model training', 'AI integration'],
  },
  {
    num: '03',
    icon: 'hub',
    title: 'Full-Stack Development',
    desc: 'End-to-end web applications from pixel-perfect frontends to fully deployed backends.',
    features: ['MERN stack', 'Full deployment'],
  },
  {
    num: '04',
    icon: 'phone_iphone',
    title: 'Frontend Development',
    desc: 'Clean, responsive, and accessible interfaces using the latest web standards.',
    features: ['React & Next.js', 'Responsive design'],
  },
  {
    num: '05',
    icon: 'design_services',
    title: 'UI Design',
    desc: 'Intuitive, visually compelling interfaces designed for real users and real impact.',
    features: ['Figma', 'Design systems'],
  },
  {
    num: '06',
    icon: 'phone_iphone',
    title: 'Mobile Development',
    desc: 'Cross-platform mobile experiences that feel native and work seamlessly on any device.',
    features: ['React Native', 'Cross-platform'],
  },
]

function ServiceCard({ service }) {
  return (
    <article className="service-card group relative flex flex-col gap-5 p-9 rounded-2xl border overflow-hidden cursor-pointer"
      style={{ background: 'var(--cream)', borderColor: 'var(--cream-border)' }}
    >
      {/* gold top bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 rounded-t-2xl"
        style={{ background: 'var(--gold)' }}
      />

      {/* number + icon row */}
      <div className="flex items-center justify-between">
        <span
          className="w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
          style={{ background: 'rgba(197,133,42,0.12)' }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.75rem', color: 'var(--gold)' }}>
            {service.icon}
          </span>
        </span>
        <span className="font-black text-[2.2rem] leading-none" style={{ color: 'rgba(197,133,42,0.18)', fontFamily: '"Cormorant Garamond", Georgia, serif' }}>
          {service.num}
        </span>
      </div>

      {/* title */}
      <h3 className="font-extrabold text-[1.3rem] leading-snug transition-colors duration-300 group-hover:text-[color:var(--gold)]"
        style={{ color: 'var(--cream-text)' }}
      >
        {service.title}
      </h3>

      {/* description */}
      <p className="text-[1rem] leading-relaxed flex-1" style={{ color: 'var(--cream-muted)' }}>
        {service.desc}
      </p>

      {/* feature pills */}
      <div className="flex flex-wrap gap-2 pt-3" style={{ borderTop: '1px solid var(--cream-border)' }}>
        {service.features.map((f) => (
          <span key={f}
            className="px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 group-hover:border-[color:var(--gold)] group-hover:text-[color:var(--gold)]"
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
      <div className="max-w-[92rem] mx-auto px-4 lg:px-6 w-full relative z-10">

        {/* header */}
        <div className="mb-14">
          <span className="block text-xs font-black uppercase tracking-[0.25em] mb-4" style={{ color: 'var(--gold)' }}>
            What I Offer
          </span>
          <h2
            className="font-extrabold leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.2rem)', color: 'var(--ds-text)' }}
          >
            My Services
          </h2>
          <p className="mt-4 text-lg max-w-lg" style={{ color: 'var(--ds-muted)' }}>
            Clean, scalable, and responsive solutions — from idea to deployment.
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((s) => (
            <ServiceCard key={s.title} service={s} />
          ))}
        </div>

      </div>
    </section>
  )
}
