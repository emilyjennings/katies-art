import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/kid2.jpg'
import image2 from '../images/kid3.jpg'
import image3 from '../images/16by20bust.jpg'
import image4 from '../images/kid1.jpg'
import image5 from '../images/half figure.jpg'


export default class ImageTen extends Component {

  state = {
    images: [image1, image2, image3, image4, image5]
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
            $('#imageid').attr('src', image5)
        }
       }
    })
  }

  render() {
    return (
      <div className="show">
        <div className="backarrow"><i class="fas fa-arrow-left"></i></div>
        <div className="showimage"><img src={this.state.images[0]} id="imageid" alt="" /></div>
        <div className="forwardarrow"><i class="fas fa-arrow-right"></i></div>
        <div className="title">Size 16x20 custom oil paint half figure portrait</div>
        <div className="title">$350</div>
      </div>

    );
  };

  componentDidMount(){
    {this.changeHeader()}
    {this.changeImage()}
    {this.backImage()}
  }

}
