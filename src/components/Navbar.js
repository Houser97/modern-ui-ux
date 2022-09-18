import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='py-6 justify-between flex items-center w-full navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex flex-1 hidden justify-end items-center'>
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-white text-[16px]
          ${index !== navLinks.length - 1 ? 'mr-10' : 'mr-0'}`}>
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img src={toggle ? close : menu}
          alt = 'menu'
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}></img>
      </div>
    </nav>
  )
}

export default Navbar