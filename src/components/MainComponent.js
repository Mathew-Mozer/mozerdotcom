import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { Router, Route, Switch,Redirect } from "react-router";
import MMNavBar from './NavBarComponent'
import Home from './HomeComponent'
import PastProjects from './PastProjectsComponent'
import CurrentProjects from './CurrentProjectsComponent'
import Hobbies from './HobbiesComponent'
import Skills from './SkillsComponent'

function Header () {
    return(
        <div>
                    
        <Jumbotron style={{marginBottom:0}}>
            <h1 className="display-3">My name is Mathew</h1>
            <p className="lead">Full-Stack Developer</p>
            <p className="lead">
                <Button color="primary">Contact</Button>
            </p>
        </Jumbotron>
        <MMNavBar />
    </div>
    )
}

class Main extends Component {

    render() {
        return (
            <div>
              <Header />
            <Switch location={this.props.location}>
              <Route path='/home' component={Home} />
              <Route path='/skills' component={Skills} />
              <Route path='/past' component={PastProjects} />
              <Route path='/current' component={CurrentProjects} />
              <Route path='/hobbies' component={Hobbies} />
              <Redirect to="/home" />
            </Switch>
            </div>
        )
    }
}

export default Main