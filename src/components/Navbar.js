import React, { useState } from 'react';
import { navLinks } from '../constants';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function Navbar() {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className='font-outfit py-8 text-white flex justify-between items-center'>
        <p className='uppercase font-semibold'>Krypto</p>
        <ul className="hidden sm:flex">
            {navLinks.map((nav, index) => {
                return (
                    <li key={nav.id}>
                        <a 
                            href={`#${nav.id}`} 
                            className={index === navLinks.length - 1 ? "mr-0" : "mr-10"}
                        >
                            {nav.nav}
                        </a>
                    </li>
                )
            })}
        </ul>
    </nav>
  )
}

export default Navbar;