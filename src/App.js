import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
// import { Button,  Grid, Container,Segment } from 'semantic-ui-react'
import { validate } from './services/api'
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

    //In the loginForm handleSubmit method we will pass on the response from loginRoute
    // then we set state to have our userEmail and pass to local storage our token
  signin = (user) => {
     this.setState({ email: user.email })
     localStorage.setItem('token', user.token)
    //  this.props.history.push('/listings')
    }

  signout = () => {
    this.setState({ email: '' })
    localStorage.removeItem('token')
    this.props.history.push('/latest')
  }
    
  handleClickedCar = (carId) => {
    let selectedCar = this.state.cars.find(car => car["id"] === carId);
    this.setState({selectedCar: selectedCar});
  }
 
  componentDidMount () {
    this.fetchCars()
    if (localStorage.token) {
      validate()
        .then(data => {
          if (data.error) {
            alert(data.error)
            this.props.history.push('/')
            // this.fetchCars()
          } else {
            this.signin(data)
            // this.fetchCars()
          }
        })
    }
   
  }

  fetchCars = () =>
  fetch ("http://localhost:3001/cars")
  .then(resp => resp.json())
  .then(carsData => this.setState({cars: carsData}));

  render() {
    const { signin, signout } = this
    const { selectedCar } = this.state 
    return (
      <div className="App">
        <NavBar signout={signout}/>
        <Switch>
          <Route
            path='/'
            render={props => (
              <LandingPage signin={signin}{...props}/>
            )}
            exact
          />
          <Route
            path='/home'
            render={props => (
              <HomePage {...props} cars={this.state.cars} selectedCar={selectedCar} handleClickedCar={this.handleClickedCar}/>
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
          <Route
            path='/profile'
            render={props => (
              <ProfilePage {...props} email={this.state.email} />
            )}
            exact
          />
        </Switch> 
      </div>
    );
  }
}
export default withRouter(App)
