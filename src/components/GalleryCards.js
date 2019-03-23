import React, { Component } from 'react';


import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'


export default class GalleryCards extends Component {

  state = {
    images: [image1, image2, image3, image4]
  }

  // Used to render the gallery images
  displayCards = () => {
      return this.state.images.map(image =>
        <div className="cardborder">
            <div className="artimage"><img src={image} alt="galleryimage" /></div>
        </div>)
  }


  render() {
    //The Search field is rendered and the results are presented.
    return (
      <div className="gallery">
        {this.displayCards()}
      </div>
    );
  };

//The component has loaded and the functions are called - was using this before but not currently
  componentDidMount(){

  }


}
