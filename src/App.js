import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import MainContainer from './containers/MainContainer.js'
import About from './components/About.js'
import Shows from './components/Shows.js'
import Contact from './components/Contact.js'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <MainContainer />

          <Route exact path="/" component={MainContainer} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
