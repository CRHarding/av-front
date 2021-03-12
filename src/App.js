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
  getavmaints = async () => {
    const response = await axios.get('http://localhost:3001/avmaint/all');
    this.setState({
      avmaints: response.data,
    });
  };
  
  render() {
    const avmaints = this.avmaints.map((avmaint) => {
      return (
        <div>
          <h3>{avmaint.acmodel}</h3>
        </div>
      );
    });
  }
}
export default App;