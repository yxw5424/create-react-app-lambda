import React, { Component } from "react"
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import RobotProject from "./RobotProject";
import Gallery from "./Gallery";
import About from "./About"
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
      
        <div className='container' style={{marginTop:'80px'}}>
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/robotproject' component={() => <RobotProject />} />
              <Route exact path='/gallery' component={() => <Gallery />} />
              <Route exact path='/about' component={() => <About />} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main
