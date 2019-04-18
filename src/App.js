import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import $ from 'jquery'

import './App.css';

import MainContainer from './containers/MainContainer'
import Footer from './components/Footer'
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
import ImageSeven from './components/showpages/128home'
import ImageEight from './components/showpages/1620oilbust'
import ImageNine from './components/showpages/1620oilfull'
import ImageTen from './components/showpages/1620oilhalf'
import ImageTwelve from './components/showpages/1620oilhalfpet'
import ImageThirteen from './components/showpages/1620oilfullpet'


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
          <Route exact path="/homes" component={ImageSeven} />
          <Route exact path="/portrait6" component={ImageEight} />
          <Route exact path="/portrait7" component={ImageNine} />
          <Route exact path="/portrait8" component={ImageTen} />
          <Route exact path="/portrait9" component={ImageTwelve} />
          <Route exact path="/portrait10" component={ImageThirteen} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }

}

export default App;
