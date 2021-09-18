import React from 'react';
import { SocialIcon } from 'react-social-icons';


const Portrait =() => {
  return(
    <div class="col-12 col-sm-6 col-md-6">
      <div class="card-content">          
        <img src="portrait.jpeg" alt ="portrait"/>
      </div>
    </div>
  )
}

const AboutText=()=>{
  return(
    <div class="col-12 col-sm-6 col-md-6">
      <div class="container" >          
        <h1 className="about-title">About me</h1>
        <div className="about-container">
        <p className="about-para">As a graduate student in mechanical engineering, my mission is to create safe, easy-to-use products to help users accomplish tasks efficiently.</p>
        <p className="about-para">Because both my father and grandfather work in the industry, my enthusiasm for robotics and mechanic had been raised since my childhood. As a mechanical engineer, I want to develop more user friendly products to improve the quality of human life and development of the society. The biggest goal of my career is to produce products that can promote the industry and change the world like iPhone. The goal of my career is to design clean energy products and promote an industry that can improve people's life like tesla, apple, etc.</p>
        <p className="about-para">I am very honored to be a member of the mechanical engineering community and hope that one day through the efforts of our community, everyone can enjoy the powerful still environmentally friendly product.</p>
        </div>
      </div>
    </div>
  )
}


function About() {
    return(
      <div className="container" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <div className="row">
          <Portrait/>
          <AboutText/>
        </div>
        <div class=" container" style={{padding:"10%"}}>
            <SocialIcon bgColor="black" class="social-icon" url="https://linkedin.com/in/jaketrent" style={{height:25,width:25}}/>
            <SocialIcon bgColor="black" class="social-icon" url="https://youtube.com" style={{height:25,width:25}}/>
            <SocialIcon bgColor="black" class="social-icon" url="https://wechat.com" style={{height:25,width:25}}/>
            <SocialIcon bgColor="black" class="social-icon" url="mailto:yxw5424@hotmail.com" style={{height:25,width:25}}/>
        </div>
      </div>
    );
}

export default About;;   