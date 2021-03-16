import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Aircraft from './components/Aircraft';

// import Profile from './components/Profile';
// import FriendsPage from './components/FriendsPage';

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
  
// want to manipulate data that is already in the db
// add maintenance. Display models update models.
// look at the update post method
// the update post form

  eventOnChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createACModel = async (e) => {
    e.preventDefault();
    //this.getTasks();
    const data = {        
        acmodel: this.state.acmodel,
        engmodel: this.state.engmodel,
        ttaf: this.state.ttaf,
        ttsn: this.state.ttsn,
                
      };
    console.log("before api event post" + data);
    const response = await axios.post('http://localhost:3001/event/createACModel', data);
    console.log("after api event response" + response);
    this.getEvents();
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
        <nav>
          <Link to="/aircraft"> aircraft</Link>
        </nav>
        <h1>my aircraft</h1>
        <Route path="/aircraft" render={() => (
          <Aircraft acmodel={this.state.acmodel} />
        )} />
        {/* <form onSubmit={this.acmodel}>
          <input
            acmodel='model'
            type='text'
            placeholder='model'
            value={this.state.acmodel}
          />
        </form>
        <div>
        {this.state.avmaints.map((avmaint) => (               
              // <li> {avmaint.acmodel}</li>
          <div>
            <h3 className="showText"> Model: {avmaint.acmodel} engmodel{avmaint.engmodel} ttaf{avmaint.ttaf} ttsn{avmaint.ttsn}</h3>
          </div>)
          )}     
        </div>
        {avmaints} */}
      </div>
    );
    <form className="taskInput" onSubmit={this.createEvent}>
            <h3>Add Aircraft Model</h3>
          <div className="input-wrapper">
                <p className="input-name"> Aircraft Model </p>          
                  <input
                    name='name'
                    className="taskInputCell"
                    type='text'
                    placeholder='enter aircraft model here'
                    value={this.state.name}
                    onChange={this.eventOnChange}
                  />
          </div>
      </form>
  }
}
export default App;