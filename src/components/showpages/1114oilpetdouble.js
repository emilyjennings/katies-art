import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/dogs1.jpg'


export default class ImageThree extends Component {

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
        <div className="title">Size 11x14 custom oil paint pet portrait. $325 for 2 animals, bust only.</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
