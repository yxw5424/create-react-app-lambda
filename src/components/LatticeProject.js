import React from 'react';
import Rowheader from './RowHeader';

const ref =  {
  title:"Lattice Phone Case",
  img:"phonecases.png",
  alt:"latticephonecase",
  description:"In this project, I used nTopology to redesign extent product with lattice structure. I am currently using iphone 12, and my phone cases is broken. So why not redesigning a phone case. Then I come up with this idea to print a new lattice phone case for my iphone 12. The workflow and configuration are shown below. "
}

function LatticeProject() {
    return(
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        <div class="row row-content " style={{textAlign:"left",}}> 
          <h1>Stection I: nTopology</h1>
          <div class="col">

          </div>
        </div>
        <div class="row row-content" style={{textAlign:"left",}}> 
            <h1>Stection II: Renderings</h1>
        </div>
      </div>
    );
}

export default LatticeProject;   