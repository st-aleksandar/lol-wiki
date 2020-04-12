import React from 'react';
import { Link } from 'react-router-dom';

const ChampionGallery = (props) => {
    const imgUrl = `https://ddragon.leagueoflegends.com/cdn/10.7.1/img/champion/${props.image}`;
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