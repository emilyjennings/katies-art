import React, { Component } from 'react';
import $ from 'jquery'

export default class Contact extends Component {

  changeHeader = () => {
    $('.navsubtitle').text("contact me")
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
