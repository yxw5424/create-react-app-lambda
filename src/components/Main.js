import React, { Component } from "react"
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";
import Gallery from "./Gallery";
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
              <Route exact path='/project' component={() => <Project />} />
              <Route exact path='/gallery' component={() => <Gallery />} />
              <Redirect to="/home" />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Main
