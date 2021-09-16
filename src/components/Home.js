import React from 'react';
import { Jumbotron } from 'reactstrap'


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
        <h1>home</h1>
      </div>
      
    );
}

export default Home;   