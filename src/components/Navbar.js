import React, { useState } from 'react';
import { navLinks } from '../constants';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

function Navbar() {
    const [toggle, setToggle] = useState(false);

    function handleToggle() {
        setToggle(!toggle)
    }

  return (
    <nav className='font-outfit py-8 text-white flex justify-between items-center'>
        <p className='uppercase font-semibold'>Krypto</p>
        <ul className="hidden sm:flex">
            {navLinks.map((nav, index) => {
                return (
                    <li key={nav.id} className="capitalize hover:opacity-60 duration-100">
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
        <div className='sm:hidden'>
            <img 
                src={toggle ? close : menu} 
                onClick={handleToggle} 
                alt="menu" 
                className='w-[30px] h-[30px] object-contain cursor-pointer hover:opacity-60 duration-100'
            />
            <div className={`${toggle ? "flex" : "hidden"} p-6 absolute top-20 right-0 left-0 bg-blue-900 mx-0 my-2 bg-opacity-95 `}>
                <ul className="list-none flex justify-end items-start flex-1 flex-col">
                    {navLinks.map((nav, index) => {
                        return (
                            <li key={nav.id} className="capitalize hover:opacity-60 duration-100">
                                <a
                                    href={`#${nav.id}`}
                                    className={index === navLinks.length - 1 ? "mb-0" : "mb-2"}
                                >
                                    {nav.nav}
                                </a>
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