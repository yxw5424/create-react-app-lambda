import React, { useState } from 'react';

// using CommonJS modules

// using CommonJS modules
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function LoadPDF({file}) {
    const [numPages, setNumPages] = useState(null);
    
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
  
  export default LoadPDF;