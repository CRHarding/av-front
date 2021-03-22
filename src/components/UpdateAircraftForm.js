import { render } from '@testing-library/react';
import React,  { Component } from 'react';

class UpdateAircraftForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acmodel: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount = () => {
      const foundAircraft = this.props.aircrafts.find(aircraft=> {
          return aircraft.id === parseInt(this.props.aircraftId);
      })
        this.setState({
          acmodel: foundAircraft.acmodel
      })
    }

    render() {
        return (
            <form onSubmit={(e) =>
                this.props.updateAircraft(e, this.props.aircraftId, this.state)}>
                <input
                type="text"
                name="acmodel"
                value={this.state.acmodel}
                onChange={this.handleChange}
            />
            <input type="submit" value="Update aircraft" />
            </form>
        )
    }
}

export default UpdateAircraftForm;
