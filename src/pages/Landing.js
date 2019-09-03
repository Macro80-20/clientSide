import React, { Component , Fragment } from 'react'
import UserOptions from '../components/LandingOptions'




export default class LandingPage extends Component {
    componentDidMount() {
        // 
          }
    render(){
        return(
            <>
            <UserOptions  signin={this.props.signin}/>
           
            </>
        )
    }
}


