import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/dog2.jpg'
import image2 from '../images/petfullbody.jpg'


export default class ImageTwo extends Component {

  state = {
    image: image
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }


  render() {
    return (
      <div className="show">
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
        <div className="title">Size 11x14 custom oil paint pet portrait</div>
        <div className="title">$300</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
