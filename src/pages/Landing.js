import React, { Component , Fragment } from 'react'
import UserOptions from '../components/LandingOptions'




export default class LandingPage extends Component {
    render(){
        return(
            <>
            <UserOptions signin={this.props.signin}/>
            </>
        )
    }
}

