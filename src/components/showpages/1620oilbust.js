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
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
        <div className="title">Size 16x20 custom oil paint portrait. $300 for 1 figure, bust only.</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
