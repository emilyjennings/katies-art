import React, { Component } from 'react';
import $ from 'jquery'

import katie from './images/Katieslashrun.jpg'

export default class About extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("About Katie")
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="aboutimage">
          <img src={katie} alt="" />
        </div>
        <div className="bio">Since receiving her BFA from the Corcoran School of the Arts and Design, Katie Macyshyn has taught art and empowered self expression through workshops, creative group activities, and high camp multimedia rituals. In addition to her new media and art education practice, Macyshyn has oil painted for two decades. Her paintings utilize vibrant half-tones and light to create realistic portraits with a touch of whimsy. She has been included in gallery exhibitions in the Washington DC region including group shows at VisArts, IA&A at Hillyer, and the Corcoran Gallery of Art. She is from Toms River, NJ.</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }
}
