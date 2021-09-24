import React from 'react';
import  ImageLoader  from 'react-loading-image';
import { Spinner } from 'reactstrap';


function MyImage({src,alt,className,id,style}){
    return(
    <ImageLoader className={className} src={src} alt ={alt} loading={() => <Spinner type="grow" color="dark" children={''}/>}
              error={() => <div>Error</div>}  id={id} style={style}/>
    )
}


export default MyImage;