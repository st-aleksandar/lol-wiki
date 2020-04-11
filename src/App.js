import React, { Component } from 'react';
import './App.css';
import ChampionsGallery from './Components/ChampionsGallery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>League of Legends Wiki</h2>
        </div>
        <div className="App-intro">
        <ChampionsGallery />
        </div>
      </div>
    );
  }
}

export default App;
