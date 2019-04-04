import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/kid1.jpg'


export default class ImageEight extends Component {

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
        <div className="title">16x20 oil portrait - bust</div>
        <div className="price">$300</div>
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
