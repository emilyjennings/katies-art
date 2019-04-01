import React, { Component } from 'react';
import $ from 'jquery'

import image1 from './images/dog1.jpg'
import image2 from './images/dog2.jpg'
import image12 from './images/dog3.jpg'
import image3 from './images/dogs1.jpg'
import image4 from './images/kids1.jpg'
import image5 from './images/kids2.jpg'
import image6 from './images/mural.jpg'
import image7 from './images/house.jpg'
import image8 from './images/kid1.jpg'
import image9 from './images/kid3.jpg'
import image11 from './images/kid2.jpg'
import image10 from './images/sanmiguel.jpg'
import image13 from './images/dog4.jpg'


export default class GalleryCards extends Component {

  state = {
    images: {
      image1: {
        link: image1,
        desc: "11x14 custom oil paint pet portrait, bust",
        price: "$225"
      },
      image2: {
        link: image2,
        desc: "11x14 custom oil paint pet portrait, full figure",
        price: "$275"
      },
      image3: {
        link: image3,
        desc: "11x14 double pet oil portrait",
        price: "$325"
      },
      image4: {
        link: image4,
        desc: "14x11 double oil portrait",
        price: "$350"
      },
      image5: {
        link: image5,
        desc: "20x16 oil portrait 3 figures",
        price: "$450"
      },
      image6: {
        link: image6,
        desc: "Mural",
        price: "$1000"
      },
      image7: {
        link: image7,
        desc: "12x9 Watercolor home portrait",
        price: "$65"
      },
      image8: {
        link: image8,
        desc: "16x20 oil portrait - bust",
        price: "$300"
      },
      image9: {
        link: image9,
        desc: "16x20 oil portrait - full figure",
        price: "$350"
      },
      image10: {
        link: image10,
        desc: "San Miguel de Allende oil painting",
        price: "$350"
      },
      image11: {
        link: image11,
        desc: "16x20 oil portrait - half figure",
        price: "$325"
      },
      image12: {
        link: image12,
        desc: "16x20 oil pet portrait, bust",
        price: "$275"
      },
      image13: {
        link: image13,
        desc: "16x20 oil pet portrait - full figure",
        price: "$325"
      },

    }
    // , image3, image4, image5, image6, image7, image8, image9, image11, image10, image12, image13}
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.images).map(image =>
      <div className="cardborder">
        <div className="imageborder">
          <img src={image.link} alt="" />
        </div>
        <div className="caption">{image.desc}</div>
        <div className="price">{image.price}</div>
      </div>)
  }




  render() {
    return (
      <div className="gallery">
        {this.displayCards()}
        <div className="noimage">
          <h2>Don't see what you're looking for? Let's talk about custom pieces.</h2>
        </div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
