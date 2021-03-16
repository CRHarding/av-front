import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

import CreateAircraftForm from './CreateaircraftForm';
import aircraftList from './aircraftList';
import UpdateAircraftForm from './UpdateaircraftForm';
// aircraft already populated with seeded datya
class AircraftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aircrafts: []
        }
    }

// GET all aircrafts ==> list this aircrafts

createAircraft = (e, aircraft) => {
    e.preventDefault();
    const oldAircrafts = this.state.aircrafts;
    oldAircrafts.push(aircraft);
    
    this.setState({ aircrafts: oldAircrafts });
    this.props.history.push('/profile/aircraft/list');
}

updateAircraft = (e, aircraftId, revisedAircraft) => {
    e.preventDefault();
    const updatedAircrafts = this.state.aircrafts.map((aircraft, index) => (
        aircraftId === index ? revisedAircraft : aircraft

    ))
    this.setState({
        aircrafts: updatedAircrafts
    })
    this.props.history.push('/profile/aircraft/list');
}

render() {
    //console.log(this.props);
    return (
        <div>
            <Link to="/profile/aircraft/new">Add an Aircraft</Link>
            <Link to="/profile/aircraft/list">All Aircraft</Link>
            <Route path="/profile/aircraft/new" render={() => (
                <CreateaircraftForm createaircraft={this.createaircraft} />
        )} />
        <Route path="/profile/aircraft/list" render={() => (
            <aircraftList aircrafts={this.state.aircrafts} />
        )} />
        <Route path="/profile/aircraft/edit/:index" render={(routerProps) => (
            <UpdateaircraftForm 
                aircrafts={this.state.aircrafts}
                updateaircraft={this.updateAircraft}
                aircraftId={routerProps.match.params.index}
                />
        )} />
        </div>
    )
  }

}

export default withRouter(AircraftContainer);