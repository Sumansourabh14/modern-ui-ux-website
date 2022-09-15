import React from 'react';
import { navLinks } from '../constants';

function Navbar() {
  return (
    <nav className='font-outfit'>
            <p>Krypto</p>
            <ul>
                {navLinks.map((nav, index) => {
                    return (
                        <li key={nav.id}>
                            <a href={`#${nav.id}`}>{nav.nav}</a>
                        </li>
                    )
                })}
            </ul>
    </nav>
  )
}

export default Navbar;