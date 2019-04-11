import React, { Component } from 'react';
import $ from 'jquery'

import image1 from '../images/sanmiguel.jpg'
import image2 from '../images/sanmiguel2.jpg'
import image3 from '../images/sanmiguel3.jpg'
import image4 from '../images/sanmiguel4.jpg'
import image5 from '../images/sanmiguel5.jpg'


export default class ImageEleven extends Component {

  state = {
    images: [image1, image2, image3, image4, image5]
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
        <div className="showimagewide"><img src={this.state.images[0]} id="imageid" alt="" /></div>
        <div className="title">Height: 7.5 Inches; Width: 16 Inches. $350. This triptych was painted on the roof of the Bellas Artes in San Miguel de Allende, Mexico. Total length of panels 48". Pewter colored metal frame included.</div>
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
