import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/house.jpg'
import image2 from '../images/home2.jpg'
import image3 from '../images/home3.jpg'
import image4 from '../images/home4.jpg'


export default class ImageSeven extends Component {

  state = {
    images: [image1, image2, image3, image4]
  }

  changeHeader = () => {
    $('.navsubtitle').text("home illustrations")
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
            $('#imageid').attr('src', image4)
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
          case image4:
            $('#imageid').attr('src', image3)
            break;
          case image3:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image1)
            break;
          case image1:
            $('#imageid').attr('src', image4)
            break;
          default:
            $('#imageid').attr('src', image4)
        }
       }
    })
  }

  render() {
    return (
      <div className="show">
        <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
        <div className="showimagewide"><img src={this.state.images[0]} id="imageid" alt="" /></div>
        <div className="title">Size 12x9 custom watercolor or charcoal home illustration. $100.</div>
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
