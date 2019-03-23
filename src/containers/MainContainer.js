import React, { Component } from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
import GalleryCards from '../components/GalleryCards'


export default class MainContainer extends Component {


  render() {
    return(
      <div>
        <Header />
        <GalleryCards />
        <Footer />
      </div>
    )
  }
}
