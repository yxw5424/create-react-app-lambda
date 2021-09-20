import React, { Component } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}



    
export default App
