import React from 'react';
import {getAll} from '../data/pets.js'
import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: getAll(), //pets is in state b/c it's going to change when we filter it with the dropdown
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  get = (url) => {
    return fetch(url).then(res => res.json())
  }

  //invoked by Filters when the select field changes
  onChangeType = (type) => {
    this.setState({
      filters: {
        type: type
      }
    })
  }

  //invoked by Filters when the button is clicked
  onFindPetsClick = () => {
    if (this.state.filters.type === "all") {
      this.get('/api/pets').then(json => this.setState({pets: json}))
    } else if (this.state.filters.type === "cat") {
      this.get('/api/pets?type=cat').then(json => this.setState({pets: json}))
    } else if (this.state.filters.type === "dog") {
      this.get('/api/pets?type=dog').then(json => this.setState({pets: json}))
    } else if (this.state.filters.type === "micropig") {
      this.get('/api/pets?type=micropig').then(json => this.setState({pets: json}))
    }
  }

  //we want the App state to be updated, but it will be called by the Pets component.  It will be passed down as props to the Pet Browser, than to Pet
  //called by Pet on button click
  onAdoptPet = (id) => {
    this.setState({
      // adoptedPets: this.state.adoptedPets.concat(pet)
      adoptedPets: this.state.adoptedPets.concat(id)
    })
  }

  findPet = (id) => {
    return this.state.pets.find(pet => pet.id === id)
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType.bind(this)} onFindPetsClick={this.onFindPetsClick.bind(this)}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.onAdoptPet.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
