import React from 'react';

function About(props) {
    return(
      <div className="container">
        <div id="container">
          <div class="item "> 
              <img src="http://placehold.it/600x350" alt="protrait"/>
              <h2>Title</h2>
              <p> Text</p>
              <div class="overlay"> </div> 
          </div>
        </div>
      </div>
    );
}

export default About;   