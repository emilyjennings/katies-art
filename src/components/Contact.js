import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {

  changeHeader = () => {
    $('.navtitle').text("Contact Me")
  }

  render() {
    return (
      <div className="contactcontainer">
        <div className="details">Contact form coming soon</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
