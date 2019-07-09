import React, { Component, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import { Button,  Grid, Container,Segment } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import LandingPage from './containers/Landingpage'
import LatestPage from "./containers/Latestpage"
import UsersListingsPage from './containers/UserCarspage'
import CarSpecs from './components/CarSpecs'
export default class App extends Component {
 state = {
      cars: [],
      selectedCar: {},
    };


  handleClickedCar = (carId) => {
    let selectedCar = this.state.cars.find(car => car["id"] === carId);
    this.setState({selectedCar: selectedCar});
  }
  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  componentDidMount () {
    this.fetchCars()
  }

  fetchCars = () =>
  fetch ("http://localhost:3001/cars")
  .then(resp => resp.json())
  .then(carsData => this.setState({cars: carsData}));

  render() {
    const { selectedCar } = this.state 
    return (
      <div  className="App">
        <NavBar/>
        <Switch>
          <Route
            path='/'
            render={props => (
              <LandingPage {...props}/>
            )}
            exact
          />
          <Route
            path='/latest'
            render={props => (
              <LatestPage {...props} cars={this.state.cars} selectedCar={selectedCar} handleClickedCar={this.handleClickedCar}/>
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
            path='/listings'
            render={props => (
              <UsersListingsPage {...props}/>
            )}
            exact
          />
        </Switch> 
        {/* </Container> */}
      </div>
    );
  }
}

  //   componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }
  //   // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };