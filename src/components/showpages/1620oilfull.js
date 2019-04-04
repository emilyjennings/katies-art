import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/kid3.jpg'


export default class ImageNine extends Component {

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
        <div className="title">16x20 oil portrait - full figure</div>
        <div className="price">$350</div>
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
