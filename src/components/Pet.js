import React from 'react';

class Pet extends React.Component {
  constructor() {
    super();
  }

  adoptionButton = () => {
    if (this.props.isAdopted !== true) {
      return <button className="ui primary button" onClick={this.handleClick.bind(this)}>Adopt pet</button>
    } else {
      return <button className="ui disabled button">Already adopted</button>
    }
  }

  genderSymbol = () => {
    return (this.props.pet.gender === "male" ? "♂" : "♀")
  }

  handleClick = (e) => {
    e.preventDefault()
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">Pet name: {this.props.pet.name} (gender: {this.genderSymbol()})</a>
          <div className="meta">
            <span className="date">Pet type: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptionButton()}
        </div>
      </div>
    );
  }
}

export default Pet;
