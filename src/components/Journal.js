import React,{ useState} from 'react';
import { Button } from 'reactstrap';
import LoadPDF from './LoadPDF';

const projects=[
  {
    projectName: 'Topology Optimization',
    projectFile:'PDFs/topology_report.pdf'
  },
  {
    projectName:'Puzzle Box',
    projectFile:'PDFs/Final.pdf'
  },
  {
    projectName:'Climbing Wall Delivery Robot',
    projectFile:'PDFs/ClimbingWallRobot.pdf'
  },
  {
    projectName:'Lampshade Design',
    projectFile:'PDFs/lampshade_report.pdf'
  },
]

function Journal() {
    const [project,setProject]=useState(projects[0].projectFile)
    return(
      <div className="container" >
        <nav className="floating-menu" style={{height:"80px"}}>
          <div className="nav">
            <ul className='row'>
              { projects.map((ele)=>{
                const { projectName,projectFile } = ele;
                return (
                <li className="col-3 col-sm-3"><button style={{fontWeight: projectFile === project ? "bold" : "300" , fontSize: "10pt"}}className="button" onClick={()=>setProject(projectFile)}>{projectName}</button></li>
              )
              })}
            </ul>
          </div>
        </nav> 
   

        <div style={{paddingTop:'80px'}}> 
          <LoadPDF  file = {project} isScroll={true}/>
        </div>
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
    );
}

export default Journal;   