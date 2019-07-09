import React, { Fragment, Component} from 'react'
import { Item } from 'semantic-ui-react'
import Car from './car'


class Cars extends Component {
    render(){
    
return(
    <> 
    <Item.Group>
     {this.props.cars.map(car=> 
        <Car 
        car={car}
        handleClickedCar = {() => this.props.handleClickedCar(car["id"])}
        key={car["id"]}
        />
    )}
    </Item.Group>
    </>
)
}
}

export default Cars


// {props.cars.map(bot=> 
//     <Car 
//         bot={bot}
//         key={bot.id}
//         />
// )}

   