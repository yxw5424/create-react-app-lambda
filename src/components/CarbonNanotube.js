import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import Rowheader from './RowHeader';


// Create new plugin instance


const ref =  {
    title:"Vibration Simulation of Carbon Nanotube",
    img:"gallery/art455.jpg",
    alt:"Digital Painting",
    description:"Besides painting on the canvase, I enjoyed more doing it digitally! The technology nowadays has chnaged the way to create content and provide very strong functions that enable us create anything more freely. The works shown here were done for my hobbies, personal projects, or school events."
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
        <div className="col " style={{textAlign:"center",}}> 
            { 
              elements.map((ele)=>{
                
                return (
                  
                  <MyImage src={ele.src} alt={ele.alt} className="center col" />  
                 
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