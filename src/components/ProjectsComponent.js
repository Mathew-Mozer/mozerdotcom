import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link,withRouter } from 'react-router-dom';
import SingleSkill from './SingleSkillComponent'

class CurrentProjects extends Component {
    
    renderTechnologyUsed() {
        if(this.props.skills.isLoading){
            return(<div>loading</div>)
        }
        return (<>
            <Row>
                <Col md={1}>Technology:&nbsp;
                {this.props.project.tech.map((tech) =>{
                    console.log("curproj",this.props.skills.Skills)
                    var curTech = this.props.skills.Skills.filter(item=>item.id===tech)[0]
                    return(<span style={{paddingRight:10,paddingLeft:10}}>{curTech.name}</span>)
                    })}
                </Col>
            </Row>
            </>
        )
    }
    renderRelatedProjects() {
        return (<Row><Col md={2}>Related Projects:</Col><Col>{this.props.project.relatedProjects.map((project) =>
             {  var theProject = this.props.Projects.Projects.filter((item)=>item.id===project)[0]
                return(<Link to={`/projects/${theProject.id}`}>{theProject.name}{" "}</Link>)
            }
        )}</Col></Row>)
    }
    renderVideos() {
        return (
            <>
                <Row><Col md={2}>Associated Videos:</Col></Row>
                <Row>
                    {this.props.project.videos.map(video =>
                        <Col><iframe width="450" height="275" title="d" src={video.youtube} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>)}
                </Row>
            </>
        )
    }
    renderDescription(){
        return(<Row>
            <Col>{this.props.project.description}</Col>
        </Row>)
    }
    render() {
        if(this.props.isLoading||this.props.name===""){
                return(
                    <div class="d-flex align-items-center">
           <strong>Loading...</strong>
           <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
         </div>
                )
        }else{
        return (<Container>
            <Row><Col><h2>{this.props.project.name}</h2></Col></Row>
            {this.props.project.description&&this.renderDescription()}
            {this.props.project.tech&&this.props.project.tech.length > 0 && this.renderTechnologyUsed()}
            {this.props.project.relatedProjects && this.props.project.relatedProjects.length > 0 && this.renderRelatedProjects()}
            {this.props.project.videos && !this.props.noVideos && this.props.project.videos.length > 0 && this.renderVideos()}
        </Container>)
        }
    }
}

export default withRouter(CurrentProjects)