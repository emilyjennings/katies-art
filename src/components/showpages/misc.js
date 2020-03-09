import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/custom 12by12.jpg'


export default class Misc extends Component {

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
        <div className="title">Custom oil portraits, ask for price.</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
