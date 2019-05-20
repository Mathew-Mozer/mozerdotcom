import React, { Component } from 'react'
import { Navbar, Nav, Collapse, NavItem, NavbarToggler, NavbarBrand, Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle } from 'reactstrap'
import { NavLink } from 'react-router-dom';
import { Projects, snippets } from '../data'

class MMNavBar extends Component {
    state = {
        isNavOpen: false
    }
    toggleNav() {
        console.log("clicked")
        this.setState((prevState, props) => ({
            isNavOpen: !this.state.isNavOpen
        }));
    }
    getLanguages(){
        var langs = []
        snippets.forEach(snip=>{
            if(!langs.includes(snip.language))
            langs.push(snip.language)
        })
        return(langs)
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <NavbarBrand className='mr-auto' href="/">
                    <Badge href="/" color="primary">MM</Badge>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNav} />
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
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Current Projects
                            </DropdownToggle>
                                <DropdownMenu left>
                                {Projects.filter(item=>item.current).map(item=>
                                    <DropdownItem>
                                    <NavLink className="nav-link" to={`/projects/${item.id}`}>
                                <span className="fa fa-info fa-lg"></span>{item.name}
                            </NavLink>
                                    </DropdownItem>
                                    )}
                                    
                                   
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Past Projects
                            </DropdownToggle>
                                <DropdownMenu left>
                                {Projects.filter(item=>!item.current).map(item=>
                                    <DropdownItem>
                                    <NavLink className="nav-link" to={`/projects/${item.id}`}>
                                <span className="fa fa-info fa-lg"></span>{item.name}
                            </NavLink>
                                    </DropdownItem>
                                    )}
                                    
                                   
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/hobbies">
                                <span className="fa fa-info fa-lg"></span>Hobbies
                        </NavLink>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Guides
                            </DropdownToggle>
                                <DropdownMenu left>
                                {Projects.filter(item=>item.current).map(item=>
                                    <DropdownItem>
                                    <NavLink className="nav-link" to={`/projects/${item.id}`}>
                                <span className="fa fa-info fa-lg"></span>{item.name}
                            </NavLink>
                                    </DropdownItem>
                                    )}
                                    
                                   
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                        <NavItem>
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Snippets
                            </DropdownToggle>
                                <DropdownMenu left>
                                {this.getLanguages().map(snip=>
                                    <DropdownItem>
                                    <NavLink className="nav-link" to={`/snippets/${snip}`}>
                                <span className="fa fa-info fa-lg"></span>{snip}
                            </NavLink>
                                    </DropdownItem>
                                    )}
                                    
                                   
                                    </DropdownMenu>
                            </UncontrolledDropdown>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}

export default MMNavBar


