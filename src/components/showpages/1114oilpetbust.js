import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/dog1.jpg'
import image2 from '../images/1114dogbust2.jpg'
import image3 from '../images/1114petoilbust3.jpg'


export default class ImageOne extends Component {

  state = {
    images: [image1, image2, image3]
  }

  changeHeader = () => {
    $('.navsubtitle').text("11x14 Custom Oil Paint Pet Portrait, Bust")
  }

  // Used to render the gallery images
  displayCards = () => {
    return this.state.images.map(image =>
      <div className="showborder">
        <div className="price">$225</div>
        <div className="showimageborder">
          <img src={image} alt="" />
        </div>
      </div>
      )
  }




  render() {
    return (
      <div className="gallery">
        {this.displayCards()}
        <div className="noimage">
          <h2>Don't see what you're looking for? Let's talk.</h2>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
