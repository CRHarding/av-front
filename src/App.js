import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Link, withRouter } from 'react-router-dom';
import Aircraft from './components/Aircraft';
import AircraftList from './components/AircraftList';
import AircraftContainer from './components/AircraftContainer';
import CreateAircraftForm from './components/CreateAircraftForm';
import UpdateAircraftForm from './components/UpdateAircraftForm';

// import Profile from './components/Profile';
// import FriendsPage from './components/FriendsPage';

const url = 'https://aviation-maintenance.herokuapp.com'

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
    const response = await axios.get(`http://localhost:3001/avmaint/all`);

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

  createACModel = async (e, data) => {
    e.preventDefault();

    console.log(data);
    const response = await axios.post('http://localhost:3001/avmaint', data);
    console.log(response);

    const avmaints = this.state.avmaints;
    avmaints.push(response);
    this.setState({
      avmaints
    })
  };

  updateAircraft = async (e, id, newACModel) => {
    e.preventDefault();

    const response = await axios.put(`http://localhost:3001/avmaint/update/${id}`, newACModel);
    console.log(response);

    const updatedAircrafts = this.state.avmaints.map(aircraft => (
        id === aircraft.id ? response.data : aircraft

    ))
    this.setState({
        avmaints: updatedAircrafts
    })

    this.props.history.push('/aircraft');
  }

  render() {
    return (
      <div className='App'>
        <nav>
          <Link to="/aircraft"> aircraft</Link>
        </nav>
        <Route exact path="/" render={() => (
          <AircraftContainer planes={this.state.avmaints}/>
        )} />
        <Route exact path="/aircraft" render={(routerProps) => (
          <Aircraft
            avmaints={this.state.avmaints}
            {...routerProps}
          />
        )} />
        <Route exact path="/aircraft/new" render={() => (
          <CreateAircraftForm createAircraft={this.createACModel}/>
        )} />
        <Route exact path="/aircraft/list" render={() => (
            <AircraftList aircrafts={this.state.aircrafts} />
        )} />
        <Route exact path="/aircraft/edit/:index" render={(routerProps) => (
            <UpdateAircraftForm
                aircrafts={this.state.avmaints}
                updateAircraft={this.updateAircraft}
                aircraftId={routerProps.match.params.index}
            />
        )}/>
        <Route path="/aircraftPage/:id" render={(routerProps) => (
          <AircraftList
             aircrafts={this.state.avmaints}
             acmodelId = {routerProps.match.params.id}
             {...routerProps}
           />
        )} />
      </div>
    );
  }
}
export default withRouter(App);
