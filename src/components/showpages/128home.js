import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/house.jpg'
import image2 from '../images/home2.jpg'
import image3 from '../images/home3.jpg'


export default class ImageSeven extends Component {

  state = {
    images: [image1, image2, image3]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }

  changeImage = () => {
    $('.forwardarrow').on({
      'click': function() {
        var src = ($('#imageid').attr('src') === image1)
          ? image2
          : image3
        $("#imageid").attr('src', src)
       }
    })
  }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        var src = ($('#imageid').attr('src') === image3)
          ? image2
          : image1
        $("#imageid").attr('src', src)
       }
    })
  }

  render() {
    return (
      <div className="show">
        <div className="title">12x9 Watercolor home portrait</div>
          <div className="price">$65</div>
          <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
          <div className="showimage"><img src={this.state.images[0]} id="imageid" alt="" /></div>
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
