import React, { Component } from "react"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import SimpleReactLightbox from 'simple-react-lightbox'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop/>
        <SimpleReactLightbox>
        <div className="App">
          <Main />
        </div>
        </SimpleReactLightbox>
      </BrowserRouter>
    );
  }
}



    
export default App
