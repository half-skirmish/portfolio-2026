import Hero from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import WorkExperience from '@/components/WorkExperience'
import About from '@/components/About'

function LandingPage() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <WorkExperience/>
      <Projects/>
    </div>
  )
}

export default LandingPage
