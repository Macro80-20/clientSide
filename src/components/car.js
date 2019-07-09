import React, {Fragment} from 'react'
import { Image, Item, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import ListOfCarDetails from './CarDetails'

const Car = props => {
   const { car } = props
    return (   
        <>
        <Item onClick={props.handleClickedCar}>
        <Item.Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' />
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
        </Item.Content>
        </Item>
        </>
    )
}

export default Car


  
