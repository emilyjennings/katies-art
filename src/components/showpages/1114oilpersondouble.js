import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/kids1.jpg'

export default class ImageFour extends Component {

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
        <div className="title">Size 11x14 custom oil paint double portrait</div>
        <div className="title">$400</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
