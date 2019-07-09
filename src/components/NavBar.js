import React, { Component } from 'react'
import { Input, Menu, Segment } from 'semantic-ui-react'
import Cars from './cars'
import LatestPage from '../containers/Latestpage'
export default class MenuExampleTabularOnTop extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu attached='top' tabular>
          <Menu.Item 
          name='Latest' 
          active={activeItem === 'Latest'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Listings'
            active={activeItem === 'Listings'}
            onClick={this.handleItemClick}
          />
        </Menu>
        {/* <Segment attached='bottom'>
        </Segment> */}
      </div>
    )
  }
}