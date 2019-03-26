import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

    return (
        <div className="navlinks">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Gallery</Link>
        </div>
    );

}

export default NavLinks
