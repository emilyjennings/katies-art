import React, { Component } from 'react';
import { Link } from "react-router-dom";
import $ from 'jquery'

import portrait1 from './images/11by14bust.jpg'
import image2 from './images/dog2.jpg'
import image12 from './images/dog3.jpg'
import image3 from './images/dogs1.jpg'
import image4 from './images/kids1.jpg'
import image5 from './images/kids2.jpg'
import image6 from './images/mural.jpg'
import image7 from './images/house.jpg'
import image8 from './images/half figure.jpg'
import image9 from './images/kid3.jpg'
import image11 from './images/kid2.jpg'
import image13 from './images/dog4.jpg'
import image14 from './images/16by20doubleportrait.jpeg'
import image15 from './images/custom 12by12.jpg'
import image16 from './images/home4.jpg'


export default class GalleryCards extends Component {


// All of Katie's artwork is stored in state
  state = {
    images: {
      image6: {
        link: image6,
        desc: "MURALS AND DECORATIVE PAINTING",
        price: "Inquire for quotes",
        name: "/murals",
        id: "six"
      },
      image5: {
        link: image5,
        desc: "3 FIGURES (16x20)",
        price: "$500",
        name: "/portrait5",
        id: "five"
      },
      image14: {
        link: image14,
        desc: "2 FIGURES (16x20)",
        price: "$450",
        name: "/portrait11",
        id: "fourteen"
      },
      image8: {
        link: image8,
        desc: "1/2 FIGURE (16x20)",
        price: "$350",
        name: "/portrait8",
        id: "eleven"
      },
      image4: {
        link: image4,
        desc: "2 FIGURES (11x14)",
        price: "$400",
        name: "/portrait4",
        id: "four"
      },
      image13: {
        link: image13,
        desc: "PET FULL FIGURE (16x20)",
        price: "$300",
        name: "/portrait10",
        id: "thirteen"
      },
      image12: {
        link: image12,
        desc: "PET 1/2 FIGURE (16x20)",
        price: "$275",
        name: "/portrait9",
        id: "twelve"
      },
      image2: {
        link: image2,
        desc: "PET FULL FIGURE (11x14)",
        price: "$300",
        name: "/portrait2",
        id: "two"
      },
      image3: {
        link: image3,
        desc: "PET 2 FIGURES (11x14)",
        price: "$350",
        name: "/portrait3",
        id: "three"
      },
      image1: {
        link: portrait1,
        desc: "PET 1/2 FIGURE (11x14)",
        price: "$250",
        name: "/portrait1",
        id: "one"
      },
      image7: {
        link: image7,
        desc: "HOME ILLUSTRATION (9x12)",
        price: "$125",
        name: "/homes-watercolor",
        id: "seven"
      },
      image16: {
        link: image16,
        desc: "HOME ILLUSTRATION (9x12)",
        price: "$100",
        name: "/homes-charcoal",
        id: "sixteen"
      },
      image15: {
        link: image15,
        desc: "MISCELLANEOUS",
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
