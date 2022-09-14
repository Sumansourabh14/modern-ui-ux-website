import React from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/index';

function Navbar() {
  return (
    <nav>
      <img src={logo} />
    </nav>
  )
}

export default Navbar