import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/dog3.jpg'


export default class ImageTwelve extends Component {

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
        <div className="title">Size 16x20 custom oil paint pet portrait. $275 for 1 animal, bust only.</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
