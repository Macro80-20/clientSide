import React, { Component, Fragment } from "react";
import Car from '../components/car'
import { getListings } from '../services/api'


export default class Body extends Component {
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
      setListings = () => {
        getListings()
          .then(data => {
            if (data.error) {
              alert(data.error)
            } else {
              this.setState({ listings: data })
            }
          })
      }
      // on mount i am checking for an email, passed through by app , 
      //if nada we go do differnt route/ . or we pass listings which has our token inside the api and set listings 
    componentDidMount () {
        if (!this.props.email) {
          this.props.history.push('/latest')
        } else {
          this.setListings()
        }
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