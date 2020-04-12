import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import ChampionsGallery from './Components/ChampionsGallery';
import ChampionSingle from './Components/ChampionSingle/ChampionSingle';
import ItemsGallery from './Components/ItemsGallery/ItemsGallery';
import Navigation from './Components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/lol-wiki">
        <div className="App">
          <div className="App-header">
            <h2>League of Legends Wiki</h2>
            <Navigation />
          </div>
          <div className="App-content">
            <Switch>
              <Route path="/items" component={ItemsGallery} />
              <Route path="/:id" component={ChampionSingle} />
              <Route path="/" component={ChampionsGallery} />
            </Switch>
          </div>
        </div>
        </BrowserRouter>
    );
  }
}

export default App;
