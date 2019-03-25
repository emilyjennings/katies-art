import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {

  changeHeader = () => {
    $('.navtitle').text("Contact Me")
  }

  render() {
    return (
      <div className="contactcontainer">
        <div className="contacttitle">Contact</div>
        <div className="details">Please contact me via email, katie@katie.com</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
