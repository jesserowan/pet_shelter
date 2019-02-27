import React, { Component } from 'react';
import './App.css';
import Pets from './components/Pets';
import NewPet from './components/NewPet';
import ThisPet from './components/ThisPet';
import EditPet from './components/EditPet';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Pet Shelter</h1>
          <h2>These pets are looking for a home!</h2>
        </div>
        <BrowserRouter>
          <div>
            <ul className="nav">
              <li><Link className="btn btn-outline-secondary bottom-margin" to="/" >Home</Link></li>
              <li><Link className="btn btn-outline-secondary bottom-margin" to="/pets/new" >Add a Pet</Link></li>
            </ul>
            <Route exact path="/" component={Pets} />
            <Route path="/pets/new" component={NewPet} />
            <Route exact path="/pet/:_id" component={ThisPet} />
            <Route path="/pets/:_id/edit" component={EditPet} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
