import React, { useState } from 'react';

// using CommonJS modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



// using CommonJS modules
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
function LoadPDF({file, isScroll= true}) {
    const [numPages, setNumPages] = useState(null);
    const [pageNum, setPageNum] = useState(1)
    
    const options = {
      cMapUrl: 'cmaps/',
      cMapPacked: true,
    };
    
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    return (
      <div className="horicenter">
        <Document
              className="horicenter "
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              { isScroll?
                Array.from(
                  new Array(numPages),
                  (el, index) => (
                    <Page
                      className="center"
                      key={`page_${index + 1}`}
                      pageNumber={index + 1}
                    />
                  ),
                ):
                <Page 
                  pageNumber={pageNum}
                />
              }

            </Document>
          {isScroll?
          null:
            <p>
            { pageNum > 1 ?
              <button className="button" onClick={()=>setPageNum(pageNum- 1)}><FontAwesomeIcon icon={solid('angle-left')} /> </button>: null 
            }
               Page {pageNum} of {numPages} 
            { pageNum < numPages ?
              <button className="button" onClick={()=>setPageNum(pageNum+1)}><FontAwesomeIcon icon={solid('angle-right')} /> </button> : null 
            }
            </p>
          }
      </div>
    );
  }
  
  export default LoadPDF;