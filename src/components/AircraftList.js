import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
// looks at the list populate the a/c model
// if click on one then update aircraft
// update would be the edit



const AircraftList = (props) => {
    const foundAircraft = props.aircrafts.find(aircraft=> {
        return aircraft.id ==
        props.match.params.id;
    })
    return (
        <div>
            {/* {props.avmaints.find((avmaints, index) => (
                <div key={index}> */}
                    <h4>model {foundAircraft.acmodel}</h4>
                    <p>engine {foundAircraft.engmodel}</p>
                    <p>total time airframe {foundAircraft.ttaf}</p>
                    <p>total time since new {foundAircraft.ttsn}</p>
                    <p>since major overhaul {foundAircraft.smoh}</p>
                    <Link to={`/aircraft/edit/${foundAircraft.id}`}>EditAircraft</Link>
                {/* </div>
             ))} */}
        </div>
    )
}

export default AircraftList;
