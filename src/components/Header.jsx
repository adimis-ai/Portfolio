import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
  <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost normal-case text-2xl text-transparent bg-clip-text leading-12 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-black via-teal-700 to-black">ADIMIS</Link>
  </div>
  <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to="/contact" className='inline-flex font-medium items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-gray-900 rounded-2xl sm:w-auto sm:mb-0 hover:bg-teal-900 focus:ring focus:ring-teal-900 focus:ring-opacity-80 transition'>Say Hi!</Link></li>
      </ul>
    </div>
  </div>
  )
}

export default Header
