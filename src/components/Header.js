import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar light expand="md" fixed="top" color="white" style={{height: "80px"}} >
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" style={{minWidth: '100px', fontSize:'20pt', fontWeight:'bold'}}>
                            Timothy Wang
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar style={{paddingLeft:'30px', paddingRight:"20px"}}>
                            <Nav navbar className="ml-auto">
                            <NavItem >
                                <NavLink className="nav-link"  to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem >
                                <NavLink className="nav-link" to='/project'> Project</NavLink>
                            </NavItem>
                            {/* <NavItem style={{minWidth: '120px',fontSize:'15pt',fontWeight:'500'}}>
                                <NavLink className="nav-link" to='/gallery'> Gallery</NavLink>
                            </NavItem> */}
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
            {/* <div className="container" style={{marginTop:"80px", marginBottom:'40px'}}> */}
            <div className="container" >
                <div className="row row-header">
                    <div className="col-12 col-sm-8" style={{textAlign:"left"}}>
                        <div className="container welcome">
                            <h1>Hello, I'm Tim.</h1>
                            <h1>A Enginner & Designer</h1>
                            <h1>Welcome to my Portfolio!</h1>
                            <p>Currently available for select projects, collaborations and consulting </p>
                        </div>
                    </div>
                </div>
            </div>
        </Jumbotron>
                
            </div>
        );
    }
}

export default Header