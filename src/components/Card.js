import React from 'react';

function Card({name,link,image,key}) {
    return(
   
        
      <div class="col-4 card-container" id={key}>
        <div class="card-content" >
            <div class="item"  >
                <a  href={link}  >
                <img src={image} alt ={name}  />
                
                <div class="overlay"> </div> 
                <div class="container">
                <h2 class="card-title text-wrap text-break">{name}</h2>
                </div>
            {/* <a href="#" class="card-button">Learn More</a> */}
                </a>
                </div>
        </div>
      </div>
    );
}

export default Card;   