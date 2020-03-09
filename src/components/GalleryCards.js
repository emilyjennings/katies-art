import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import portrait1 from './images/dog1.jpg'
import image2 from './images/dog2.jpg'
import image12 from './images/dog3.jpg'
import image3 from './images/dogs1.jpg'
import image4 from './images/kids1.jpg'
import image5 from './images/kids2.jpg'
import image6 from './images/mural.jpg'
import image7 from './images/house.jpg'
import image8 from './images/16by20bust.jpg'
import image9 from './images/kid3.jpg'
import image11 from './images/kid2.jpg'
import image13 from './images/dog4.jpg'
import image14 from './images/16by20doubleportrait.jpeg'
import image15 from './images/custom 12by12.jpg'


export default class GalleryCards extends Component {


// All of Katie's artwork is stored in state
  state = {
    images: {
      image8: {
        link: image8,
        desc: "16x20 oil portrait - bust",
        price: "$300",
        name: "/portrait6",
        id: "eight"
      },
      image7: {
        link: image7,
        desc: "12x9 home illustration",
        price: "$65",
        name: "/homes",
        id: "seven"
      },
      image6: {
        link: image6,
        desc: "Murals and decorative painting",
        price: "$1000",
        name: "/murals",
        id: "six"
      },
      image4: {
        link: image4,
        desc: "14x11 double oil portrait",
        price: "$350",
        name: "/portrait4",
        id: "four"
      },
      image11: {
        link: image11,
        desc: "16x20 oil portrait - half figure",
        price: "$325",
        name: "/portrait8",
        id: "eleven"
      },
      image9: {
        link: image9,
        desc: "16x20 oil portrait - full figure",
        price: "$350",
        name: "/portrait7",
        id: "nine"
      },
      image5: {
        link: image5,
        desc: "20x16 oil portrait 3 figures",
        price: "$500",
        name: "/portrait5",
        id: "five"
      },
      image1: {
        link: portrait1,
        desc: "11x14 custom oil paint pet portrait, bust",
        price: "$225",
        name: "/portrait1",
        id: "one"
      },
      image2: {
        link: image2,
        desc: "11x14 custom oil paint pet portrait, full figure",
        price: "$275",
        name: "/portrait2",
        id: "two"
      },
      image3: {
        link: image3,
        desc: "11x14 double pet oil portrait",
        price: "$325",
        name: "/portrait3",
        id: "three"
      },
      image12: {
        link: image12,
        desc: "16x20 oil pet portrait, bust",
        price: "$275",
        name: "/portrait9",
        id: "twelve"
      },
      image13: {
        link: image13,
        desc: "16x20 oil pet portrait - full figure",
        price: "$325",
        name: "/portrait10",
        id: "thirteen"
      },
      image14: {
        link: image14,
        desc: "16x20 double portrait",
        price: "$450",
        name: "/portrait11",
        id: "fourteen"
      },
      image15: {
        link: image15,
        desc: "miscellaneous",
        price: "ask for price",
        name: "/portrait15",
        id: "fifteen"
      },
    }
  }

  changeHeader = () => {
    $('.navsubtitle').text("custom oil portraits")
    $('.navstick').show()
  }

  // Used to render the gallery images
  displayCards = () => {
    return Object.values(this.state.images).map(image =>
      <div className="clearfix">
        <Link to={image.name}><div className="cardborder">
          <div className="imageborder" id={image.id}>
            <img src={image.link} alt="" />
          </div>
          <div className="caption">{image.desc}</div>
        </div></Link>
      </div>)
  }

  componentDidMount(){
    {this.changeHeader()}
  }


  render() {
    return (
      <div className="gallery">
        {this.displayCards()}
        <div className="noimage">
          <h2>Don't see what you're looking for? Let's talk.</h2>
        </div>
      </div>
    );
  };



}
