import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/custom 12by12.jpg'
import image2 from '../images/christine.jpg'
import image3 from '../images/misc.JPG'
import image4 from '../images/misc2.JPG'
import image5 from '../images/misc3.jpg'
import image6 from '../images/misc 4.JPG'


export default class Misc extends Component {

  state = {
    images: [image1, image2, image3, image4, image5, image6]
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil paintings")
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
          case image4:
            $('#imageid').attr('src', image5)
            break;
          case image5:
            $('#imageid').attr('src', image6)
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
          case image6:
            $('#imageid').attr('src', image5)
            break;
          case image5:
            $('#imageid').attr('src', image4)
            break;
          case image4:
            $('#imageid').attr('src', image3)
            break;
          case image3:
            $('#imageid').attr('src', image2)
            break;
          case image2:
            $('#imageid').attr('src', image1)
            break;
          default:
            $('#imageid').attr('src', image6)
        }
       }
    })
  }
  render() {
    return (
      <div className="show">
          <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
          <div className="showimagewide"><img src={this.state.images[0]} id="imageid" alt="" /></div>
          <div className="title">Custom sizes, medium, and subjects. Inquire for quotes.</div>
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
