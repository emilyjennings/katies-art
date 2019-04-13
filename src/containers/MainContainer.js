import React, { Component } from 'react';
import $ from 'jquery'

import Footer from '../components/Footer.js'
import Header from '../components/Header'

export default class MainContainer extends Component {

  navStick = () => {

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 130) {
        $(".navstick").show()
      } else if (scrollTop <= 130) {
        $(".navstick").hide()
      }
    });

  }


  render() {
    return(
      <div classname="main">
        <Header />
        <Footer />
      </div>
    )
  }

  componentDidMount(){
    {this.navStick()}
  }

}
