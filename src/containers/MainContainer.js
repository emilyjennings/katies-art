import React, { Component } from 'react';
import $ from 'jquery'

import Footer from '../components/Footer.js'
import Header from '../components/Header'

export default class MainContainer extends Component {

  navStick = () => {
    $(".navstick").hide()

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 130) {
        $(".navstick").show()
      } else if (scrollTop <= 130) {
        $(".navstick").hide()
      }
    });
  }

  scrollTop = () => {
    $(".top").click(function(event){
      window.scrollTo({
        top: 0,
        left: 100,
        behavior: 'smooth'
      });
    });

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 120) {
        $('.top').animate({
          opacity: '1',
        }, 500)};
    });
  }

  hideTopButton = () => {
    $(".top").click(function(event){
      $('.top').hide()
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
    {this.scrollTop()}
    {this.hideTopButton()}
  }


}
