import React, { Component } from 'react';

class Searchbar extends Component {
  constructor(props) {
    super(props);
  }

  handleUpdate = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return <input className="form-control form-search" onChange={this.handleUpdate}></input>;
  }
}

export default Searchbar;
