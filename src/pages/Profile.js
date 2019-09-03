import React, { Component, Fragment } from "react"
import { Link, Switch } from 'react-router-dom'
import Car from '../components/car'
import { getListings } from '../services/api'


export default class Profile extends Component {
    state = {
        listings: [],
      }

    style = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap'
      } 
      
      // from the session that runs on each mount, we can send token on api 
      renderListings = () => {
        getListings()
          .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              this.setState({ listings: data })
            }
          })
      }
      // as we can only 
    componentDidMount () {
       this.renderListings()
      }
    render(){
      const { listings } = this.state
        return(
            <>
            <h3> Heres you current listings:</h3>
            {listings.length === 0 && <p> sorry, you dont have any items.</p>}
            {
              listings.map(car => 
                <Car car={car} key={car["id"]}/>
              )
            }
            </>

        )
    }
}