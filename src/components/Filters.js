import React from 'react';

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleChange = (e) => {
    const type = e.target.value
    this.props.onChangeType(type)
  }

  handleClick = (e) => {
    this.props.onFindPetsClick()
  }

  //for the value of the select field, we don't need to set it to a state, we can set it to it's props b/c those are updated when there's a change and App has to re-render
  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" value={this.props.filters.type} onChange={this.handleChange.bind(this)}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick.bind(this)}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
