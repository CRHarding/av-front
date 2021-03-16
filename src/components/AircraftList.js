import React from 'react';
import { Link } from 'react-router-dom';
// looks at the list populate the a/c model
// if click on one then update aircraft
// update would be the edit
const AircraftList = (props) => {
    return (
        <div>
            {props.aircrafts.map((aircraft, index) => (
                <div key={index}>
                    <h4>{aircraft.title}</h4>
                    <p>{aircraft.content}</p>
                    <Link to={`/profile/aircraft/edit/${index}`}>EditAircraft</Link>
                </div>
            ))}
        </div>
    )
}

export default AircraftList;