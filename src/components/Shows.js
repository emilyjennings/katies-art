import React, { Component } from 'react';
import $ from 'jquery'

export default class Shows extends Component {

  state = {
    events: ["Event 1 placeholder, a aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Event 2 placeholder, Lorem ipsum dolor sit amet, consectetur adipisicing", "Event3 placeholder, ed do eiusmod tempor incididunt ut labore et dolore magn"]
  }

  changeHeader = () => {
    $('.navtitle').text('Upcoming')
  }

  displayEvents = () => {
    return this.state.events.map(event =>
      <div className="eventcard">{event}</div>
    )
  }

  render() {
    return (
      <div className="showcontainer">
        {this.displayEvents()}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
