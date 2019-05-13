import React, { Component } from 'react'
import { Container,Row, Col} from 'reactstrap'
import { skills } from '../data'
import Rating from 'react-rating';



class SkillsComponent extends Component {
    
    render(){
        let tmp = skills.sort((a,b)=>{
            return(b.Rating-a.Rating)
        })
        return(<Container>
        {tmp.map((Skill=><Row>
               <Col md={3}><h3>{Skill.name}:</h3> </Col>
               <Col md={3}>{Skill.category.join(",")}</Col>
               <Col md={3}><Rating initialRating={Skill.Rating} readonly/></Col>
            </Row>   ))}
           
            </Container>)
    }
}

export default SkillsComponent