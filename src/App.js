import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
// import { Button,  Grid, Container,Segment } from 'semantic-ui-react'
import { validate , getListings } from './services/api'
import NavBar from './components/NavBar'
import LandingPage from './pages/Landing'
import HomePage from "./pages/Home"
import ProfilePage from './pages/Profile'
import CarSpecs from './components/CarSpecs'

 class App extends Component {
 state = {
      cars: [],
      selectedCar: {},
      email: "",
    };

 
  signin = (user) => {
     this.setState({ email: user.email })
     localStorage.setItem('token', user.token)
    }

  signout = () => {
    this.setState({ email: '' })
    localStorage.removeItem('token') 
    
  }
    
  handleClickedCar = (carId) => {
    let selectedCar = this.state.cars.find(car => car["id"] === carId);
    this.setState({selectedCar: selectedCar});
  }

  session = () => {
     if (localStorage.token) {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
          } else {
            this.signin(data)
          }
        })
    }
  } 
 
  componentDidMount () {
    this.fetchCars()
    this.session()
   
  }

  fetchCars = () =>
  fetch ("http://localhost:3001/cars")
  .then(resp => resp.json())
  .then(carsData => this.setState({cars: carsData}));

  render() {
    const { signin, signout } = this;
    const { selectedCar, email } = this.state; 
    return (
      <div className="App">    
       <Switch>
        {//if a user is not logged in when he clicks on / he is redirected to landing page
         // if the user is logged in he can never go landing page.
        }
        <Route exact path="/" render={ props => (
          localStorage.token?
          <HomePage {...props} signnout= {signout} cars={this.state.cars} selectedCar={selectedCar} handleClickedCar={this.handleClickedCar}
              />:
          <Redirect to="/landing-page"/>
        )}/>
        <Route exact path="/landing-page" render={ props => (
          localStorage.token
          ?<Redirect to="/"/>
          : <LandingPage  email = {this.state.email} signin={signin}{...props}/>
      
        )}/>


          <Route
            path='/landing-page'
            render={props => (
              <LandingPage  email = {this.state.email} signin={signin}{...props}/>
            )}
            exact
          />
          <Route
            path='/profile'
            render={props => (
              localStorage.token
                ?  <ProfilePage {...props} email={this.state.email} /> 
                :  <Redirect to="/cars"/>
                )}
            exact
          />
          <Route
            path='/cars'
            render={props => (
              <HomePage signin={signin} {...props} signout={signout} cars={this.state.cars} selectedCar={selectedCar} handleClickedCar={this.handleClickedCar}
              />
            )}
            exact
          />
          <Route
            path='/car'
            render={props => (
              <CarSpecs {...props} car={selectedCar} />
            )}
            exact
          />
         
        </Switch> 
       
      </div>
    );
  }
}
export default withRouter(App)




