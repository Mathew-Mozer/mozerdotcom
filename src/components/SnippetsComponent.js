import React, { Component } from 'react'
import { Container, Row, Col} from 'reactstrap'
import { snippets } from '../data';

class Snippets extends Component {
    state={
        language:""
    }
    componentDidMount(){
        const { language } = this.props.match.params
        this.setState({ language: language})
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            const { language } = this.props.match.params
            this.setState({ language: language})
        }
    }

    render(){
        return(<Container>
            {snippets.filter(snip=>snip.language===this.state.language).map(snap=><code>{snap.snippet}</code>)}
        </Container>)
    }
}

export default Snippets