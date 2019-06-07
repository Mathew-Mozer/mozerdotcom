import React, { Component } from 'react'
import { Jumbotron, Button,Container,Row,Col } from 'reactstrap'
import { Router, Route, Switch,Redirect } from "react-router";
import { connect } from 'react-redux';
import MMNavBar from './NavBarComponent'
import Home from './HomeComponent'
import Projects from './ProjectsComponent'
import Hobbies from './HobbiesComponent'
import Skills from './SkillsComponent'
import Snippets from './SnippetsComponent';
import { getProjects,getSkills,getExperience } from '../redux/ActionCreators'

function Header (props) {
    return(
       
        <div className="sticky-top">            
        <Jumbotron style={{marginBottom:0,padding:props.shrink?'0 0':'2em 1em'}}>
            <Container>
                <Row>
                    <Col md={props.shrink?7:12}><h1 className="display-3">Mathew Mozer</h1></Col>
                    <Col md={props.shrink?3:12} className="align-self-center"><p className="lead align-middle my-auto">Full-Stack Developer</p></Col>
                    <Col md={props.shrink?2:12} className="align-self-center"><p className="lead">
                <Button color="primary">Contact</Button>
            </p></Col>
                </Row>
            </Container>
            
            
            
        </Jumbotron>
        <MMNavBar />
    </div>
    )
}

class Main extends Component {
        state = {
            shrink:false
        }
        componentDidMount(){
            window.addEventListener('scroll', this.handleScroll);
            this.props.getProjects();
            this.props.getSkills();
            this.props.getExperience();
        }

        handleScroll = (event) =>{
            let scrollTop = window.pageYOffset;
            if(scrollTop>15){
                this.setState({shrink:true})
            }else if(scrollTop===0){
                this.setState({shrink:false})
            }
         }

    render() {
        
        return (
            <div>
              <Header shrink={this.state.shrink} />
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
    getSkills: () => dispatch(getSkills()),
    getExperience: () => dispatch(getExperience())
  })

const mapStateToProps = state => {
    return {
        Projects: state.Projects,
        Skills: state.Skills,
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Main)