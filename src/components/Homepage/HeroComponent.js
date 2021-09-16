
import React, { useState } from 'react';
import { Jumbotron } from 'reactstrap';



function HeroComponent() {
  return (
    <Jumbotron>
      <div className="container">
          <div className="row row-header">
              <div className="col-12 col-sm-6">
                  <h1>Jumbotron</h1>
              </div>
          </div>
      </div>
    </Jumbotron>
  );
}

export default HeroComponent;
