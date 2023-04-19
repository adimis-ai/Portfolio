import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'
import '../components/Styles/style.css'

function Home() {

  return (
    <div className='color'>
      <Header />
        <section className="mt-0.5">
          <ContactUs/>
          <div className="parallax3">
          </div>
        </section>
      <Footer />
    </div>
  )
}

export default Home
