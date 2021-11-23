import React from 'react';
import Rowheader from './RowHeader';
import { Media, Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import YoutubeEmbed from "./YoutubeEmbed";



const ref =  {
  title:"Robotics Studio",
  img:"Robotics/robot_cover_img.jpeg",
  alt:"latticephonecase",
  description:"In this project, I built a walking and dancing robot with 8 motors from sketch to final assembly. CAD modeling was done by Solidworks and rendered in Keyshot. To Train my robot to walk I used pybullet to build a environment and trained in gym library with DDPG agent. Besides the trainning, I designed the locomotion pattern for my robot to walk, and optimized it by hillclimbing algorithom. The details are shown below. "
}

const elements = [
  {
    src: "Robotics/sketch1.jpg",
    alt: 'sketch1',
    id: 1,
    width: 1920,
    height: 'auto'
  },
  {
    src: "Robotics/sketch3.jpg",
    alt: 'sketch3',
    id:2,
    width: 1024,
    height: 'auto'
  },
  {
    src: "Robotics/sketch2.jpg",
    alt: 'sketch2',
    id: 3,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/sketch4.jpg",
    alt: 'sketch4',
    id: 4,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/preliminary_design.JPG",
    alt: 'general view',
    id: 5,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/explode_view.PNG",
    alt: 'explode view',
    id: 6,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/close_up_view.JPG",
    alt: 'close up view',
    id: 7,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/BOM.JPG",
    alt: 'BOM',
    id: 8,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/robotrender1.png",
    alt: 'BOM',
    id: 9,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/robotrender2.jpeg",
    alt: 'BOM',
    id: 10,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/robotrender3.jpeg",
    alt: 'BOM',
    id: 11,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/printlapse.gif",
    alt: 'timelapse',
    id: 12,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/assembly.gif",
    alt: 'assembly',
    id: 12,
    autoplay: false,
    showControls: true
  },
  {
    src: "Robotics/Assembbled_view.JPG",
    alt: 'assembly',
    id: 13,
    autoplay: false,
    showControls: true
  },{
    src: "Robotics/electronics.JPG",
    alt: 'assembly',
    id: 14,
    autoplay: false,
    showControls: true
  }

]

function RobotProject() {
  
    return(
      <SRLWrapper elements={elements}>
       
        <nav class="floating-menu">
          <div className="nav">
          <h3 style={{alignSelf:'center'}}>Floating Menu</h3>
          <li><a className="col-3 col-sm-12" style={{fontSize:'18px',fontWeight:'500',}} href="#section 1">Section I: Sketches</a></li>
          <li><a className=" col-3 col-sm-12" style={{fontSize:'18px',fontWeight:'500'}} href="#section 2">Section II: CAD</a></li>
          <li><a className="col-3 col-sm-12" style={{fontSize:'18px',fontWeight:'500'}} href="#section 3">Section III: 3D Printed and Assembled</a></li>
          <li><a className="col-3 col-sm-12" style={{fontSize:'18px',fontWeight:'500'}} href="#section 4">Section IV: Baby Step & Optimizing Locomotion Pattern</a></li>
          </div>
        </nav>  
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        
        <div class="row row-content " style={{textAlign:"left",}}> 
          <Media body>
            <h1 ><a  href="/#" name = "section 1">Section I: Sketches</a></h1>
            <Media className='subtitle'>
            Sketches in Procreate
            </Media>
            <Media className="paragraph">
              Before actually doing something, I did lots of researches on walking mechanism, 2 leg walking robot, spider robot and so on. Since the number of motors is limited in this project, so I chose to do a easy-balancing 4 leg robot. Some preliminary sketches and renderings are shown below.
            </Media>

            <MyImage src={elements[0].src} alt={elements[0].alt} className="center" />  
            <Media className="figure-caption"> Sketch 1. 2-leg walking robot </Media>

            <MyImage  src={elements[1].src} alt={elements[1].alt}  className="center" />    
            <Media className="figure-caption"> Sketch 2. 2-leg walking robot </Media>

            <MyImage  src={elements[2].src} alt={elements[2].alt}  className="center" /> 
            <Media className="figure-caption"> Sketch 3. 4-leg robot with walking mechnism legs</Media>

            <MyImage  src={elements[3].src} alt={elements[3].alt}  className="center" />    
            <Media className="figure-caption"> Sketch 4. 4-leg robot inspired by an image of spider </Media>
          </Media>
        </div>
        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <h1><a href="/#" name = "section 2">Section II: CAD</a></h1>
              <Media className='subtitle'>
              Preliminary Designs
              </Media>
              <Media className="paragraph">
                The following design was based on sketch 4. I used Solidworks Elctrical add-in to manage the wires.
              </Media>

              <MyImage   src={elements[4].src} alt={elements[4].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 5. General view </Media>  
              <MyImage   src={elements[5].src} alt={elements[5].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 6. Explode view </Media>     
              <MyImage   src={elements[6].src} alt={elements[6].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 7. close up view</Media>    
              <MyImage   src={elements[7].src} alt={elements[7].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 8. BOM </Media> 
              <Media className='subtitle'>
              Rendering in Keyshot
              </Media>    
              <MyImage   src={elements[8].src} alt={elements[8].alt}   className="center" style={{width:'70%'}}/>    
              
              <MyImage   src={elements[9].src} alt={elements[9].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 9. renders in Keyshot </Media>  
              <MyImage   src={elements[10].src} alt={elements[10].alt}   className="center" style={{width:'70%'}}/>  
              <Media className="figure-caption"> Figure 10. Render with context </Media>        
          </Media>
        </div>

        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <h1><a  href="/#" name = "section 3">Section III: 3D Printed and Assembled</a></h1>
              <Media className='subtitle'>
              3D printed with Ender 3 PRO
              </Media>
              <Media className="paragraph">
                3D printing of the body took almost 2 weeks to finish. To get a better timelapse, I installed a raspberrypi on my printer with Octopi OS. The cool "Octolapse" is shown below. The original CAD file was carefully built so that I did not spend much time on debugging the CAD file. But for wiring, it did spend me days to solder and measure to get the wires perfectly fit in the robot body. 
              </Media>
              <MyImage   src={elements[11].src} alt={elements[11].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 11. 3D printing timelapse </Media>  
              <MyImage   src={elements[12].src} alt={elements[12].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 12. Assembling legs </Media> 
              <MyImage   src={elements[14].src} alt={elements[14].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 13. Electronics installed and proper routed </Media>       
              <MyImage   src={elements[13].src} alt={elements[13].alt}   className="center" style={{width:'70%'}}/>    
              <Media className="figure-caption"> Figure 13. Assembled Robot </Media>     
             
                     
          </Media>
        </div>
        <div class="row row-content" style={{textAlign:"left"}}> 
          <Media body>
            <h1><a href="/#" name = "section 4">Section IV: Baby Step, Simulation & Optimization</a></h1>
              <Media className="paragraph">
                I took an easy way to make my robot walk, which is hand-coding the locomotion pattern and optimizing it with hillclimbing algorithom. All motor was controlled by one simple equation A + B * sin( w * t + C ) with different time condition. Then I generated URDF file from Solidworks and imported it into Pybullet to do the simulation. At the beginning, the simulation looked floppy and sketchy. I adjusted the material properties regarding the infill percentage of 3D printed parts, the simulation looked closer to the real world physics. The Following video will show the process.

              </Media>
              <YoutubeEmbed embedId="dRrTST9wG3k" />   

              <Media className="paragraph" href="/#">
                I am still working on the optimization and the future update will be posted here. Also, I am planing to remix the wireless controller as a side project to control the robot remotely, the details can be refered to my other project <a href="/#">controller remix</a>
              </Media>      
          </Media>
        </div>

        
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default RobotProject;   