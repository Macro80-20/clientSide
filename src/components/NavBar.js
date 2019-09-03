import React, { Component } from 'react'
import { Menu, Button, Modal } from 'semantic-ui-react'
import {  withRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
class NavBar extends Component {
  state = {
    text: "",
    isLoggedIn: false
  }

  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name.toLowerCase()}`)
    this.setState({ activeItem: name })
  }

  handlelogOutClick = e => {
     e.preventDefault();
    this.props.signout();
    this.setState({isLoggedIn: !this.state.isLoggedIn});
  }

  handleLogInClick = data => {

    // e.preventDefault();
    this.setState({isLoggedIn: !this.state.isLoggedIn})
}
  
  render() {
    const { activeItem, isLoggedIn } = this.state
    let button;
      if (isLoggedIn) {
        button = <Button onClick={this.handlelogOutClick}>Sign out</Button>;
      } else {
      button = 
       <Modal trigger={<Button>Log in</Button>}>
        <Modal.Content>
          <LoginForm loginClick={this.handleLogInClick} signin={this.props.signin}/>
        </Modal.Content>
      </Modal>
      
    }
    return (
      <Menu>
        <Menu.Item header>Trade Your Car</Menu.Item>
        <Menu.Item
          name='Latest'
          active={activeItem === 'Latest'}
          onClick={this.handleItemClick}
        />
        <Menu.Item 
        name='profile' 
        active={activeItem === 'profile'} 
        onClick={this.handleItemClick} />
        <Menu.Item>
          {button}
         </Menu.Item>
      </Menu>
    )
  }
}


// {isLoggedIn
//   ? <Button>Sign out</Button>}
//   <Modal trigger={button}>
//     <Modal.Content>
//     <LoginForm/>
//   </Modal.Content>
//   </Modal>
export default withRouter(NavBar)