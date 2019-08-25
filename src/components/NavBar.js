import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import {  withRouter } from 'react-router-dom'

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name.toLowerCase()}`)
    this.setState({ activeItem: name })
  }

  render() {
    const { activeItem } = this.state

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
          <Button onClick={this.props.signout}>LogOut</Button>
         </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(NavBar)