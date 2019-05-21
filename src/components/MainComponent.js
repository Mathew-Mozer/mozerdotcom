import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
import { Router, Route, Switch,Redirect } from "react-router";
import { connect } from 'react-redux';
import MMNavBar from './NavBarComponent'
import Home from './HomeComponent'
import Projects from './ProjectsComponent'
import Hobbies from './HobbiesComponent'
import Skills from './SkillsComponent'
import Snippets from './SnippetsComponent';
import { getProjects,getSkills } from '../redux/ActionCreators'

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

        componentDidMount(){
            this.props.getProjects();
            this.props.getSkills();
        }

    render() {
        return (
            <div>
              <Header />
            
            <Switch location={this.props.location}>
              <Route path='/home' component={Home} />
              <Route path='/skills' render={(props)=><Skills Skills={this.props.Skills}/>} />
              <Route path='/projects/:id' render={(props)=><Projects isLoading={this.props.Projects.isLoading} skills={this.props.Skills}  Projects={this.props.Projects} project={this.props.Projects.Projects.filter(item => props.match.params.id===item.id)[0]}/>} />
              <Route path='/snippets/:language' component={Snippets} />
              <Route path='/hobbies' component={Hobbies} />
              <Redirect to="/home" />
            </Switch>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    getProjects: () => dispatch(getProjects()),
    getSkills: () => dispatch(getSkills())
  })

const mapStateToProps = state => {
    return {
        Projects: state.Projects,
        Skills: state.Skills,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)