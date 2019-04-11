import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/dog1.jpg'
import image2 from '../images/1114dogbust2.jpg'
import image3 from '../images/1114petoilbust3.jpg'


export default class ImageOne extends Component {

  state = {
    images: [image1, image2, image3]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }

  changeImage = () => {
    $('.forwardarrow').on({
      'click': function() {
        switch ($('#imageid').attr('src')) {
          case image1:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image3)
            break;
          case image3:
            $('#imageid').attr('src', image1)
            break;
          default:
            $('#imageid').attr('src', image1)
        }
      }
    })
  }

  backImage = () => {
    $('.backarrow').on({
      'click': function() {
        switch ($('#imageid').attr('src')) {
          case image3:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image1)
            break;
          case image1:
            $('#imageid').attr('src', image3)
            break;
          default:
            $('#imageid').attr('src', image3)
        }
       }
    })
  }

  render() {
    return (
      <div className="show">
          <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
          <div className="showimage"><img src={this.state.images[0]} id="imageid" alt="" /></div>
          <div className="title">Size 11x14 custom oil paint pet portrait. $225 for 1 animal, bust only.</div>
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
