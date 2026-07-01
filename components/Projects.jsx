import Image from 'next/image'

const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

const PROJECTS = [
  {
    img: '/assets/AgukaMed.png',
    accent: '#e8c896',
    title: 'Aguka-Med',
    desc: 'AI-powered platform that helps people verify if medicines are real and safe, providing guidance in Kinyarwanda.',
    tags: ['AI', 'Python', 'Flask'],
    live: 'https://claude-hack-1.onrender.com/',
    code: 'https://github.com/ShaneseEm/Claude-hack',
  },
  {
    img: '/assets/Tetris.png',
    accent: '#c8daf0',
    title: 'Tetris JS',
    desc: 'A polished web-based Tetris game with glassmorphism UI, responsive layout, and smooth animations.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://tetris-js-eight.vercel.app/',
    code: 'https://github.com/bethelhem-dev/tetris-js',
  },
  {
    img: '/assets/Fake.png',
    accent: '#d4c8f0',
    title: 'FaceAuth AI',
    desc: 'Face authentication using live webcam registration, ArcFace embeddings, and cosine similarity verification.',
    tags: ['Python', 'ML', 'React'],
    live: 'https://gdg-ml-group-7-w8pz.vercel.app/',
    code: 'https://github.com/ShaneseEm/GDG_ML_Group-7',
  },
  {
    img: '/assets/Bens.png',
    accent: '#f0dab4',
    title: 'Bens',
    desc: 'A deployed web project with a clean interface and production hosting on Vercel.',
    tags: ['JavaScript', 'Node.js'],
    live: 'https://bens-ochre.vercel.app/',
    code: 'https://github.com/ShaneseEm/Bens',
  },
  {
    img: '/assets/GradingS.png',
    accent: '#c8e8b4',
    title: 'Grading System',
    desc: 'Deployed grading platform for managing academic assessment workflows end-to-end.',
    tags: ['Node.js', 'MongoDB'],
    live: 'https://grading-system-1-005i.onrender.com/',
    code: 'https://github.com/ShaneseEm/grading-system',
  },
  {
    img: null,
    accent: '#c8daf0',
    title: 'MERN Chat App',
    desc: 'Full-stack real-time chat application built with the MERN stack and socket-based messaging.',
    tags: ['React', 'Node.js', 'MongoDB'],
    live: null,
    code: 'https://github.com/ShaneseEm/MERN-ChatAPP',
  },
]

const TAG_ICONS = {
  'Python':     `${CDN}python/python-original.svg`,
  'JavaScript': `${CDN}javascript/javascript-original.svg`,
  'React':      `${CDN}react/react-original.svg`,
  'Node.js':    `${CDN}nodejs/nodejs-original.svg`,
  'MongoDB':    `${CDN}mongodb/mongodb-original.svg`,
  'HTML':       `${CDN}html5/html5-original.svg`,
  'CSS':        `${CDN}css3/css3-original.svg`,
}

function ProjectCard({ project }) {
  return (
    <article
      className="project-card flex flex-col rounded-2xl overflow-hidden
                 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: 'var(--cream)',
        border: '1px solid var(--cream-border)',
      }}
    >
      {/* image */}
      {project.live ? (
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="relative h-52 overflow-hidden block"
          style={{ background: project.accent }}
        >
          {project.img ? (
            <Image src={project.img} alt={project.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-extrabold text-lg opacity-30" style={{ color: 'var(--cream-text)' }}>
                {project.title}
              </span>
            </div>
          )}
          <span className="live-btn">Live<br />Project</span>
        </a>
      ) : (
        <div className="relative h-52 overflow-hidden" style={{ background: project.accent }}>
          {project.img ? (
            <Image src={project.img} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-extrabold text-lg opacity-30" style={{ color: 'var(--cream-text)' }}>
                {project.title}
              </span>
            </div>
          )}
        </div>
      )}

      {/* content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border"
              style={{ borderColor: 'var(--cream-border)', color: 'var(--cream-muted)' }}
            >
              {TAG_ICONS[tag] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={TAG_ICONS[tag]} alt="" width={12} height={12} loading="lazy" />
              )}
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-extrabold text-lg leading-tight" style={{ color: 'var(--cream-text)' }}>
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--cream-muted)' }}>
          {project.desc}
        </p>

        {/* action buttons */}
        <div className="flex gap-3 mt-1 pt-4" style={{ borderTop: '1px solid var(--cream-border)' }}>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-opacity hover:opacity-80"
              style={{ background: 'var(--gold)', color: '#fff' }}
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={project.code}
            target="_blank"
            rel="noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold border transition-colors hover:opacity-80"
            style={{
              borderColor: 'var(--cream-border)',
              color: 'var(--cream-text)',
              background: 'transparent',
            }}
          >
            View Code →
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section-cream py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
      {/* header */}
      <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
        <div>
          <span
            className="block text-xs font-black uppercase tracking-widest mb-2"
            style={{ color: 'var(--gold)' }}
          >
            Featured Work
          </span>
          <h2
            className="font-extrabold text-[clamp(1.8rem,3.5vw,2.6rem)]"
            style={{ color: 'var(--cream-text)' }}
          >
            My Latest Works
          </h2>
        </div>
        <a
          href="https://github.com/ShaneseEm"
          target="_blank"
          rel="noreferrer"
          className="text-sm font-bold border-b pb-px transition-opacity hover:opacity-60"
          style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}
        >
          View All on GitHub ↗
        </a>
      </div>

      {/* 3-column grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      </div>
    </section>
  )
}
