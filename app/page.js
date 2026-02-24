import Hero from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import WorkExperience from '@/components/WorkExperience'
import About from '@/components/About'
import Footer from '@/components/Footer'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <section id="hero">
        <Hero/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="work">
        <WorkExperience/>
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <Footer/>
    </div>
  )
}

export default LandingPage