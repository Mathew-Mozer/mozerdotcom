import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Projects } from '../data'
import { Link,withRouter } from 'react-router-dom';

class CurrentProjects extends Component {
    state = {
        project: {
            videos: []
        }

    }
    componentDidMount(){
        const { id } = this.props.match.params
        this.setState({ project: Projects.filter(item => +item.id === +id)[0] })
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
        const { id } = this.props.match.params
        this.setState({ project: Projects.filter(item => +item.id === +id)[0] })
        }
    }
    renderTechnologyUsed() {
        return (
            <Row>
                <Col md={1}>Technology:</Col><Col>{this.state.project.tech.map((tech) =>
                <a href={tech.link}>{tech.name}{" "}</a>
                    )}
                </Col>
            </Row>
        )
    }
    renderRelatedProjects() {
        return (<Row><Col md={2}>Related Projects:</Col><Col>{this.state.project.relatedProjects.map((project) =>
            <Link to={`/projects/${project.id}`}>{project.name}{" "}</Link>
        )}</Col></Row>)
    }
    renderVideos() {
        return (
            <>
                <Row><Col md={2}>Associated Videos:</Col></Row>
                <Row>
                    {this.state.project.videos.map(video =>
                        <Col><iframe width="450" height="275" src={video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></Col>)}
                </Row>
            </>
        )
    }
    renderDescription(){
        return(<Row>
            <Col>{this.state.project.description}</Col>
        </Row>)
    }
    render() {
        return (<Container>
            <Row><Col><h2>{this.state.project.name}</h2></Col></Row>
            {this.state.project.description&&this.renderDescription()}
            {this.state.project.tech&&this.state.project.tech.length > 0 && this.renderTechnologyUsed()}
            {this.state.project.relatedProjects && this.state.project.relatedProjects.length > 0 && this.renderRelatedProjects()}
            {this.state.project.videos && this.state.project.videos.length > 0 && this.renderVideos()}
        </Container>)
    }
}

export default withRouter(CurrentProjects)