import React from 'react';
import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import Rowheader from './RowHeader';

const ref =  {
    title:"Painting",
    img:"gallery/water_color1.jpeg",
    alt:"painting",
    description:"The followings are my favoriate works I have done during my high shcool and college years. The first three are water color painting and the remaining are oil painting "
  }
const elements = [
  
  {
    src: "gallery/water_color1.jpeg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/water_color2.jpeg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },

  {
    src: "gallery/water_color3.jpeg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/oil_painting1.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },
  {
    src: "gallery/oil_painting2.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto',
    showControls: true
  },


  
]

function Watercolor() {
  
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

export default Watercolor;   