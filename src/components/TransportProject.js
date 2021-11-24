import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';


const elements = [
  
  {
    src: "transportation/UTOPIA1.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA2.jpg",
    alt: 'sketch1',
    id: 2,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA3.jpg",
    alt: 'sketch1',
    id: 3,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA4.jpg",
    alt: 'sketch1',
    id: 4,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA5.jpg",
    alt: 'sketch1',
    id: 5,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA6.jpg",
    alt: 'sketch1',
    id: 6,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA7.jpg",
    alt: 'sketch1',
    id: 7,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA8.jpg",
    alt: 'sketch1',
    id: 8,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA9.jpg",
    alt: 'sketch1',
    id: 9,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA10.jpg",
    alt: 'sketch1',
    id: 10,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA11.jpg",
    alt: 'sketch1',
    id: 11,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "transportation/UTOPIA12.jpg",
    alt: 'sketch1',
    id: 12,
    width: 1920,
    height: 'auto',
    showControls: true
  },

  
]

function TransportProject() {
  
    return(
      <SRLWrapper elements={elements}>  
      <div className="container">
        
        <div class="row row-content " style={{textAlign:"left",}}> 
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

export default TransportProject;   