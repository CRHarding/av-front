import React from 'react';
import AircraftContainer from './AircraftContainer';

const Aircraft = (props) => {
    return (
        <div>
          <h3>{props.data.acmodel}</h3>          
          <h3>{props.data.engmodel}</h3>
          <img src={props.data.image} />
          {props.data.acList.map(aircraft => <p>{aircraft.acList.acmodel}</p>)}
          <AircraftContainer aircrafts={props.data.aircraftList} />
        </div>
    )
}

export default Aircraft;
