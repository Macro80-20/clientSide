import React, { Component, Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
// import { Button,  Grid, Container,Segment } from 'semantic-ui-react'
import { validate } from './services/api'
import NavBar from './components/NavBar'
import LandingPage from './pages/Landing'
import LatestPage from "./pages/Home"
import ProfilePage from './pages/Profile'
import CarSpecs from './components/CarSpecs'

 class App extends Component {
 state = {
      email: "",
      cars: [],
      selectedCar: {},
    };

    //In the loginForm handleSubmit method we will pass on the response from loginRoute
    // then we set state to have our userEmail and pass to local storage our token
  signin = (user) => {
     this.setState({ email: user.email })
     localStorage.setItem('token', user.token)
     this.props.history.push('/inventory')
    }

    signout = () => {
      this.setState({ email: '' })
      localStorage.removeItem('token')
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
    
  handleClickedCar = (carId) => {
    let selectedCar = this.state.cars.find(car => car["id"] === carId);
    this.setState({selectedCar: selectedCar});
  }
  // handleChange(event) {
  //   this.setState({ name: event.target.value });
  // }

  componentDidMount () {
    this.fetchCars()
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

  fetchCars = () =>
  fetch ("http://localhost:3001/cars")
  .then(resp => resp.json())
  .then(carsData => this.setState({cars: carsData}));

  render() {
    const { signin, signout } = this
    const { selectedCar, email } = this.state 
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
            path='/inventory'
            render={props => (
              <ProfilePage email={email} {...props}/>
            )}
            exact
          />
        </Switch> 
        {/* </Container> */}
      </div>
    );
  }
}
export default withRouter(App)
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