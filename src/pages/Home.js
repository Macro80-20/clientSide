import React, { Component , Fragment } from 'react'
import Cars from '../components/cars'
import CarSpecs from '../components/CarSpecs'
export default class Home extends Component {

    render(){
        return(
            <>
         <Cars handleClickedCar={this.props.handleClickedCar} cars={this.props.cars}/>
    
            </>
        )
    }
}