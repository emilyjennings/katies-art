import React, { Component } from 'react';
import $ from 'jquery'

export default class About extends Component {

  changeHeader = () => {
    $('.navtitle').text("About Katie")
  }

  render() {
    return (
      <div className="aboutcontainer">
        <div className="abouttitle">Katie</div>
        <div className="bio">Bio stuff here</div>
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
