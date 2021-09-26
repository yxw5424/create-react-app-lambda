import React from 'react';
import Clock from './Clock';
import { photos } from './photos';

const GalleryPage = () => {
  return(
    <div class="gallery-row">
      <div class="gallery-column">
        { photos.slice(1, 4).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width}/>
        )
        })}
      
      </div>    
      <div class="gallery-column">
        { photos.slice(4, 7).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width}/>
        )
        })}
      
      </div>  
      <div class="gallery-column">
        { photos.slice(7, 11).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width}/>
        )
        })}
      
      </div>    
      <div class="gallery-column">
        { photos.slice(11, 14).map((ele)=>{
          return(
          <img src ={ele.src} alt={ele.width}/>
        )
        })}
      
      </div> 
    </div>
  )
}


function Gallery(props) {
    return(
      <div className="container">
        <h4>gallery</h4>
        <Clock/>
        <GalleryPage/>
       
      </div>
    );
}

export default Gallery;