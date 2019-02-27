import {Component} from "react";
import React from "react";
import axios from 'axios';

class EditPet extends Component {
  constructor(props){
    super(props);
    this.state = {
      newPet: {
        name: '',
        species: '',
        description: '',
        skills: ['', '', '']
      },
      oldPet: {
        name: '',
        species: '',
        description: '',
        skills: ['', '', '']
      },
      errors: {
        name: '',
        species: '',
        description: ''
      }
    }
  }

  componentDidMount = () => {
    console.log(this.props.match.params._id);
    axios.get(`http://localhost:8000/pets/${this.props.match.params._id}`).then( res => {
      this.setState({
        oldPet: res.data.pet,
        newPet: res.data.pet
      })
    }).catch( err => {
      console.log(err);
    })
  };

  handleName = (e) => {
    let p = {...this.state.newPet};
    p.name = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleSpecies = (e) => {
    let p = {...this.state.newPet};
    p.species = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleDescription = (e) => {
    let p = {...this.state.newPet};
    p.description = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleFirstSkill = (e) => {
    let p = {...this.state.newPet};
    p.skills[0] = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleSecondSkill = (e) => {
    let p = {...this.state.newPet};
    p.skills[1] = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleThirdSkill = (e) => {
    let p = {...this.state.newPet};
    p.skills[2] = e.target.value;
    this.setState({
      newPet: p
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.newPet);
    axios.put(`http://localhost:8000/pets/${this.props.match.params._id}`, this.state.newPet).then( res => {
      if (res.data.status === "not ok"){
        console.log(res);
        this.setState({
          errors: res.data.errors.errors
        })
      } else {
        this.props.history.push(`/pet/${this.props.match.params._id}`);
        console.log(res);
      }
    }).catch( err => {
      console.log(err);
    });
  };

  cancel = (e) => {
    this.props.history.push('/');
  };


  render () {
    let { name, species, description } = this.state.newPet;
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
            <input className="form-control inline" type="text" value={this.state.oldPet.skills[0]} onChange={this.handleFirstSkill} />
            <label>Skill 2</label>
            <input className="form-control inline" type="text" value={this.state.oldPet.skills[1]} onChange={this.handleSecondSkill} />
            <label>Skill 3</label>
            <input className="form-control inline" type="text" value={this.state.oldPet.skills[2]} onChange={this.handleThirdSkill} />
          </div>
          <input type="submit" className="btn btn-outline-primary" />
          <button className="btn btn-outline-danger" onClick={this.cancel} >Cancel</button>
        </form>
      </div>
    )
  }
}

export default EditPet;