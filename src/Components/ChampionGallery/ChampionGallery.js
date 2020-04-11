import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import ChampionSingle from '../ChampionSingle/ChampionSingle';

const ChampionGallery = (props) => {
    // const imgUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.name}_0.jpg`;
    const imgUrl = `http://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/${props.image}`;
    return (
        <li>
            <Link to={`/${props.id}`}>
            <div>
                <img src={imgUrl} alt={props.name}/>
                <div className='name'>{ props.name }</div>
            </div>
            </Link>
        </li>
    );
};

export default ChampionGallery;