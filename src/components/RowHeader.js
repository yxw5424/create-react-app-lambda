import React from 'react';
import { Row } from 'reactstrap';


const Rowheader = ({title,img,alt,description}) => {
    return(
        <div class="row " style={{paddingTop:"50px", paddingBottom:"50px", textAlign:"left", overflow:'hidden'}}>
            <div class="col-12 col-sm-12 col-md-6" >
                <div class="card-content"  >          
                    <img class=".img-fluid" src={img}  alt ={alt} style={{maxHeight:'300px', width:"100%",objectFit:"scale-down"}}/>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 d-flex justify-content-center" style={{padding: '70px 0'}} >
                <Row>
                    <h1  >{title}</h1>

                    <p >{description}</p>
                </Row> 
              
            </div>
        </div>
    )
}

export default Rowheader;