import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Testimonial from '../components/Testimonial'
import CTA from '../components/CTA'
import Contact from '../components/ContactUs'
import Footer from '../components/Footer'
import Projects from '../components/Projects'

function Home() {

  return (
    <div className='color'>
      <Header />
      <Hero />
      <Services />
      <div className="divider mx-48"></div> 
      <WorkExperience />
      <div className="divider mx-48"></div> 
      <Skills />
      <div className="divider mx-48"></div> 
      <Projects/>
      <div className="divider mx-48 mb-14"></div> 
      <CTA />
      <Testimonial />
      <div className="divider mx-48 mb-14"></div> 
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
