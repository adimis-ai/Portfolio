import React from 'react'
import "./Styles/style.css"
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div>
      <section className="pt-24">
          <div className="px-5 mx-auto max-w-7xl">
              <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                  <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-100 md:text-6xl md:tracking-tight">
                      <span className="text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-800 to-black">Hi! I am Aditya Mishra a<br/>Fullstack developer</span>
                  </h1>
                  <p className="px-0 mb-8 text-xl text-gray-900 md:text-xl lg:px-24">
                      Let me help you build what you need, utilizing my extensive technical expertise and passion for problem-solving to create innovative, reliable, and efficient digital solutions tailored to your unique requirements.
                  </p>
                  <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                      <Link to="/contact" className="inline-flex font-bold items-center justify-center w-full px-8 py-4 mb-2 text-lg text-white bg-gray-900 rounded-2xl sm:w-auto sm:mb-0 hover:bg-teal-900 focus:ring focus:ring-teal-900 focus:ring-opacity-80 transition">
                          Let's Connect
                      </Link>
                  </div>
              </div>
          </div>
          <section className="mt-20">
              <div className="parallax">
              </div>
          </section>
      </section>
    </div>
  )
}

export default Hero
