import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { data } from './Data';


class Cars extends Component {
    constructor(){
        super()
        this.state={cars:data}
    }
    render() {
        const carNode = this.state.cars.map(
            (car)=>{
            return(
             <div>
              <img src={car.media} width='100'/>
              <Link className="nav" to={"/cars/"+car.id} key={car.id}>{car.name}-{car.model}-{car.price}</Link>   
             </div>

            )}
        );
        return(
            <div>
                <h1> Choose your favorite car</h1>
                <div className='list-group'>{carNode}</div>
            </div>
        )
       
    }
}

export default Cars;