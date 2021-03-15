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
    const response = await axios.get('http://localhost:3000/avmaint/all');
    this.setState({
      avmaints: response,
    });
  };
  
  render() {
    const avmaints = this.state.avmaints.map((avmaint) => {
      console.log(avmaint.acmodel)
      return (
        <div>
          <h3>{avmaint.acmodel}</h3>
        </div>
      );
    });
    

    return (
      <div className='App'>
        <form onSubmit={this.acmodel}>
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