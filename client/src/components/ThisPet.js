import {Component} from "react";
import React from "react";
import axios from 'axios';

class ThisPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      pet: {
        name: '',
        species: '',
        description: '',
        skills: [],
        likes: 0
      }
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params._id);
    axios.get(`http://localhost:8000/pets/${this.props.match.params._id}`).then ( res => {
      this.setState({
        pet: res.data.pet
      })
    }).catch ( err => {
      console.log(err);
    })
  };

  like = (e) => {
    let p = this.state.pet;
    p.likes ++;
    this.setState({
      pet: p
    });
    axios.put(`http://localhost:8000/pets/${this.props.match.params._id}/like`, this.state.pet).then ( res => {
      console.log(res);
    }).catch ( err => {
      console.log(err);
    })
    this.refs.btn.setAttribute("disabled", "disabled");
  };

  adopt = (e) => {
    let id = this.props.match.params._id;
    axios.delete(`http://localhost:8000/pets/${id}`).then( res => {
      this.props.history.push('/');
    }).catch( err => {
      console.log(err);
    })
  };

  render () {
    let skills = '';
    for (let i in this.state.pet.skills){
      if(this.state.pet.skills[i] !== "") {
        skills += this.state.pet.skills[ i ];
        skills += ", ";
      }
    }
    return (
      <div className="table-div">
        <table className="table table-light table-striped">
          <tbody>
            <tr>
              <td className="colwidth1">Name:</td>
              <td>{this.state.pet.name}</td>
            </tr>
            <tr>
              <td className="colwidth1">Species:</td>
              <td>{this.state.pet.species}</td>
            </tr>
            <tr>
              <td className="colwidth1">Description:</td>
              <td>{this.state.pet.description}</td>
            </tr>
            <tr>
              <td className="colwidth1">Skills:</td>
              <td>{skills}</td>
            </tr>
          <tr>
            <td className="colwidth1">Likes</td>
            <td>{this.state.pet.likes}</td>
          </tr>
          </tbody>
        </table>
        <button ref="btn" className="btn btn-outline-primary" onClick={this.like}>Like</button>
        <button className="btn btn-outline-primary" onClick={this.adopt}>Adopt</button>
      </div>
    )
  }
}

export default ThisPet;