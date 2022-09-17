import React from 'react'
import {close, logo, menu} from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <nav className='py-6 justify-between flex items-center w-full navbar'>
      <img src={logo} alt='hoobank' className='w-[124px] h-[32px]' />

      <ul className='list-none sm:flex flex-1 hidden justify-end items-center'>
        {}
      </ul>
    </nav>
  )
}

export default Navbar