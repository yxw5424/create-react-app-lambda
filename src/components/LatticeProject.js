import React from 'react';
import Rowheader from './RowHeader';
import { Media, Button } from 'reactstrap';

const ref =  {
  title:"Lattice Phone Case",
  img:"lattice/phonecases.png",
  alt:"latticephonecase",
  description:"In this project, I used nTopology to redesign extent product with lattice structure. I am currently using iphone 12, and my phone cases is broken. So why not redesigning a phone case. Then I come up with this idea to print a new lattice phone case for my iphone 12. The workflow and configuration are shown below. "
}

function LatticeProject() {
    return(
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        <div class="row row-content " style={{textAlign:"left",}}> 
          <Media body>
            <h1>Section I: nTopology</h1>
            <Media className='subtitle'>
            Settings
            </Media>
            <Media className="paragraph">
            Firstly, I imported the stl file, but the stl is a mesh file and nTop require a CAD body to run, so we need to re-mesh the stl file and transfer it into an implicit body. Workflow and the configuration of the ramp block is shown in Fig1 & Fig2: 
            </Media>
            <img  src="lattice/work_flow.jpg" alt="ntop work flow"  class="center" />  
            <Media className="figure-caption"> Figure 1. The workflow of the ntopology. </Media>
            <img  src="lattice/ramp.jpg" alt="ntop work flow"  class="center" />    
            <Media className="figure-caption"> Figure 2. configuration of the ramp </Media>
            <Media className='subtitle'>
            Original & Result
            </Media>
            <img  src="lattice/original.jpg" alt="ntop work flow"  class="center" />  
            <Media className="figure-caption"> Figure 3. The original design of the phone case</Media>
            <img  src="lattice/ntop_result.jpg" alt="ntop work flow"  class="center" />    
            <Media className="figure-caption"> Figure 4. The new design with lattice structure. </Media>
          </Media>
        </div>
        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <Media heading>
            Section II: Renderings
            </Media>
            <img  src="lattice/render1.png" alt="ntop work flow"  class="center" style={{width:'70%'}}/>    
            <Media className="figure-caption"> Figure 5. Renderings with screen </Media>          </Media>
        </div>
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
    );
}

export default LatticeProject;   