import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/dog2.jpg'


export default class ImageTwo extends Component {

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
        <div className="title">11x14 Custom Oil Pet Portrait, Full Figure</div>
        <div className="price">$275</div>
        <div className="showimage"><img src={this.state.image} id="imageid" alt="" /></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
