import React from 'react';

import NavLinks from './NavLinks'

const Header = () => {

    return (
        <div className="navbar">
          <div className="navtitle">KATIE PAINTS PORTRAITS</div>
          <div className="navsubtitle"></div>      
          <NavLinks />
        </div>
    );

}

export default Header
