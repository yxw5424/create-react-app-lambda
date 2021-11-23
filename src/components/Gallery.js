import React from 'react';
import Clock from './Clock';
import { photos } from './photos';

var crypto = require("crypto");


function getRandomString() {
    var result = crypto.randomBytes(20).toString('hex');
    return result;
}

const GalleryPage = () => {
  return(
    <div className="gallery-row">
      <div className="gallery-column">
        { photos.slice(1, 4).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>    
      <div className="gallery-column">
        { photos.slice(4, 7).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>  
      <div className="gallery-column">
        { photos.slice(7, 11).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>    
      <div className="gallery-column">
        { photos.slice(11, 14).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div> 
    </div>
  )
}


function Gallery(props) {
    return(
      <div className="container">
        <Clock/>
        <GalleryPage/>
       
      </div>
    );
}

export default Gallery;