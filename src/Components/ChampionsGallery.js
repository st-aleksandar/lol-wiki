import React, { Component } from 'react';


import ChampionGallery from './ChampionGallery/ChampionGallery';
import ChampionSearch from './SearchBox/SearchBox';


class ChampionsGallery extends Component {
    constructor() {
        super();
        this.state = {
            champions: []
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    async componentDidMount() {
        try {
            const response = await fetch('https://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion.json');
            const data = await response.json();
            const dataArray = Object.values(data.data);
            this.setState({ champions: dataArray });
            this.initialChampions = dataArray;   
        } catch (error) {
            console.log(error);
        }
    }

    searchHandler(e) {
        if (e.target.value === '') {
            this.setState({champions: this.initialChampions})
        }

        let filteredChampions = this.initialChampions.filter(champion => champion.name.toLowerCase().includes(e.target.value.toLowerCase()));

       this.setState({champions: filteredChampions});
    }

    render() {
        return (
            <div>
                <ChampionSearch search={this.searchHandler} placeholder="Search Champions" />
                <ul className="gallery">
                { this.state.champions.map( champion => {
                    return <ChampionGallery id={champion.id} key={champion.id} name={champion.name} image={champion.image.full} />
                }) }
                </ul>
            </div>
        );
    }

}

export default ChampionsGallery;