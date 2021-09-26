import React from 'react';
import Clock from './Clock';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";




function GalleryPage(props) {
    return(
      <div className="container">
        <h4>gallery</h4>
        <Clock/>
        <div class="row">
        <Gallery photos={photos} />
        </div>
      </div>
    );
}

export default GalleryPage;