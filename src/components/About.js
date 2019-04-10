import React, { Component } from 'react';
import $ from 'jquery'

import katie from './images/Katieslashrun.jpg'

export default class About extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("about me")
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="aboutimage">
          <img src={katie} alt="" />
        </div>
        <div className="bio">
          Katie Macyshyn uses high resolution photographs to make realistic and colorful portrait paintings made to order with customized sizes, backgrounds and colors. Macyshyn has oil painted for two decades. Her paintings utilize vibrant half-tones and light to create realistic portraits with a touch of whimsy. She has been included in gallery exhibitions in the Washington DC region including group shows at VisArts, IA&A at Hillyer, and the Corcoran Gallery of Art. She is from Toms River, NJ.
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }
}
