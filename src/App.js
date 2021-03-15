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
    console.log('hello')
    const response = await axios.get('http://localhost:3001/avmaint/all');
    console.log(response)
    this.setState({
      avmaints: response.data,
    });
  };
  
  render() {
    console.log(this.state.avmaints)
    //  const avmaints = this.state.avmaints.map((avmaint) => {
    //   console.log(avmaint.acmodel)
    //   return (
    //     <div>
    //       <h3>{avmaint.acmodel}</h3>
    //     </div>
    //   );
    // });
    

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
        <div>
        {this.state.avmaints.map((avmaint) => (               
              <li> {avmaint.acmodel}</li>)
          )}     
        </div>
        {/* {avmaints} */}
      </div>
    );
  }
}
export default App;