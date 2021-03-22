import React,  { Component } from 'react';

class CreateAircraftForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            acmodel: '',
            content: ''
        }
}

handleChange = (e) => {
    const { name, value } = e.target;
    //            ^------ this is the same as...
    //const name = e.target.name;
    //const value = e.target.value;

    this.setState({
        [name]: value
    })
}

render() {
    const { acmodel, content } = this.state;
    //           ^--------this is the same as...
    // const acmodel = this.state.acmodel;
    // const content = this.state.content;
    return (
        <form onSubmit={(e) => this.props.createAircraft(e, this.state)}>
            <label htmlFor="title">Model</label>
            <input
                type="acmodel"
                name="acmodel"
                value={acmodel}
                onChange={this.handleChange}
            />
            <input type="submit" value="Add an aircraft" />
        </form>
    )
  }

}

export default CreateAircraftForm;
