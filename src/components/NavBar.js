import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Menu, Segment } from 'semantic-ui-react'
import Cars from './cars'
import LatestPage from '../pages/Home'

export default class NavBar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item 
          name='Latest' 
          active={activeItem === 'Latest'} onClick={this.handleItemClick}>
            <Link to="/latest"></Link>
          </Menu.Item>

          <Menu.Item
            name='Listings'
            active={activeItem === 'Listings'}
            onClick={this.handleItemClick}>
            <Link to="/inventory"></Link>
          </Menu.Item>

         <Menu.Item>
          {/* <Button onClick={this.props.signout}>LogOut</Button> */}
         </Menu.Item>
        </Menu>
        {/* <Segment attached='bottom'>
        </Segment> */}
      </div>
    )
  }
}