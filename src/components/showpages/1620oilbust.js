import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/16by20bust.jpg'
import image2 from '../images/kid1.jpg'


export default class ImageEight extends Component {

  state = {
    images: [image1, image2]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }

  changeImage = () => {
    $('.forwardarrow').on({
      'click': function() {
        let src = ($('#imageid').attr('src') === image1)
          ? image2
          : image1
        $("#imageid").attr('src', src)
       }
    })
  }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        let src = ($('#imageid').attr('src') === image2)
          ? image1
          : image2
        $("#imageid").attr('src', src)
       }
    })
  }

  render() {
    return (
      <div className="show">
          <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
          <div className="showimagewide"><img src={this.state.images[0]} id="imageid" alt="" /></div>
          <div className="title">Size 16x20 custom oil paint portrait. $325 for 1 figure, half body.</div>
          <div className="forwardarrow" onClick={this.changeImage()}><i class="fas fa-arrow-right"></i></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.changeImage()}
    {this.backImage()}
  }


}
