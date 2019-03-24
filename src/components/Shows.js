import React, { Component } from 'react';
import $ from 'jquery'

export default class Shows extends Component {

  state = {
    events: {
      'Title1': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Title2': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
      'Title3': 'consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      'Title4': 'dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor',
      'Title5': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Title6': 'sunt in culpa qui officia deserunt mollit anim id est laborum'
      }
  }

  changeHeader = () => {
    $('.navtitle').text('Upcoming')
  }

  displayEvents = () => {
    for (const key in this.state.events) {
    }
  }

  render() {
    return (
      <div className="showcontainer">
        {this.state.events.Title1}
        {this.displayEvents()}
      </div>
    );
  };

  componentDidMount(){
    {this.changeHeader()}
  }


}
