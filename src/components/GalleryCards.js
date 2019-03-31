import React, { Component } from 'react';
import $ from 'jquery'

import image1 from './images/dog1.jpg'
import image2 from './images/dog2.jpg'
import image12 from './images/dog3.jpg'
import image3 from './images/dogs1.jpg'
import image4 from './images/kids1.jpg'
import image5 from './images/kids2.jpg'
import image6 from './images/mural.jpg'
import image7 from './images/house.jpg'
import image8 from './images/kid1.jpg'
import image9 from './images/kid3.jpg'
import image11 from './images/kid2.jpg'
import image10 from './images/sanmiguel.jpg'
import image13 from './images/house.jpg'


export default class GalleryCards extends Component {

  state = {
    images: {
      image1: {
        link: image1,
        desc: "11x14 custom oil paint pet portrait. $225"
      },
      image2: {
        link: image2,
        desc: "11x14 custom oil paint pet portrait. $275"
      }
    }
    // , image3, image4, image5, image6, image7, image8, image9, image11, image10, image12, image13}
  }

  changeHeader = () => {
    $('.navtitle').text("KATIE PAINTS PORTRAITS")
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.images).map(image =>
      <div className="cardborder">
        <div className="imageborder">
          <img src={image.link} alt="galleryimage" />
        </div>
        <div className="caption">{image.desc}</div>
      </div>)
  }




  render() {
    return (
      <div className="gallery">
        {this.displayCards()}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
