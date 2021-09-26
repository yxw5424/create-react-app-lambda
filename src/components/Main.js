import React, { Component } from "react"
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import GalleryPage from "./GalleryPage";
import About from "./About";
import RobotProject from "./RobotProject";
import LatticeProject from "./LatticeProject";

import { Switch, Route, Redirect } from 'react-router-dom';


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
              <Route exact path='/gallery' component={() => <GalleryPage />} />
              <Route exact path='/about' component={() => <About />} />
              <Route exact path='/robotproject' component={() => <RobotProject />} />
              <Route exact path='/latticeproject' component={() => <LatticeProject />} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main
