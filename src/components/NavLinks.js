import React from 'react';
import { Link } from "react-router-dom";

import Shows from './Shows'
import About from './About'

const NavLinks = () => {

    return (
        <div className="navlinks">
          <Link to="/shows">Events</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
    );

}

export default NavLinks
