import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Spell from './../Spell/Spell';
import Skin from './../Skin/Skin';

class ChampionSingle extends Component {
    
    constructor() {
        super();
        this.state = { champion: null }
    }

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/10.7.1/data/en_US/champion/${id}.json`);
            const data = await response.json();
            const champion = data.data[id];
            this.setState({ champion });
        } catch (error) {
            console.log(error);
        }
        
    }

    render() {
        if (this.state.champion === null) {
            return 'Loading...';
        }

        const {champion} = this.state;

        const singeStyle = {
            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.name}_0.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        };
    
        return (
            <div className="single-champion">
                <div className="single-champion__header" style={singeStyle}>
                    <h1>{champion.name}</h1>
                    <h3>{champion.title}</h3>
                    <p>{champion.lore}</p>
                </div>
                <h3>Passive:</h3>
                <Spell key={champion.passive.id} spell={champion.passive} passive={true}/>
                <h3>Spells:</h3>
                { champion.spells.map(spell => <Spell key={spell.id} spell={spell} passive={false} />)}
                <h3>Skins</h3>
                <div className="champion-skins">
                { champion.skins.map( skin => <Skin key={champion.id} id={champion.id} skin={skin} />) }
                </div>
            </div>
        );
    }
}

export default ChampionSingle;