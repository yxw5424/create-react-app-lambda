import React from 'react';
import Clock from './Clock';
import { photos } from './photos';

var crypto = require("crypto");

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(photos)

function getRandomString() {
    var result = crypto.randomBytes(20).toString('hex');
    return result;
}

const GalleryPage = () => {
  return(
    <div className="gallery-row">
      <div className="gallery-column">
        { photos.slice(0, 5).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>    
      <div className="gallery-column">
        { photos.slice(5, 10).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>  
      <div className="gallery-column">
        { photos.slice(10, 15).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width} key={getRandomString()}/>
        )
        })}
      
      </div>    
      <div className="gallery-column">
        { photos.slice(15, 20).map((ele)=>{
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