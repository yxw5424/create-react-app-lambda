import React from 'react';
import { NavLink } from 'react-router-dom';


function FooterComponent() {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-6 offset-1 col-sm-4">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><NavLink style={{textAlign:'left', color:'white'}} className="nav-link" to="/home" >Home</NavLink></li>
                    <li><NavLink style={{textAlign:'left', color:'white', marginTop: '-1em', marginLeft:'0em'}} className="nav-link" to="/home" >Contact me</NavLink></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-5">
                    <h5>Address</h5>
                    <address style={{marginLeft:'2em'}}>
		              550 W 54th st,<br />
		              New York City, NY,<br />
		              10019<br />
		              <i className="fa fa-phone fa-lg" style={{color:'#FFF0BA'}} ></i>: +852 1234 5678<br />
		              <i className="fa fa-envelope fa-lg" style={{color:'#FFF0BA'}}></i>: <a style={{textDecoration:'none', color:'white'}} href="mailto:confusion@food.net">
                         yxw5424@hotmail.com</a>
                    </address>
                </div>
                {/* <div className="col-8 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    )
}

export default FooterComponent;