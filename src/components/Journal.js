import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import ASSIGNMENT1 from "./Robotics/ASSIGNMENT1.pdf" ;

function LoadPDF({PDF}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={PDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}



const Image =({src}) => {
  return(
    <div className="col-12 col-sm-12 col-md-6" >
      <div className="card-content" >          
        <img src={src } alt ="image"/>
      </div>
    </div>
  )
}

const Description=()=>{
  return(
    <div className="col-12 col-sm-12 col-md-6">
      <div className="container" >          
        <h1 className="about-title">Robot Studio - Sketch</h1>
        <div className="about-container">
        <p className="about-para">As a graduate student in mechanical engineering, my mission is to create safe, easy-to-use products to help users accomplish tasks efficiently.</p>
        <p className="about-para">Because both my father and grandfather work in the industry, my enthusiasm for robotics and mechanic had been raised since my childhood. As a mechanical engineer, I want to develop more user friendly products to improve the quality of human life and development of the society. The biggest goal of my career is to produce products that can promote the industry and change the world like iPhone. The goal of my career is to design clean energy products and promote an industry that can improve people's life like tesla, apple, etc.</p>
        <p className="about-para">I am very honored to be a member of the mechanical engineering community and hope that one day through the efforts of our community, everyone can enjoy the powerful still environmentally friendly product.</p>
        </div>
      </div>
    </div>
  )
}


function Journal() {
    return(
      <div className="container" style={{paddingTop:"50px", paddingBottom:"50px"}}>
        <div className="row">
          <Image src={"Robotics/BUZZ-BOT_SKETCHES.png"} />
          <Description/>
          <LoadPDF PDF={<ASSIGNMENT1/>}/>
          
        </div>
      </div>
    );
}

export default Journal;   