import React, { Component } from 'react';
import $ from 'jquery'

import image from '../images/16by20doubleportrait.jpeg'


export default class DoublePortrait extends Component {

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
        <div className="title">Size 16x20 custom oil paint double portrait. $450</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
