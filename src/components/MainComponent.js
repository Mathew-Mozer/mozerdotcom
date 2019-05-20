import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { Router, Route, Switch,Redirect } from "react-router";
import MMNavBar from './NavBarComponent'
import Home from './HomeComponent'
import CurrentProjects from './CurrentProjectsComponent'
import Hobbies from './HobbiesComponent'
import Skills from './SkillsComponent'
import Snippets from './SnippetsComponent';

function Header () {
    return(
        <div>
                    
        <Jumbotron style={{marginBottom:0}}>
            <h1 className="display-3">Mathew Mozer</h1>
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
              <Route path='/projects/:id' component={CurrentProjects} />
              <Route path='/snippets/:language' component={Snippets} />
              <Route path='/hobbies' component={Hobbies} />
              <Redirect to="/home" />
            </Switch>
            </div>
        )
    }
}

export default Main