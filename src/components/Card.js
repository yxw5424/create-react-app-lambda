import React from 'react';
import { NavLink } from 'react-router-dom';
import  ImageLoader  from 'react-loading-image';

function Card({name,link,image,key}) {
    return(
   
        
      <div class="col-4 card-container" id={key}>
        <div class="card-content" >
            <div class="item"  >
                <NavLink  to={link}  >
                <ImageLoader src={image} alt ={name} loading={() => <div>Loading...</div>}
              error={() => <div>Error</div>}  />
                
                <div class="overlay"> </div> 
                <div class="container">
                <h2 class="card-title text-wrap text-break">{name}</h2>
                </div>
            {/* <a href="#" class="card-button">Learn More</a> */}
                </NavLink>
                </div>
        </div>
      </div>
    );
}

export default Card;   