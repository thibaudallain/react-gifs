import React, { Component } from 'react';

class Gif extends Component {

  handleclick = (event) => {
    this.props.selectfunction(event.target.src.replace("https://media.giphy.com/media/", '').replace("/giphy.gif", ''));
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img className="gif" src={src} onClick={this.handleclick}></img>
    )
  }
}

export default Gif;
