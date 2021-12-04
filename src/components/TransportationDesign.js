import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';




function GetImages() {
  const elements = []
  for (let i=0 ;i <19; i++){
    let temp={
      src: "transportationPortfolio/TransportationDesignPortfolio-"+String(i+1)+".jpg",
      alt: 'sketch'+String(i),
      id: i,
      width: 2400,
      height: 'auto',
      showControls: true
    }
    elements.push(temp)
  }
  return elements
}

const elements = GetImages()

function TransportationDesign() {
  
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

export default TransportationDesign;   