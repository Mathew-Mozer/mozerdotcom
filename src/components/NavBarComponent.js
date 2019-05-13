import React, { Component } from 'react'
import { Navbar,Nav, Collapse, NavItem, NavbarToggler } from 'reactstrap'
import { NavLink } from 'react-router-dom';

class MMNavBar extends Component {
    state = {
        isNavOpen:false
    }
    render(){
        return(
        <Navbar bg="light" expand="lg">
            <NavbarToggler aria-controls="basic-navbar-nav" />
            <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                    <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span>Home
                            </NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink className="nav-link" to="/skills">
                                <span className="fa fa-info fa-lg"></span>Skills
                            </NavLink>
                    </NavItem>
                    <NavItem>
                            <NavLink className="nav-link" to="/current">
                                <span className="fa fa-info fa-lg"></span>Current Projects
                            </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/past">
                            <span className="fa fa-info fa-lg"></span>Past Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/hobbies">
                            <span className="fa fa-info fa-lg"></span>Hobbies
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        )
    }
}

export default MMNavBar

                        
                        