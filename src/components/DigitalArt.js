import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import Rowheader from './RowHeader';

const ref =  {
    title:"Digital Painting",
    img:"gallery/art455.jpg",
    alt:"Digital Painting",
    description:"Besides painting on the canvase, I enjoyed more doing it digitally! The technology nowadays has chnaged the way to create content and provide very strong functions that enable us create anything more freely. The works shown here were done for my hobbies, personal projects, or school events."
  }
const elements = [
  
  {
    src: "gallery/art455.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/fp_portrait.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/gallery_avator.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },

 
  {
    src: "gallery/gallery_cat.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/gallery_car.jpg",
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

function DigitalArt() {
  
    return(
      <SRLWrapper elements={elements}>  
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        
        <div class="row row-content " style={{textAlign:"left",}}> 
            { 
              elements.map((ele)=>{
                
                return (
                  <MyImage src={ele.src} alt={ele.alt} className="center col" style={{margin:"5%"}}/>  
                 
                )
              })
            }

            

          
        </div>
        

        

        
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default DigitalArt;   