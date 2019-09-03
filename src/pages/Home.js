import React, { Component , Fragment } from 'react'
import Cars from '../components/cars'
import CarSpecs from '../components/CarSpecs'
import NavBar from '../components/NavBar'
export default class Home extends Component {

    state = {
        LandingPage: true
    }

    render(){
        return(
            <>
            <NavBar signin={this.props.signin} signout={this.props.signout}/>
         <Cars handleClickedCar={this.props.handleClickedCar} cars={this.props.cars}/>
    
            </>
        )
    }
}

