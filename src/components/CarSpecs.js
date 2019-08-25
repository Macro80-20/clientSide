import React from "react";
import { Button, Item }  from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ListOfCarDetails from './CarDetails'
const CarSpecs= props => {
  const { car } = props;
  return ( 
    <div className="card-specs"> 
    <Item>
        <Item.Image size='Large' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
            <Item.Header as='a'><Link to="/car">{car.model}</Link></Item.Header>
            <Item.Meta>£{car.price}</Item.Meta>
            <Item.Description>
            <ListOfCarDetails
            color={car.color}
            fuelType={car.fuelType}
            transmission={car.transmission}
            numOfOwners={car.numOfOwners}
            />
            </Item.Description>
            <Item.Extra>Barely used, in pristine condition, was recently serviced</Item.Extra>
            <Button
              className="ui button fluid"
             
            ><Link to="/latest">
              Go Back
              </Link>
         </Button>
        </Item.Content>
        </Item>
    </div>
  );

};

export default CarSpecs;


