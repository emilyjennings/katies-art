import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/dog4.jpg'


export default class ImageThirteen extends Component {

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
        <div className="title">Size 16x20 custom oil paint pet portrait</div>
        <div className="title">$350</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
