import React, { Component } from 'react';
import $ from 'jquery'

import Header from '../components/Header'

export default class MainContainer extends Component {

  navStick = () => {

    $(window).scroll(function(){
      $(".top, .navstick").css("opacity", 0 + $(window).scrollTop() / 250)
    });
  }

  scrollTop = () => {
    $(".top").click(function(event){
      $(window).scrollTop(0);
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
