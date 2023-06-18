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
                  <span className="leading-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
                        Hi! I am Aditya Mishra a
                    </span>
                    <br className="my-1" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5de0e6] to-[#004aad]">
                        Full Stack Developer
                    </span>
                  </span>
                  </h1>
                  <p className="px-0 mb-8 text-xl text-[#fffff0] md:text-xl lg:px-24">
                      Let me help you build what you need, utilizing my extensive technical expertise and passion for problem-solving to create innovative, reliable, and efficient digital solutions tailored to your unique requirements.
                  </p>
                  <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                      <Link to="/contact" className="inline-flex font-bold items-center justify-center w-full px-8 py-4 mb-2 text-lg text-white bg-gray-900 rounded-2xl sm:w-auto sm:mb-0 hover:bg-[#46c1fe] hover:text-[#141414] focus:ring focus:ring-[#46c1fe] focus:ring-opacity-80 transition">
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
