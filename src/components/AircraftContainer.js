import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import CreateAircraftForm from './CreateAircraftForm';
import AircraftList from './AircraftList';
import UpdateAircraftForm from './UpdateAircraftForm';

class AircraftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maintenance_dev: []
        }
    }

// GET all aircrafts ==> list this aircrafts

createAircraft = (e, aircraft) => {
    e.preventDefault();
    const oldAircrafts = this.state.aircrafts;
    oldAircrafts.push(aircraft);
    
    this.setState({ aircrafts: oldAircrafts });
    this.props.history.push('/aircraft/list');
}

updateAircraft = (e, aircraftId, revisedAircraft) => {
    e.preventDefault();
    const updatedAircrafts = this.state.aircrafts.map((aircraft, index) => (
        aircraftId === index ? revisedAircraft : aircraft

    ))
    this.setState({
        aircrafts: updatedAircrafts
    })
    this.props.history.push('/aircraft/list');
}

render() {
    //console.log(this.props);
    return (
        <div>
            <Link to="/aircraft/new">Add an Aircraft</Link>
            <Link to="/aircraft/list">All Aircraft</Link>
            <Route path="/aircraft/new" render={() => (
                <CreateAircraftForm createaircraft={this.createAircraft} />
        )} />
        <Route path="/aircraft/list" render={() => (
            <AircraftList aircrafts={this.state.aircrafts} />
        )} />
        <Route path="/aircraft/edit/:index" render={(routerProps) => (
            <UpdateAircraftForm 
                aircrafts={this.state.aircrafts}
                updateAircraft={this.updateAircraft}
                aircraftId={routerProps.match.params.index}
                />
        )} />
        </div>
    )
  }

}

export default withRouter(AircraftContainer);