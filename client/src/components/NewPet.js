import {Component} from "react";
import React from "react";
import axios from 'axios';

class NewPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      pet: {
        name: '',
        species: '',
        description: '',
        skills: ['','','']
      },
      errors: {
        name: '',
        species: '',
        description: '',
        duplicate: ''
      },
      allPets: []
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:8000/pets').then( res => {
      this.setState({
        allPets: res.data.pets
      });
    }).catch( err => {
      console.log(err);
    })
  };

  handleName = (e) => {
    let p = {...this.state.pet};
    p.name = e.target.value;
    this.setState ({
      pet: p
    });
  };

  handleSpecies = (e) => {
    let p = {...this.state.pet};
    p.species = e.target.value;
    this.setState ({
      pet: p
    });
  };

  handleDescription = (e) => {
    let p = {...this.state.pet};
    p.description = e.target.value;
    this.setState ({
      pet: p
    });
  };

  handleFirstSkill = (e) => {
    let p = {...this.state.pet};
    p.skills[0] = e.target.value;
    this.setState ({
      pet: p
    });
  };
  handleSecondSkill = (e) => {
    let p = {...this.state.pet};
    p.skills[1] = e.target.value;
    this.setState ({
      pet: p
    });
  };
  handleThirdSkill = (e) => {
    let p = {...this.state.pet};
    p.skills[2] = e.target.value;
    this.setState ({
      pet: p
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/pets', this.state.pet).then ( res => {
      if (res.data.status === "not ok"){
        console.log(res);
        this.setState({
          errors: res.data.errors.errors
        });
      } else {
        this.props.history.push('/');
        console.log(res);
      }
    }).catch ( err => {
      console.log(err);
    })
  };

  render () {
    const { name, species, description } = this.state.pet;
    return (
      <div className="form-div">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Pet Name</label>
            <input className="form-control" type="text" value={name} onChange={this.handleName} />
            <p>{
              (this.state.errors.name) ? <span className="error">{this.state.errors.name.message}</span> : <span></span>
            }</p>
          </div>

          <div className="form-group">
            <label>Species</label>
            <input className="form-control" type="text" value={species} onChange={this.handleSpecies} />
            <p>{
              (this.state.errors.species) ? <span className="error">{this.state.errors.species.message}</span> : <span></span>
            }</p>
          </div>

          <div className="form-group">
            <label>Description</label>
            <input className="form-control" type="text" value={description} onChange={this.handleDescription} />
            <p>{
              (this.state.errors.description) ? <span className="error">{this.state.errors.description.message}</span> : <span></span>
            }</p>
          </div>

          <div className="form-group">
            <hr/>
            <label>Skills (optional)</label>
            <br/>
            <label>Skill 1</label>
            <input className="form-control inline" type="text" onChange={this.handleFirstSkill} />
            <label>Skill 2</label>
            <input className="form-control inline" type="text" onChange={this.handleSecondSkill} />
            <label>Skill 3</label>
            <input className="form-control inline" type="text" onChange={this.handleThirdSkill} />
          </div>
          <input type="submit" className="btn btn-outline-primary" />
        </form>
      </div>
    )
  }
}

export default NewPet;