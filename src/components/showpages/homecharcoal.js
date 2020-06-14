import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/home4.jpg'
import image2 from '../images/homecharcoal.JPG'


export default class ImageFourteen extends Component {

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
      <div className="title">Custom 9x12 charcoal home illustration </div>
      <div className="title">$100</div>
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
