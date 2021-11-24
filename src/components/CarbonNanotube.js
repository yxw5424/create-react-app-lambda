import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import Rowheader from './RowHeader';


// Create new plugin instance


const ref =  {
    title:"Vibration Simulation of Carbon Nanotube",
    img:"ME461/carbon_nanotube.jpeg",
    alt:"carbon_nanotube",
    description:"This project is about implementing FEA method on simulation of carbon nanotube. I utilized matlab to develop a system that is close to 3D Frame. It can describe the structure and property of the carbon nanotube. The report is shown following."
  }
const elements = [
  
  {
    src: "ME461/ME461-1.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-2.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-3.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },

 
  {
    src: "ME461/ME461-4.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-5.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-6.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-7.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "ME461/ME461-8.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
 
  // {
  //   src: "gallery/gallery_car1.jpg",
  //   alt: 'sketch1',
  //   id: 1,
  //   width: 1920,
  //   height: 'auto',
  //   showControls: true
  // },

  
]


function CarbonNanotube() {
  
    return(
      <SRLWrapper elements={elements}>  
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        <div className="row row-content " style={{textAlign:"center",}}> 
            { 
              elements.map((ele)=>{
                
                return (
                  
                  <MyImage src={ele.src} alt={ele.alt} className="center col-12 " />  
                 
                )
              })
            }
          
        </div>
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default CarbonNanotube;   