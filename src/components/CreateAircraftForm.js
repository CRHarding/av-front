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
    console.log(e.target);
    const { acmodel, value } = e.target;
    //            ^------ this is the same as...
    //const name = e.target.name;
    //const value = e.target.value;

    this.setState({
        [acmodel]: value
    })
}

render() {
    const { acmodel, content } = this.state;
    //           ^--------this is the same as...
    // const acmodel = this.state.acmodel;
    // const content = this.state.content;
    return (
        <form onSubmit={(e) => this.props.createAircraft(e, this.state)}>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
            />
            <label htmlFor="content">Post Text</label>
            <textarea
                name="content"
                value={this.state.content}
                onChange={this.handleChange}
            />
            <input type="submit" value="Add an aircraft" />
        </form>
    )
  }

}

export default CreateAircraftForm;