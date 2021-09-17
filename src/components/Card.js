import React from 'react';

function Card({name,description,image,category,link}) {
    return(
   
        
      <div class="col-4 card-container">
        <div class="card-content">
            <a class="card-link" href="https://picsum.photos/200/30"  >
                <img src="https://picsum.photos/200/300" alt="Girl in a jacket" />
                <h2 class="card-title">{name}</h2>
                <p class="card-body">{description}</p>
            {/* <a href="#" class="card-button">Learn More</a> */}
            </a>
        </div>
      </div>
      

    );
}

export default Card;   