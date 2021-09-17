import React from 'react';

function Card({name,description,image,category,link}) {
    return(
   
        
      <div class="col-4 card-container">
        <div class="card-content">
            <div class="item">
                <a class="" href="https://picsum.photos/200/30"  >
                <img src="https://picsum.photos/200/300" alt ={name}/>
                
                <div class="overlay"> </div> 
                <h2 class="card-title">{name}</h2>
            {/* <a href="#" class="card-button">Learn More</a> */}
                </a>
                </div>
        </div>
      </div>
    );
}

export default Card;   