import React from 'react';
import { NavLink } from 'react-router-dom';
import MyImage from './MyImage';

function Card({name,link,image,key}) {
    return(
   
        
      <div className="col-4 card-container" id={key}>
        <div className="card-content" >
            <div className="item"  >
                <NavLink  to={link}  >
                <MyImage src={image} alt ={name} />
                
                <div className="overlay"> </div> 
                <div className="container">
                <h2 className="card-title text-wrap text-break">{name}</h2>
                </div>
            {/* <a href="#" class="card-button">Learn More</a> */}
                </NavLink>
                </div>
        </div>
      </div>
    );
}

export default Card;   