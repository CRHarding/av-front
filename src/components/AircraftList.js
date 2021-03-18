import React from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import UpdateAircraftForm from './UpdateAircraftForm';
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
                    <h4>model {foundAircraft.acmodel}</h4>
                    <p>engine {foundAircraft.engmodel}</p>
                    <p>total time airframe {foundAircraft.ttaf}</p>
                    <p>total time since new {foundAircraft.ttsn}</p>
                    <p>since major overhaul {foundAircraft.smoh}</p>
                    <Link to={`/aircraft/edit/${foundAircraft.id}`}>EditAircraft</Link>
                    <Route path={`/aircraft/edit/${foundAircraft.id}`} render={(routerProps) => (
                        <UpdateAircraftForm 
                            aircrafts={this.state.aircrafts}
                            updateAircraft={this.updateAircraft}
                            aircraftId={routerProps.match.params.index}
                            />
                    )} />
                {/* </div>
             ))} */}
        </div>
    )
}

export default AircraftList;