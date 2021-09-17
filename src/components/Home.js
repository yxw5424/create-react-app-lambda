import React from 'react';
import { Jumbotron } from 'reactstrap'

// const categories= ['art','me','robot','app']

function Home(props) {
    return(
      <div className="container">
         <Jumbotron>
            <div className="container" style={{marginTop:"80px", marginBottom:'40px'}}>
                <div className="row row-header">
                    <div className="col-12 col-sm-8" style={{textAlign:"left"}}>
                        <div className="container welcome">
                            <h1>Hello, I'm Tim.</h1>
                            <h1>A Enginner & Designer</h1>
                            <h1>Welcome to my Portfolio!</h1>
                            <p>Currently available for select projects, collaborations and consulting </p>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <div  align="left">
              <span className="col-1 filter">Filter:</span>
              <button className="col-1 filter-tag">art</button>
              <button className="col-1 filter-tag">me</button>
              <button className="col-1 filter-tag">robot</button>
              <button className="col-1 filter-tag">app</button>
            </div>
          </div>

        </div>
      </div>
      
    );
}

export default Home;   