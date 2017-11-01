import React from 'react';

import Pet from './Pet';

class PetBrowser extends React.Component {

  renderPets = () => {
    return this.props.pets.map(pet => {
      return <Pet pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet.id)}/>
    })
  }

  isAdopted = (id) => {
    return (this.props.adoptedPets.find(petId => petId === id) ? true : false)
  }

  render() {
    return (
      <div className="ui cards">
        {this.renderPets()}
      </div>
    );
  }
}

export default PetBrowser;
