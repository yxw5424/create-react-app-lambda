import React from 'react';
import Rowheader from './RowHeader';
import { Media, Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import YoutubeEmbed from "./YoutubeEmbed";



const ref =  {
  title:"Controller Remix",
  img:"controller/controller_header.jpg",
  alt:"controller_cover",
  description:"This is actually a sub-project of my robot project. I used raspberry pi wireless controller to control my robot; However, I want controller's apperance to match my robot's concept. So, I remix it! Here is the progress... "
}

const elements = [
  {
    src: "controller/controller_sketch.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1400,
    height: 'auto'
  },
  {
    src: "controller/controller1.jpg",
    alt: 'controller1',
    id:2,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/controller2.jpg",
    alt: 'controller2',
    id:3,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/controller_cad.png",
    alt: 'controller_cad',
    id:4,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/Assem_controller.gif",
    alt: 'controllerAssem',
    id:5,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/controller_header.jpg",
    alt: 'controller_header',
    id:6,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/controller_3dprinted.jpg",
    alt: 'controller_3dprinted',
    id:7,
    width: 1024,
    height: 'auto'
  },
  {
    src: "controller/controller_sand&painted.jpg",
    alt: 'controller_sand&painted',
    id:8,
    width: 1024,
    height: 'auto'
  },






]

function Controller() {
  
    return(
      <SRLWrapper elements={elements}>
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        <div class="row row-content " style={{textAlign:"left",}}> 
          <Media body>
            <h1 id="section 1">Section I: Sketches</h1>
            <Media className='subtitle'>
            Sketches in Procreate
            </Media>
            <Media className="paragraph">
              The original controller link is here: <a href="https://www.amazon.com/Controller-iNNEXT-Compatible-Raspberry-Rechargeable/dp/B07XXQPLBW">https://www.amazon.com/Controller-iNNEXT-Compatible-Raspberry-Rechargeable/dp/B07XXQPLBW</a>. And, I hope you enjoy the sketch timelapse.
            </Media>

            <YoutubeEmbed embedId="FonFUI-U2XI" />  
          </Media>
        </div>
        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <h1 id="section 2">Section II: CAD</h1>
              <MyImage   src={elements[3].src} alt={elements[3].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 1. CAD assembly in Solidworks </Media>  
              <MyImage   src={elements[4].src} alt={elements[4].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 2. Explode View </Media>  
              <MyImage   src={elements[1].src} alt={elements[1].alt}   className="center" style={{width:'70%'}}/>   
              <MyImage   src={elements[2].src} alt={elements[2].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 3. Renderings </Media>  
                  
          </Media>
        </div>

        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <h1 id="section 3">Section III: 3D Printed and Assembled</h1>
              <Media className='subtitle'>
              I am still working on the final touch to make it identical to my original sketch, the icons and stickers will be add on soon! The following will show the current progress
              </Media>
              <MyImage   src={elements[6].src} alt={elements[6].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 4. 3D printed by Ender 3 Pro </Media>  
              <MyImage   src={elements[7].src} alt={elements[7].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 5. controller case sanded and painted</Media>  
              <MyImage   src={elements[5].src} alt={elements[5].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 6. Comparison between sketch and current apperance </Media>  
              


              <Media className='subtitle'>
              will update the rest of the progress after the Christmas!s
              </Media>
       
             
                     
          </Media>
        </div>
      

        
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default Controller;   