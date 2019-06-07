import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SingleSkill from './SingleSkillComponent'
import Projects from './ProjectsComponent'
import Experience from './WorkExperienceComponent'

class Home extends Component {
    state={
        projectIndex:0
    }
    componentDidMount () {
       this.setState=({projectIndex:getRandomInt(0,this.props.Projects.Projects.length-1)}) 
    }

    renderSkills(){
        if(this.props.Skills.isLoading){
            return(<div>Loading</div>)
        }else{
           return(this.props.Skills.Skills.sort((a,b)=>b.rating-a.rating).filter((i,idx) =>idx<5).map((Skill,index)=>{
           return(<SingleSkill skill={Skill} />)}))
        }
    }
    render(){
        return(<Container>
            <Row style={{paddingBottom:100}}>
                <Col>
                    <div>Top Skills</div>
                    <div>
                    {this.renderSkills()}
                    </div>
                    <div>
                    <NavLink className="nav-link" to="/skills">
                                <span className="fa fa-info fa-lg"></span>More..
                            </NavLink>
                    </div>
                </Col>
            </Row>
            <Row style={{paddingBottom:100}}>
                <Col>
                    <div>Random Project</div>
                    <div>
                    <Projects isLoading={this.props.Projects.isLoading} noVideos skills={this.props.Skills}  Projects={this.props.Projects} project={this.props.Projects.Projects[this.state.projectIndex]}/>
                    </div>
                </Col>
            </Row>
            <Row style={{paddingBottom:100}}>
                <Col>
                    <div>Experience</div>
                    <div>
                        <Experience company="Typhon Pacific Studios" position="Full Stack Developer" />
                        <Experience company="Various Casinos" position="Table Games Dealer" />
                    </div>
                </Col>
            </Row>
            </Container>)
    }
}

const mapStateToProps = state => {
    return {
        Projects: state.Projects,
        Skills: state.Skills,
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default connect(mapStateToProps,null) (Home)