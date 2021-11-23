import React from 'react';

const week1 = {
  Title:'Robot Studio - Sketch',
  Description:'In this project, we are required to build a walking robot but limited with 8 moters, so I did some researches and hand sketches, which ars shown here. For the next step, I am going to do a preliminary CAD model for my robot'
}

const Image =({src}) => {
  return(
    <div className="col-12 col-sm-12 col-md-6" >
      <div className="card-content" >          
        <img src={src } alt={src}/>
      </div>
    </div>
  )
}

const Description=({Description,Title})=>{
  return(
    <div className="col-12 col-sm-12 col-md-6">
      <div className="container" >          
        <h1 className="about-title">{Title}</h1>
        <div className="about-container">
        <p className="about-para">{Description}</p>
        </div>
      </div>
    </div>
  )
}


function Journal() {
    return(
      <div className="container" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <div className="row">
          <Image src={"Robotics/BUZZ-BOT_SKETCHES.png"} />
          <Description Description={week1.Description} Title={week1.Title}/>
        </div>
      </div>
    );
}

export default Journal;   