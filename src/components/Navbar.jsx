import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const buttonOnStyle = "rounded-lg bg-stone-700 text-white hover:bg-stone-500 px-3 py-2"
  const buttonOffStyle = "rounded-lg hover:bg-stone-500 hover:text-white px-3 py-2"

  const linkClass = ({ isActive }) =>
    isActive 
      ? buttonOnStyle
      : buttonOffStyle

  return (
    <nav>
        <div className="flex flex-row items-center justify-end h-16 md:h-20 mx-5 md:mx-7 space-x-3">
          <div className="absolute left-5 md:left-7 font-semibold md:text-lg">
            AN VU
          </div>
          <NavLink to="/" className="rounded-lg hover:bg-stone-500 hover:text-white px-3 py-2">
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </div>
      </nav>
  )
}

export default Navbar