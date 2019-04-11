import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/kids2.jpg'
import image2 from '../images/kids3.jpg'


export default class ImageFive extends Component {

  state = {
    images: [image1, image2]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }

  changeImage = () => {
    $('.forwardarrow').on({
      'click': function() {
        var src = ($('#imageid').attr('src') === image1)
          ? image2
          : image1
        $("#imageid").attr('src', src)
       }
    })
  }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        var src = ($('#imageid').attr('src') === image2)
          ? image1
          : image2
        $("#imageid").attr('src', src)
       }
    })
  }

  render() {
    return (
      <div className="show">
        <div className="title">20x16 oil portrait 3 figures</div>
          <div className="price">$450</div>
          <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
          <div className="showimagewide"><img src={this.state.images[0]} id="imageid" alt="" /></div>
          <div className="forwardarrow"><i class="fas fa-arrow-right"></i></div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.changeImage()}
    {this.backImage()}
  }


}
