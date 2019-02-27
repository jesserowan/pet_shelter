import {Component} from "react";
import axios from "axios";
import React from "react";
import Pet from './Pet'

class Pets extends Component {
  constructor(props){
    super(props);
    this.state = {
      pets: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:8000/pets').then ( res => {
      this.setState({
        pets: res.data.pets
      })
    }).catch ( err => {
      console.log(err);
    })
  };

  render () {
    return (
      <div className="table-div">
        <table className="table table-striped table-light">
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th className="colwidth0">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.pets.map((pet) =>
                <Pet key={pet._id} pet={pet} />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default Pets;