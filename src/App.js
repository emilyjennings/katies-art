import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import MainContainer from './containers/MainContainer'
import About from './components/About'
import Shows from './components/Shows'
import Contact from './components/Contact'
import GalleryCards from './components/GalleryCards'

import ImageOne from './components/showpages/1114oilpetbust'
import ImageTwo from './components/showpages/1114oilpetfull'
import ImageThree from './components/showpages/1114oilpetdouble'
import ImageFour from './components/showpages/1114oilpersondouble'
import ImageFive from './components/showpages/2016persontriple'
import ImageSix from './components/showpages/murals'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <MainContainer />

          <Route exact path="/" component={GalleryCards} />
          <Route exact path="/about" component={About} />
          <Route exact path="/shows" component={Shows} />
          <Route exact path="/contact" component={Contact} />

          <Route exact path="/portrait1" component={ImageOne} />
          <Route exact path="/portrait2" component={ImageTwo} />
          <Route exact path="/portrait3" component={ImageThree} />
          <Route exact path="/portrait4" component={ImageFour} />
          <Route exact path="/portrait5" component={ImageFive} />
          <Route exact path="/murals" component={ImageSix} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
