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
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
        <div className="title">Size 16x20 custom oil paint portrait. $350 for 1 figure, full body.</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
