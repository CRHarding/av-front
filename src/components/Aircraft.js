import React from 'react';
import AircraftContainer from './AircraftContainer';
import { Route, Link } from 'react-router-dom';

const Aircraft = (props) => {
    console.log(props);
    return (
          <div>
            {props.avmaints.map(plane => (
            <Link to={`/aircraftPage/${plane.id}`} >
                <li>{plane.acmodel} {plane.engmodel}</li>
            </Link>
            ))}
          
           {/* <img src={props.data.image} />
          {props.data.acList.map(aircraft => <p>{aircraft.acList.acmodel}</p>)}
          <AircraftContainer aircrafts={props.data.aircraftList} /> */}
        </div>
    )
}


export default Aircraft;
