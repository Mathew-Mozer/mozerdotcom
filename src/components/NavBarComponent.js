import React, { Component } from 'react'
import { Navbar, Nav, Collapse, NavItem, NavbarToggler, NavbarBrand, Badge,UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle } from 'reactstrap'
import { connect } from 'react-redux';
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
                    <Badge color="primary">MM</Badge>
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
                                <DropdownMenu left={'true'}>
                                {this.props.Projects.Projects.filter(item=>item.current).map((item,key)=>
                                    <DropdownItem key={key}>
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
                                {this.props.Projects.Projects.filter(item=>!item.current).map((item,key)=>
                                    <DropdownItem key={key}>
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
                                {this.props.Projects.Projects.filter(item=>item.current).map((item,key)=>
                                    <DropdownItem key={key}>
                                    <NavLink className="nav-link" to={`/projects/${item.id}`}>
                                <span className="fa fa-info fa-lg"></span>d{item.name}
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
                                {this.getLanguages().map((item,key)=>
                                    <DropdownItem key={key}>
                                    <NavLink className="nav-link" to={`/snippets/${item}`}>
                                <span className="fa fa-info fa-lg"></span>{item}
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

const mapDispatchToProps = (dispatch) => ({
    
  })

const mapStateToProps = state => {
    return {
        Projects: state.Projects,
        Skills: state.Skills,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MMNavBar)


