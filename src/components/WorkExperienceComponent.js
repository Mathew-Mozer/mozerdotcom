import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class Experience extends Component {
    render(){
        return(<Container>
                <Row>
                    <Col>{this.props.company}</Col>
                    <Col>{this.props.position}</Col>
                </Row>
        </Container>)
    }
}

export default Experience