import React, { Component } from 'react';
import $ from 'jquery'

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
      $("html").animate({ scrollTop: 0 }, "slow")
    });

    $(window).scroll(function(){
      var scrollTop = $(window).scrollTop()
      if (scrollTop > 180) {
        $('.top').animate({
          opacity: '1',
        }, 1000)
      };
    });
  }

  render() {
    return(
      <div classname="main">
        <Header />
      </div>
    )
  }

  componentDidMount(){
    {this.navStick()}
    {this.scrollTop()}
  }


}
