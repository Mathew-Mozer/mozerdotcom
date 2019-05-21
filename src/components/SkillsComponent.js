import React, { Component } from 'react'
import { Container,Row, Col,Dropdown,DropdownToggle,DropdownMenu,DropdownItem, InputGroup,InputGroupAddon,Input} from 'reactstrap'
import SingleSkill from './SingleSkillComponent'


class SkillsComponent extends Component {
    state={
        selectedCategory:"",
        catDropdownOpen:false,
        filterText:""
    }

    toggleCat() {
        console.log("toggle cat")
        this.setState(prevState => ({
            catDropdownOpen: !prevState.catDropdownOpen
        }));
      }
    changeSelectedCat = (cat)=>{
        this.setState({
            selectedCategory:cat
        })
    }
    renderCategories = () =>{
        var cats = []
        let categories = this.props.Skills.Skills.map(({categories})=>{
            categories.forEach(cat=>{
                if(!cats.includes(cat)){
                    cats.push(cat)
                }
            })
            return(<div>tesdt</div>)
        })
        return( 
                <Dropdown isOpen={this.state.catDropdownOpen} toggle={()=>this.toggleCat()}>
                    <DropdownToggle caret>
                        {this.state.selectedCategory?this.state.selectedCategory:"Select Category"}
                    </DropdownToggle>
                    <DropdownMenu>
                        {cats.map(cat=>
                        <DropdownItem onClick={()=>this.changeSelectedCat(cat)}>{cat}</DropdownItem>
                        
                            )}
                        
                        <DropdownItem onClick={()=>this.changeSelectedCat("")}>All</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
        )
            
    }

    render(){
        console.log("skills",this.props)
        let skills = this.props.Skills.Skills.sort((a,b)=>{
            return(b.Rating-a.Rating)
        })
        
       
       if(this.props.Skills.isLoading){
           return(<div class="d-flex align-items-center">
           <strong>Loading...</strong>
           <div class="spinner-border ml-auto" role="status" aria-hidden="true"></div>
         </div>)
       }
       return(<Container fluid>
        <Row className="justify-content-center" style={{paddingBottom:10}} >
            <Col md={{offset:3,size:4}}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">Filter</InputGroupAddon>
                    <Input onKeyPress={(e) => {e.key === 'Enter' && e.preventDefault(); }} value={this.state.filterText} onChange={(param) => this.setState({ filterText: param.target.value })} aria-describedby="technology filter" placeholder="Technology" />
                </InputGroup>
            </Col>
            <Col>
                {this.renderCategories()}
            </Col>
        </Row>
        {skills.filter(Skill=>{
            if(this.state.selectedCategory==="") return true
            if(Skill.categories.indexOf(this.state.selectedCategory)>-1)
                return(true)
            return false
        }).filter(Skill=>Skill.name.toLowerCase().includes(this.state.filterText.toLowerCase())
        ).map((Skill=><SingleSkill skill={Skill} />   ))}
           
            </Container>)
    }
}

export default SkillsComponent