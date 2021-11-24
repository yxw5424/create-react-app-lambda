import React, { Component } from "react"
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import About from "./About";
import RobotProject from "./RobotProject";
import LatticeProject from "./LatticeProject";
import Journal from './Journal'
import TransportProject from "./TransportProject";
import { Switch, Route, Redirect } from 'react-router-dom';
import Watercolor from "./Watercolor";
import DigitalArt from "./DigitalArt";
import CarbonNanotube from "./CarbonNanotube";


class Main extends Component {
  
  render() {
    const HomePage = () => {
        return( 
            <Home 
            />
        );
      }
    return (
      <div>
        <Header/>
      
        <div className='container' style={{marginTop:'80px'}} >
          <Switch >
              <Route path='/home' component={HomePage} />
              <Route exact path='/gallery' component={() => <Gallery />} />
              <Route exact path='/about' component={() => <About />} />
              <Route exact path='/robotproject' component={() => <RobotProject />} />
              <Route exact path='/latticeproject' component={() => <LatticeProject />} />
              <Route exact path='/transportproject' component={() => <TransportProject />} />
              <Route exact path='/watercolor' component={() => <Watercolor />} />
              <Route exact path='/digitalart' component={() => <DigitalArt />} />
              <Route exact path='/carbonnanotube' component={() => <CarbonNanotube />} />
              <Route exact path='/journal' component={() => <Journal />} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main
