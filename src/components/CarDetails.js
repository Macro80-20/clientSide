import React from "react";
import { List}  from 'semantic-ui-react'


const ListOfCarDetails = props => (
    <List divided verticalAlign='middle'>
      <List.Item>
        <List.Content>
          <List.Header>{props.color}</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header >{props.fuelType}</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>{props.transmission}</List.Header>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>Number of Owners: {props.numOfOwners}</List.Header>
        </List.Content>
      </List.Item>
    </List>
  )
  
  export default ListOfCarDetails;