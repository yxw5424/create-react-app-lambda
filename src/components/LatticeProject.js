import React from 'react';
import Rowheader from './RowHeader';
import { Media, Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';

const ref =  {
  title:"Lattice Phone Case",
  img:"lattice/phonecases.png",
  alt:"latticephonecase",
  description:"In this project, I used nTopology to redesign extent product with lattice structure. I am currently using iphone 12, and my phone cases is broken. So why not redesigning a phone case. Then I come up with this idea to print a new lattice phone case for my iphone 12. The workflow and configuration are shown below. "
}

const elements = [
  {
    src: 'lattice/work_flow.jpg',
    alt: 'work flow',
    id: 1,
    width: 1920,
    height: 'auto'
  },
  {
    src: 'lattice/ramp.jpg',
    alt: 'ramp',
    id:2,
    width: 1024,
    height: 'auto'
  },
  {
    src: 'lattice/original.jpg',
    alt: 'Original CAD file',
    id: 3,
    autoplay: false,
    showControls: true
  },
  {
    src: 'lattice/ntop_result.jpg',
    alt: 'reuslt',
    id: 4,
    autoplay: false,
    showControls: true
  },
  {
    src: 'lattice/render1.png',
    alt: 'render',
    id: 5,
    autoplay: false,
    showControls: true
  }

]

function LatticeProject() {
  
    return(
      <SRLWrapper elements={elements}>
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
            <MyImage src={elements[0].src} alt={elements[0].alt} className="center" />  
            <Media className="figure-caption"> Figure 1. The workflow of the ntopology. </Media>
            <MyImage  src={elements[1].src} alt={elements[1].alt}  className="center" />    
            <Media className="figure-caption"> Figure 2. configuration of the ramp </Media>
            <Media className='subtitle'>
            Original & Result
            </Media>
            <MyImage  src={elements[2].src} alt={elements[2].alt}  className="center" />  
            <Media className="figure-caption"> Figure 3. The original design of the phone case</Media>
            <MyImage  src={elements[3].src} alt={elements[3].alt}  className="center" />    
            <Media className="figure-caption"> Figure 4. The new design with lattice structure. </Media>
          </Media>
        </div>
        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <Media heading>
            Section II: Renderings
            </Media>
            <MyImage   src={elements[4].src} alt={elements[4].alt}   className="center" style={{width:'70%'}}/>    
            <Media className="figure-caption"> Figure 5. Renderings with screen </Media>          </Media>
        </div>
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default LatticeProject;   