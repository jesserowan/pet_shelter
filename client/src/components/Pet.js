import {Component} from "react";
import React from "react";
import "react-router";
import {
  Link
} from 'react-router-dom';

class Pet extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <tr className="single-pet">
        <td>{this.props.pet.name}</td>
        <td>{this.props.pet.species}</td>
        <td className="colwidth0">
          <Link className="btn btn-outline-secondary" to={'/pet/' + this.props.pet._id}>Details</Link>
          <Link className="btn btn-outline-secondary" to={'/pets/' + this.props.pet._id + '/edit'}>Edit</Link>
        </td>
      </tr>
    )
  }
}

export default Pet;