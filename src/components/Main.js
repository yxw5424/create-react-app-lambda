import React, { Component } from "react"
import Home from './Home';
import Header from "./Header";
import Footer from "./Footer";
import Project from "./Project";
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
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/project' component={() => <Project />} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main
