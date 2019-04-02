import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/dog2.jpg'
import image2 from '../images/1114dogbust2.jpg'
import image3 from '../images/1114petoilbust3.jpg'


export default class ImageTwo extends Component {

  state = {
    images: [image1, image2, image3]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }


  render() {
    return (
      <div className="show">
        <div className="title">11x14 Custom Oil Paint Pet Portrait, Full Figure</div>
          <div className="price">$275</div>
          <div className="showimage"><img src={this.state.images[0]} id="imageid" alt="" /></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
