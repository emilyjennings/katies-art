import React from 'react';

import NavLinks from './NavLinks'
import { Link } from "react-router-dom";

import background from './images/katiebackground.png'

const Header = () => {

    return (
        <div className="navbar">
          <img src={background} alt="" />
          <Link to="/"><div className="navtitle">KATIE PAINTS PORTRAITS</div></Link>
          <div className="navsubtitle"></div>
          <NavLinks />
        </div>
    );

}

export default Header
