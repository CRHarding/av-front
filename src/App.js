import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avmaints: [],
    };
  }
  componentDidMount = () => {
    this.getAvmaints();
  };
  getAvmaints = async () => {
    const response = await axios.get('http://localhost:3001/avmaint/all');
    this.setState({
      avmaints: response.data,
    });
  };
  
  render() {
    const avmaints = this.state.avmaints.map((avmaint) => {
      return (
        <div>
          <h3>{avmaint.acmodel}</h3>
        </div>
      );
    });

    return (
      <div className='App'>
        <form onSubmit={this.login}>
          <input
            acmodel='model'
            type='text'
            placeholder='model'
            value={this.state.acmodel}
          />
        </form>
        {avmaints}
      </div>
    );
  }
}
export default App;