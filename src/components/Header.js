import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);

        this.state = {
            isOpen: false,
        };
    }
    UNSAFE_componentWillMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    closeNavbar() {
        this.setState({
            isOpen: false
        });
    }
    handleClickOutside(event) {
        const t = event.target;
        if (this.state.isOpen && !t.classList.contains('navbar-toggler')) {
            this.closeNavbar();
        }
    }

    render() {
        return(
            <div ref={(node) => this.setWrapperRef = node}>
                
                <Navbar light expand="md" fixed="top" color="white" style={{height: "80px"}} >
                    <div className="container">
                        
                        <NavbarBrand className="mr-auto brand" href="/" style={{minWidth: '100px', fontSize:'20pt', fontWeight:'bold', marginLeft:"40px"}}>
                            Tim Wang
                        </NavbarBrand>
                        
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse  isOpen={this.state.isOpen} navbar style={{paddingLeft:'30px', paddingRight:"20px" ,background:'white'}} >
                            <Nav navbar className="ml-auto">
                            <NavItem style={{minWidth: '120px',fontSize:'15pt',fontWeight:'500'}}>
                                <NavLink className="nav-link"  to='/home' onClick={this.closeNavbar}> Home</NavLink>
                            </NavItem>
                            <NavItem style={{minWidth: '120px',fontSize:'15pt',fontWeight:'500'}}>
                                <NavLink className="nav-link" to='/gallery' onClick={this.closeNavbar}> Gallery</NavLink>
                            </NavItem>
                            <NavItem style={{minWidth: '120px',fontSize:'15pt',fontWeight:'500'}}>
                                <NavLink className="nav-link" to='/about' onClick={this.closeNavbar}> About</NavLink>
                            </NavItem>
                            <NavItem style={{minWidth: '120px',fontSize:'15pt',fontWeight:'500'}}>
                                <NavLink className="nav-link" to='/journal' onClick={this.closeNavbar}> Course Projects</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header

