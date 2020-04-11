import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ChampionGallery from './ChampionGallery/ChampionGallery';
import ChampionSearch from './ChampionSearch/ChampionSearch';
import ChampionSingle from './ChampionSingle/ChampionSingle';

class ChampionsGallery extends Component {
    constructor() {
        super();
        this.state = {
            champions: []
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    async componentDidMount() {
        const response = await fetch('http://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json');
        const data = await response.json();
        const dataArray = Object.values(data.data);
        this.setState({ champions: dataArray });
        this.initialChampions = dataArray;
    }

    searchHandler(e) {
        if (e.target.value === '') {
            this.setState({champions: this.initialChampions})
        }

        let filteredChampions = this.initialChampions.filter(champion => champion.name.toLowerCase().includes(e.target.value.toLowerCase()));

       this.setState({champions: filteredChampions});
    }

    render() {
        // const champions = Object.values(this.state.champions);
        return (
            <BrowserRouter>
                
                <Switch>
                    <Route path="/:id" component={ChampionSingle}></Route>
                    <Route path="/">
                        <div>
                        <ChampionSearch search={this.searchHandler} />
                            <ul className="gallery">
                            { this.state.champions.map( champion => {
                                return <ChampionGallery id={champion.id} key={champion.id} name={champion.name} image={champion.image.full} />
                            }) }
                            </ul>
                        </div>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }

}

export default ChampionsGallery;