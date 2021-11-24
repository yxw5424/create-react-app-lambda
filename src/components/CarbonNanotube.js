import { Button } from 'reactstrap';
import MyImage from './MyImage';
import { SRLWrapper } from 'simple-react-lightbox';
import Rowheader from './RowHeader';
import React, { useState } from 'react';

// using CommonJS modules

// using CommonJS modules
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Create new plugin instance


const ref =  {
    title:"Vibration Simulation of Carbon Nanotube",
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

function MyApp({file}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };
  
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="center">
      <Document
            className="center"
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {
              Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                  />
                ),
              )
            }
          </Document>
     
    </div>
  );
}

function CarbonNanotube() {
  
    return(
      <SRLWrapper elements={elements}>  
      <div className="container">
        <Rowheader title={ref.title} img={ref.img} alt={ref.alt} description={ref.description}/>
        <div className="row row-content " style={{textAlign:"center",}}> 
           
           <MyApp   file="/PDFs/ME461.pdf"/>
        </div>
        <Button style={{margin:'30px'}} outline  color="secondary" onClick={()=>window.scrollTo(0, 0)}>Back To Top</Button>
      </div>
      </SRLWrapper>
    );
}

export default CarbonNanotube;   