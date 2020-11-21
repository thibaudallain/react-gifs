import React, { Component } from 'react';
import Searchbar from './searchBar';
import GifList from './gifList';
import Gif from './gif';
import giphy from 'giphy-api';


const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: { id: "test" },
    };
  }

  select = (selectedId) => {
    this.setState({
      selectedGifId: { id: selectedId }
    });
  }

  search = (query) => {
    giphy(GIPHY_API_KEY).search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <Searchbar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId.id} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectfunction={this.select}/>
        </div>
      </div>
    );
  }
}

export default App;
