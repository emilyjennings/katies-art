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
  //
  // displayShowImage = (image = "") => {
  //   this.setState({image: image})
  // }


  render() {
    return (
      <div className="show">
        <div className="title">14x11 Double Oil Portrait</div>
        <div className="price">$350</div>
        <div className="showimagewide"><img src={this.state.image} id="imageid" alt="" /></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
