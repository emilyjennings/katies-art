import React from 'react';
import { Link } from "react-router-dom";

const NavLinks = () => {

    return (
        <div>
          <div className="navlinks">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Gallery</Link>
          </div>
          <div className="navstick">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/">Gallery</Link>
          </div>
        </div>
    );

}

export default NavLinks
