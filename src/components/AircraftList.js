import React from 'react';
import { Link } from 'react-router-dom';
// looks at the list populate the a/c model
// if click on one then update aircraft
// update would be the edit



const AircraftList = (props) => {
    const foundAircraft = props.avmaints.find(aircraft=> {
        return aircraft.id ==
        props.match.params.id;
    })
    return (
        <div>
            {/* {props.avmaints.find((avmaints, index) => (
                <div key={index}> */}
                    <h4>{foundAircraft.acmodel}</h4>
                    <p>{foundAircraft.engmodel}</p>
                    <Link to={`/aircraft/edit/${foundAircraft.id}`}>EditAircraft</Link>
                {/* </div>
             ))} */}
        </div>
    )
}

export default AircraftList;