import Header     from '@/components/Header'
import Hero       from '@/components/Hero'
import Skills     from '@/components/Skills'
import About      from '@/components/About'
import Education  from '@/components/Experience'
import Projects   from '@/components/Projects'
import Services   from '@/components/Services'
import CTA        from '@/components/CTA'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
         <About />
          <Projects />
        <Skills /> 
         <Services />
        <Education />
        <CTA />
      </main>    
    </>
  )
}
