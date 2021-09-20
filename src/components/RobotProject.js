import React from 'react';
import Rowheader from './RowHeader';

const robotProject =  {
  title:"Dancing Robot",
  img:"https://picsum.photos/200/300",
  alt:"robotheaderimg",
  description:"This is a hands-on project that I designed a dancing robot from a to z, including kinematics, industrial design, manufacturing, electronics, simulation and programming. You are welcome to take a glance at my accomplishments and enjoy the video of the final product. "

}

function Project(props) {
    return(
      <div className="container">
        <Rowheader title={robotProject.title} img={robotProject.img} alt={robotProject.alt} description={robotProject.description}/>
        <div class="row row-content"> 
          aaa 
        </div>
        <div class="row row-content"> 
          .aaa 
        </div>
        <div class="row row-content">
          sss
        </div>
      </div>
    );
}

export default Project;   