import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AircraftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            aircrafts: []
        }
    }

  render() {
    return (
        <div>
            <Link to="/aircraft/new">Add an Aircraft</Link>
            <Link to="/aircraft/list">All Aircraft</Link>
        </div>
    )
  }
}

export default AircraftContainer;
