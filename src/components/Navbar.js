import React, { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index';

function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  // Setting the state of the nav menu for toggling
  function handleChange() {
    setToggleNavbar(prev => !prev);
  }

  return (
    <nav className='w-full py-6 flex justify-between items-center'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]' />

      {/* Navbar for md (medium) and lg (larger) screens */}
      <ul className="list-none justify-end items-center flex-1 hidden sm:flex">
        {navLinks.map((nav, index) => {
          return (
            <li key={nav.id} className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
              <a href={`#${nav.id}`} className="hover:text-secondary">{nav.title}</a>
            </li>
          )
        })}
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img 
          src={toggleNavbar ? close : menu} 
          alt="menu" 
          className='w-[28px] h-[28px] object-contain'
          onClick={handleChange} 
        />

        {/* Navbar for sm (smaller) screens */}
        <div className={`${toggleNavbar ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 left-0 right-0 mx-4 my-2 min-w-[140px] sidebar rounded-xl`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => {
            return (
              <li key={nav.id} className={`text-white font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mb-0" : "mb-04"}`}>
                <a href={`#${nav.id}`} className="hover:text-secondary">{nav.title}</a>
              </li>
              )
            })}
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar;