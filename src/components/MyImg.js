import React, { useState, useRef }from 'react';
import { Spinner } from 'reactstrap';

function  MyImg({src,alt,style}) {
    const [loading, setLoading] = useState(true);
    const counter = useRef(0);
    const imageLoaded = () => {
        counter.current += 1;
        if (counter.current >= src.length) {
        setLoading(false);
        }
    }
  
    return(
        <div >
            <Spinner style={{display: loading ? "none" : "block"}}/>
            <img  src={src} alt={alt}  class="center" style={style} onLoad={imageLoaded}/> 
            
        </div>   
    );
}

export default MyImg;   