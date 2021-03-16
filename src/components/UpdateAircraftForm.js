import { render } from '@testing-library/react';
import React,  { Component } from 'react';

class UpdateAircraftForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            content: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    componentDidMount = () => {
        console.log(this.props.aircrafts[this.props.aircraftId]);
            this.setState({
            title: this.props.aircrafts[this.props.aircraftId].title,
            content: this.props.aircrafts[this.props.aircraftId].content
        })
    }

    render() {
        return (
            <form onSubmit={(e) => 
                this.props.updateAircraft(e, this.props.aircraftId, this.state)}>
                <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.onChange}
            />
            <label htmlFor="content">Content</label>
                <textarea
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
            />
            <input type="submit" value="Update aircraft" />
            </form>
        )
    }
}

export default UpdateAircraftForm;