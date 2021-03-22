import React from 'react';
import AircraftContainer from './AircraftContainer';
import { Route, Link } from 'react-router-dom';

const Aircraft = (props) => {
    return (
          <div>
            {props.avmaints.map(plane => (
            <Link to={`/aircraftPage/${plane.id}`} >
                <li>{plane.acmodel} {plane.engmodel}</li>
            </Link>
            ))}
        </div>
    )
}


export default Aircraft;
