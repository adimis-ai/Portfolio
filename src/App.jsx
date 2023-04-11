import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Testimonial from './components/Testimonial'
import Milestones from './components/Milestones'
import CTA from './components/CTA'
import Contact from './components/ContactUs'
import Footer from './components/Footer'

function App() {

  return (
    <div className='color'>
      <Header />
      <Hero />
      <Services />
      <div class="divider mx-48"></div> 
      <WorkExperience />
      <div class="divider mx-48"></div> 
      <Skills />
      <div class="divider mx-48 mb-14"></div> 
      <Milestones/>
      <CTA />
      <Testimonial />
      <div class="divider mx-48 mb-14"></div> 
      <Contact />
      <Footer />
    </div>
  )
}

export default App
