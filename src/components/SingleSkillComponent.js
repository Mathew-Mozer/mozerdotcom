import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import Rating from 'react-rating';

class Skill extends Component {
    render(){
        if(this.props.small){
        return(
            <Container style={{padding:0}}><Row noGutters>
            <Col><span style={{fontWeight:'Bold',fontSize:36}}>{this.props.skill.name}{' '}</span>{this.props.skill.rating&&<Rating initialRating={this.props.skill.rating} readonly/>}</Col>
            </Row>
            </Container>)    
        }
        return(<Container>
            <Row className="justify-content-center" noGutters >
            <Col md={3}><h3>{this.props.skill.name}</h3> </Col>
            <Col md={4}>{this.props.skill.categories&&this.props.skill.categories.join(",")}</Col>
            <Col md={5}>{this.props.skill.rating&&<Rating initialRating={this.props.skill.rating} readonly/>}</Col>
            </Row>
        </Container>)
    }
}

export default Skill